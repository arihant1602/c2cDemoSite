import type { ZeroaraSDK, ZeroaraResult, ZeroaraAuditReport, ZeroaraVerifyOptions } from './zeroara-sdk';

/* NEODRIVE ↔ Zeroara integration.
 *
 * Zeroara is a zero-knowledge document verifier that runs entirely in the
 * user's browser. NEODRIVE never receives the Aadhaar card, the date of birth
 * or the ID number: it receives a black-boxed PDF plus a cryptographic receipt
 * that proves "Age ≥ 18" for THIS session (a fresh challenge nonce is bound
 * into the proof, so a receipt cannot be replayed for another booking).
 *
 * The SDK (zeroara.js) is a zero-dependency script served by the Zeroara
 * deployment itself. It is loaded lazily the first time verification is needed. */

export const ZEROARA_ORIGIN = (import.meta.env.VITE_ZEROARA_ORIGIN?.trim() || 'https://zeroara.vercel.app').replace(/\/+$/, '');

/** How Zeroara opens: 'auto' (popup, overlay fallback), 'popup' or 'iframe' (overlay inside this page). */
export const ZEROARA_MODE: 'auto' | 'popup' | 'iframe' = (() => {
  const m = import.meta.env.VITE_ZEROARA_MODE?.trim();
  return m === 'popup' || m === 'iframe' ? m : 'auto';
})();

/** What NEODRIVE asks Zeroara to prove. */
export const AGE_REQUEST: ZeroaraVerifyOptions = {
  document: 'aadhaar',
  claim: { field: 'Age', op: '>=', value: 18, unit: 'years' },
  requester: 'NEODRIVE',
  purpose: 'Drivers must be 18 or older to rent a vehicle',
  mode: ZEROARA_MODE,
  origin: ZEROARA_ORIGIN,
};

let sdkPromise: Promise<ZeroaraSDK> | null = null;

/** Load /sdk/zeroara.js from the configured Zeroara origin (once). */
export function loadZeroara(): Promise<ZeroaraSDK> {
  if (window.Zeroara) return Promise.resolve(window.Zeroara);
  if (!sdkPromise) {
    sdkPromise = new Promise<ZeroaraSDK>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `${ZEROARA_ORIGIN}/sdk/zeroara.js`;
      script.async = true;
      script.onload = () => {
        if (window.Zeroara) resolve(window.Zeroara);
        else {
          sdkPromise = null;
          reject(new Error(`${script.src} loaded but did not define window.Zeroara. Is ${ZEROARA_ORIGIN} an up-to-date Zeroara deployment?`));
        }
      };
      script.onerror = () => {
        sdkPromise = null;
        reject(new Error(`Could not load the Zeroara SDK from ${ZEROARA_ORIGIN}. Set VITE_ZEROARA_ORIGIN to a running Zeroara instance.`));
      };
      document.head.appendChild(script);
    });
  }
  return sdkPromise;
}

/** Ask Zeroara to prove the driver is 18+. Resolves when the user finishes. */
export async function verifyAge18(): Promise<ZeroaraResult> {
  const zeroara = await loadZeroara();
  return zeroara.verify(AGE_REQUEST);
}

/** Independently re-run Zeroara's five cryptographic checks on a receipt. */
export async function auditReceipt(bundle: unknown): Promise<ZeroaraAuditReport> {
  const zeroara = await loadZeroara();
  return zeroara.audit(bundle, { origin: ZEROARA_ORIGIN });
}

/** The few receipt fields NEODRIVE reads (the full receipt is kept verbatim). */
export interface ReceiptSummary {
  sealHex: string;
  proofVerified: boolean;
  nonce: string;
  threshold: string;
  documentLabel: string;
}

export function summarizeReceipt(bundle: unknown): ReceiptSummary {
  const b = (bundle ?? {}) as {
    masterAuditSeal?: { sealHex?: string };
    zeroKnowledgeProof?: { verified?: boolean };
    enterpriseRequirement?: { challengeNonce?: string; thresholdValue?: number; currency?: string; targetField?: string };
    scenario?: { label?: string };
  };
  const req = b.enterpriseRequirement ?? {};
  return {
    sealHex: b.masterAuditSeal?.sealHex ?? '',
    proofVerified: b.zeroKnowledgeProof?.verified === true,
    nonce: req.challengeNonce ?? '',
    threshold: req.thresholdValue !== undefined ? `${req.targetField ?? 'Value'} ≥ ${req.thresholdValue} ${req.currency ?? ''}`.trim() : '',
    documentLabel: b.scenario?.label ?? 'Document',
  };
}

export function downloadBytes(data: Uint8Array | string, fileName: string, mimeType: string) {
  const blob = new Blob([data as BlobPart], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

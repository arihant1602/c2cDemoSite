import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  AlertOctagon,
  Fingerprint,
  RefreshCw,
  Lock,
  ShieldCheck,
  Download,
  FileJson,
  ScanSearch,
  EyeOff,
  Cpu,
  Receipt,
} from 'lucide-react';
import { VerificationResult } from '../types';
import type { ZeroaraAuditReport } from '../lib/zeroara-sdk';
import { ZEROARA_ORIGIN, verifyAge18, auditReceipt, summarizeReceipt, downloadBytes } from '../lib/zeroara';

interface ExternalAgeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerificationSuccess: (result: VerificationResult) => void;
  currentResult: VerificationResult | null;
}

type Phase = 'idle' | 'loading' | 'waiting' | 'done';

export const ExternalAgeVerificationModal: React.FC<ExternalAgeVerificationModalProps> = ({
  isOpen,
  onClose,
  onVerificationSuccess,
  currentResult,
}) => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const [audit, setAudit] = useState<ZeroaraAuditReport | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);

  if (!isOpen) return null;

  const proof = currentResult?.zeroara;
  const isBusy = phase === 'loading' || phase === 'waiting';

  const runVerification = async () => {
    setErrorNotice(null);
    setAudit(null);
    setPhase('loading');
    try {
      // The SDK opens Zeroara (popup, or an overlay if popups are blocked),
      // hands it our request, and resolves once the user sends the proof back.
      setPhase('waiting');
      const result = await verifyAge18();

      if (!result.ok) {
        setErrorNotice(`REJECTED: ${result.checks.reasons.join(' ')}`);
        setPhase('idle');
        return;
      }

      const summary = summarizeReceipt(result.bundle);
      onVerificationSuccess({
        verified: true,
        idType: `${summary.documentLabel} (redacted)`,
        verificationId: `ZK-${summary.sealHex.slice(0, 12).toUpperCase()}`,
        provider: 'Zeroara · zero-knowledge proof',
        timestamp: new Date().toLocaleTimeString(),
        message: 'Age 18+ proven in zero knowledge — date of birth and ID number were never shared',
        zeroara: {
          requestId: result.requestId,
          nonce: result.request.nonce,
          sealHex: summary.sealHex,
          proofVerified: summary.proofVerified,
          threshold: summary.threshold,
          documentLabel: summary.documentLabel,
          receipt: result.bundle,
          redactedPdf: result.redactedPdfBytes,
          redactedPdfName: result.fileName,
        },
      });
      setPhase('done');
    } catch (err) {
      const e = err as Error & { code?: string };
      const text =
        e.code === 'CANCELLED'
          ? 'You cancelled the verification in Zeroara.'
          : e.code === 'CLOSED'
            ? 'The Zeroara window was closed before the proof came back.'
            : e.code === 'POPUP_BLOCKED'
              ? 'Your browser blocked the Zeroara window. Allow popups for this site and try again.'
              : e.code === 'TIMEOUT'
                ? 'Zeroara did not respond in time.'
                : e.message || 'Verification failed.';
      setErrorNotice(text);
      setPhase('idle');
    }
  };

  const runAudit = async () => {
    if (!proof) return;
    setIsAuditing(true);
    try {
      setAudit(await auditReceipt(proof.receipt));
    } catch (err) {
      setErrorNotice((err as Error).message);
    } finally {
      setIsAuditing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-lg bg-white border-2 border-black rounded-xl shadow-hard-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header Bar */}
        <div className="bg-[#171e19] text-white px-5 py-3 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#ffe17c] border border-black flex items-center justify-center">
              <Fingerprint className="w-4 h-4 text-black" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-sm tracking-tight text-white block leading-none">ZEROARA</span>
              <span className="font-mono text-[10px] text-[#b7c6c2]">Zero-knowledge 18+ verification</span>
            </div>
          </div>

          <button onClick={onClose} className="w-7 h-7 bg-white text-black border border-black flex items-center justify-center hover:bg-[#ffe17c] transition-colors" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4">
          <p className="font-body text-xs text-black/80 font-medium">
            Regulations mandate that drivers must be <strong>at least 18 years old</strong>. Zeroara proves that from your Aadhaar card on <strong>your own device</strong> — NEODRIVE never sees your date of birth, your ID number, or the card itself.
          </p>

          {/* How it works, in three tiles */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: ScanSearch, title: 'READ LOCALLY', text: 'Your card is read in your browser. Nothing is uploaded.' },
              { icon: Cpu, title: 'PROVE AGE ≥ 18', text: 'A zero-knowledge proof shows the claim is true without the birth date.' },
              { icon: Receipt, title: 'RECEIPT ONLY', text: 'We get a black-boxed PDF and a cryptographic receipt.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-[#f4f4f5] p-2.5 border-2 border-black">
                <Icon className="w-4 h-4 text-black mb-1" />
                <div className="font-heading font-black text-[10px] uppercase text-black leading-tight">{title}</div>
                <div className="font-body text-[10px] text-black/70 mt-0.5 leading-snug">{text}</div>
              </div>
            ))}
          </div>

          {/* Verified status card */}
          {currentResult?.verified && proof && !isBusy && (
            <div className="bg-[#b7c6c2] p-3 border-2 border-black space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                  <div className="min-w-0">
                    <div className="font-heading font-black text-xs uppercase text-black">STATUS: AGE 18+ PROVEN (PASS)</div>
                    <div className="font-mono text-[10px] text-black/70 truncate">Token: {currentResult.verificationId}</div>
                  </div>
                </div>
                <button onClick={onClose} className="px-3 py-1 bg-black text-[#ffe17c] font-heading font-bold text-xs border border-black shrink-0">
                  PROCEED
                </button>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 font-mono text-[10px] text-black/80 border-t border-black/20 pt-2">
                <span>Claim proven</span>
                <span className="text-right font-bold truncate">{proof.threshold || 'Age ≥ 18 years'}</span>
                <span>Document</span>
                <span className="text-right font-bold truncate">{proof.documentLabel} · redacted</span>
                <span>Zero-knowledge proof</span>
                <span className="text-right font-bold">{proof.proofVerified ? 'Groth16 · verified' : 'not verified'}</span>
                <span>Session nonce</span>
                <span className="text-right font-bold truncate">{proof.nonce.slice(0, 14)}… (matched)</span>
                <span>Master audit seal</span>
                <span className="text-right font-bold truncate">{proof.sealHex.slice(0, 16)}…</span>
                <span className="flex items-center gap-1">
                  <EyeOff className="w-3 h-3" /> Date of birth / ID number
                </span>
                <span className="text-right font-bold">never received</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  onClick={() => downloadBytes(proof.redactedPdf, proof.redactedPdfName, 'application/pdf')}
                  className="px-2.5 py-1 bg-white text-black font-heading font-bold text-[10px] uppercase border border-black hover:bg-[#ffe17c] flex items-center gap-1"
                >
                  <Download className="w-3 h-3" /> Redacted PDF
                </button>
                <button
                  onClick={() => downloadBytes(JSON.stringify(proof.receipt, null, 2), `zeroara-receipt-${proof.requestId}.json`, 'application/json')}
                  className="px-2.5 py-1 bg-white text-black font-heading font-bold text-[10px] uppercase border border-black hover:bg-[#ffe17c] flex items-center gap-1"
                >
                  <FileJson className="w-3 h-3" /> Receipt
                </button>
                <button
                  onClick={runAudit}
                  disabled={isAuditing}
                  className="px-2.5 py-1 bg-[#171e19] text-[#ffe17c] font-heading font-bold text-[10px] uppercase border border-black hover:bg-black flex items-center gap-1 disabled:opacity-60"
                >
                  {isAuditing ? <RefreshCw className="w-3 h-3 animate-spin" /> : <ShieldCheck className="w-3 h-3" />}
                  {audit ? 'Re-run audit' : 'Run independent audit'}
                </button>
              </div>

              {audit && (
                <div className="bg-white border border-black p-2 font-mono text-[10px] space-y-0.5">
                  <div className="flex justify-between font-bold">
                    <span>Independent audit · {audit.totalDurationMs} ms</span>
                    <span className={audit.overallValid ? 'text-[#0a8f2f]' : 'text-[#c02020]'}>{audit.overallValid ? 'GENUINE' : 'REJECTED'}</span>
                  </div>
                  {audit.gates.map((g) => (
                    <div key={g.gateNumber} className="flex justify-between gap-2">
                      <span className="truncate">
                        {g.gateNumber}. {g.gateName}
                      </span>
                      <span className={g.passed ? 'text-[#0a8f2f] font-bold' : 'text-[#c02020] font-bold'}>{g.passed ? 'PASS' : 'FAIL'}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Primary action */}
          {!(currentResult?.verified && !isBusy) && (
            <button
              disabled={isBusy}
              onClick={runVerification}
              className="w-full neo-btn-primary px-4 py-3 text-sm font-heading font-extrabold uppercase border-2 border-black rounded shadow-hard flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-wait"
            >
              {isBusy ? <RefreshCw className="w-4 h-4 text-[#ffe17c] animate-spin" /> : <ShieldCheck className="w-4 h-4 text-[#ffe17c]" />}
              <span>{phase === 'loading' ? 'LOADING ZEROARA…' : phase === 'waiting' ? 'WAITING FOR ZEROARA…' : 'VERIFY WITH ZEROARA'}</span>
            </button>
          )}
          {currentResult?.verified && !isBusy && (
            <button onClick={runVerification} className="w-full px-4 py-2 bg-white text-black font-heading font-bold text-xs uppercase border-2 border-black hover:bg-[#ffe17c] transition-colors">
              Verify again with a different card
            </button>
          )}

          {/* Processing Indicator */}
          {phase === 'waiting' && (
            <div className="p-3 bg-[#171e19] text-white border-2 border-black rounded flex items-start gap-3">
              <RefreshCw className="w-4 h-4 text-[#ffe17c] animate-spin shrink-0 mt-0.5" />
              <div className="font-mono text-xs text-[#ffe17c] leading-snug">
                Finish in the Zeroara window: load your Aadhaar, burn, prove, seal, then “Send proof to NEODRIVE”.
                <div className="text-white/60 mt-1">No card handy? Inside Zeroara, click “Load specimen Aadhaar”.</div>
              </div>
            </div>
          )}

          {/* Error / Rejection Notice */}
          {errorNotice && !isBusy && (
            <div className="p-3 bg-[#ff5f57]/20 border-2 border-black rounded text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-black font-heading font-bold uppercase">
                <AlertOctagon className="w-4 h-4 text-[#ff5f57]" />
                <span>Verification not completed</span>
              </div>
              <p className="font-body text-black/90 font-medium">{errorNotice}</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f4f4f5] px-5 py-2.5 border-t-2 border-black flex items-center justify-between text-[11px] font-mono text-black/60 gap-2">
          <span className="flex items-center gap-1 truncate">
            <Lock className="w-3 h-3 shrink-0" />
            <span className="truncate">Nothing leaves your device · {ZEROARA_ORIGIN.replace(/^https?:\/\//, '')}</span>
          </span>
          <button onClick={onClose} className="font-bold underline hover:text-black shrink-0">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

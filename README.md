# NEODRIVE — Neo-Brutalist Car Rental Platform

A high-performance car rental web application with an ultra-short booking flow, 18+ age verification through Zeroara (zero-knowledge proof, no ID data received), and strict adherence to Neo-Brutalist design language.

## Design Language Specifications

- **Palette**: Dominant Primary `#ffe17c` (Yellow), Deep Charcoal `#171e19`, Sage `#b7c6c2`, Pure White `#ffffff`, Black `#000000`.
- **Typography**: Headings in `Cabinet Grotesk` (Extrabold, tracking-tighter), Body in `Satoshi` (Medium, 500).
- **UI Elements**: Strict 2px solid black borders, 0-blur hard shadows (`4px 4px 0px 0px #000`, `8px 8px 0px 0px #000`, `12px 12px 0px 0px #000`), geometric corners (max 12px on buttons).
- **Hero Keyword**: Styled with `-webkit-text-stroke: 2px black` and transparent fill.
- **Background Texture**: 32px x 32px radial dot pattern on `#ffe17c` yellow sections.
- **Micro-interactions**: Neo-brutalist tactile button press on hover/active (`translate(4px, 4px)`).

## Key Features

1. **Ultra-Short Booking Form**:
   - Pickup station selection
   - Duration selector
   - Driver legal name & contact
   - Eliminates all legacy 45-minute counter queue paperwork.

2. **18+ Age Verification through Zeroara (zero-knowledge)**:
   - NEODRIVE never sees the driver's Aadhaar card, date of birth or ID number.
   - Clicking **Verify age 18+ with Zeroara** opens Zeroara on the driver's device (popup, or an overlay if popups are blocked) with a request: document `aadhaar`, claim `Age ≥ 18`, requester `NEODRIVE`, and a fresh random challenge nonce.
   - Zeroara reads the card locally, burns the sensitive fields into a flattened PDF, proves `Age ≥ 18` with a Groth16 zero-knowledge proof, seals everything, and posts back **only** the redacted PDF and a cryptographic receipt.
   - The SDK checks the receipt against the request (document type, nonce, verified proof, threshold) and NEODRIVE unblocks the booking. The modal can download the redacted PDF and the receipt, and re-run Zeroara's five cryptographic checks independently.
   - Integration code: `src/lib/zeroara.ts` (typed loader + request), `src/lib/zeroara-sdk.d.ts` (SDK types), `src/components/ExternalAgeVerificationModal.tsx` (UI). Configure the Zeroara origin with `VITE_ZEROARA_ORIGIN` (see `.env.example`); it defaults to `https://zeroara.vercel.app`.

3. **Digital Vehicle Key & NFC Simulator**:
   - Direct phone-to-car unlock simulation.
   - Live telemetry status panel with power, 0-60, and fuel/battery stats.

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

To verify against a local Zeroara instance, run Zeroara (`npm run dev` in the zeroara repo, port 1420) and copy `.env.example` to `.env.local`. Without it the site talks to `https://zeroara.vercel.app`.

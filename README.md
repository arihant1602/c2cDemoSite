# NEODRIVE — Neo-Brutalist Car Rental Platform

A high-performance car rental web application with an ultra-short booking flow, integrated external 18+ age verification KYC service, and strict adherence to Neo-Brutalist design language.

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

2. **External 18+ Age Verification Service (`VerifID Global`)**:
   - Integrated third-party KYC flow simulating biometric and cryptographic date-of-birth verification.
   - Includes 1-click test scenarios: Adult Driver (Age 26 - Pass) vs Minor Driver (Age 16 - Rejection Block).
   - Custom Date of Birth input and document type selector.
   - Emits a certified verification token to unblock vehicle booking.

3. **Digital Vehicle Key & NFC Simulator**:
   - Direct phone-to-car unlock simulation.
   - Live telemetry status panel with power, 0-60, and fuel/battery stats.

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

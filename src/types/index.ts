export interface Car {
  id: string;
  name: string;
  category: 'Electric Sport' | 'Track Special' | 'Executive GT' | 'Hyper Adventure';
  power: string;
  acceleration: string;
  topSpeed: string;
  pricePerDay: number;
  image: string;
  badge: string;
  colorTag: string;
  specs: {
    seats: number;
    range: string;
    drivetrain: string;
  };
}

/** What Zeroara handed back. NEODRIVE never sees the date of birth or the ID number. */
export interface ZeroaraProof {
  requestId: string;
  nonce: string;
  sealHex: string;
  proofVerified: boolean;
  threshold: string;
  documentLabel: string;
  /** The cryptographic receipt (audit package), kept verbatim for audits. */
  receipt: unknown;
  /** Flattened, black-boxed PDF of the document (empty when not shared). */
  redactedPdf: Uint8Array;
  redactedPdfName: string;
  /** True when the verifier API (desktop transport) checked the proof server-side. */
  serverVerified?: boolean;
}

export interface VerificationResult {
  verified: boolean;
  /** Not populated by Zeroara: the exact age is never disclosed, only "Age ≥ 18". */
  age?: number;
  dob?: string;
  idType?: string;
  verificationId?: string;
  provider: string;
  timestamp: string;
  message: string;
  zeroara?: ZeroaraProof;
}

export interface BookingData {
  carId: string;
  pickupLocation: string;
  rentalDurationDays: number;
  fullName: string;
  email: string;
  phone: string;
  isAgeVerified: boolean;
  verificationToken?: string;
}

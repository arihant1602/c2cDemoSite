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

export interface VerificationResult {
  verified: boolean;
  age?: number;
  dob?: string;
  idType?: string;
  verificationId?: string;
  provider: string;
  timestamp: string;
  message: string;
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

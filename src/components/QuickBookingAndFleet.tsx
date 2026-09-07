import React, { useState } from 'react';
import { CARS } from '../data/cars';
import { Car, VerificationResult } from '../types';
import { 
  Key, 
  MapPin, 
  Clock, 
  User, 
  ShieldCheck, 
  ShieldAlert, 
  Check, 
  ArrowRight,
  Info 
} from 'lucide-react';

interface QuickBookingAndFleetProps {
  selectedCar: Car;
  onSelectCar: (car: Car) => void;
  verificationResult: VerificationResult | null;
  onOpenVerification: () => void;
  onConfirmBooking: (bookingDetails: any) => void;
}

const LOCATIONS = [
  'SFO Airport FastTrack Lot 4',
  'LAX Express Keyless Pod B',
  'JFK Terminal 4 SkyDeck',
  'Austin Downtown EV Hub',
];

const DURATIONS = [
  { days: 1, label: '24h' },
  { days: 2, label: '48h' },
  { days: 3, label: '3 Days' },
  { days: 7, label: '7 Days' },
];

export const QuickBookingAndFleet: React.FC<QuickBookingAndFleetProps> = ({
  selectedCar,
  onSelectCar,
  verificationResult,
  onOpenVerification,
  onConfirmBooking,
}) => {
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [durationDays, setDurationDays] = useState(2);
  const [fullName, setFullName] = useState('Alex Vance');
  const [contact, setContact] = useState('+1 (555) 234-5678');
  const [formError, setFormError] = useState<string | null>(null);

  const totalPrice = selectedCar.pricePerDay * durationDays;
  const isVerified = !!verificationResult?.verified;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim() || !contact.trim()) {
      setFormError('Please provide your name and contact details.');
      return;
    }

    if (!isVerified) {
      setFormError('You must verify you are 18+ via external KYC before booking.');
      onOpenVerification();
      return;
    }

    onConfirmBooking({
      car: selectedCar,
      location,
      durationDays,
      fullName,
      contact,
      verificationResult,
      totalPrice,
      bookingTime: new Date().toISOString(),
    });
  };

  return (
    <section id="fleet" className="py-16 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-mono text-xs font-bold bg-[#ffe17c] px-2 py-0.5 border border-black uppercase">
              RESERVATION
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-black uppercase mt-1">
              CHOOSE A CAR &amp; BOOK
            </h2>
          </div>
          <p className="font-body text-sm text-black/70 max-w-sm">
            Zero paperwork. Complete 3 fields, verify your age over 18, and unlock via NFC.
          </p>
        </div>

        {/* ULTRA-SHORT 1-SCREEN BOOKING BAR */}
        <div className="bg-[#ffe17c] p-5 sm:p-6 border-2 border-black rounded-xl shadow-hard-lg mb-12">
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Field 1: Selected Car Display */}
              <div className="bg-white p-3 border-2 border-black">
                <span className="block font-heading font-bold text-[11px] uppercase text-black/70 mb-1">
                  1. Selected Car
                </span>
                <div className="font-heading font-extrabold text-sm text-black truncate">
                  {selectedCar.name}
                </div>
                <div className="font-mono text-xs text-black/70 font-bold">
                  ${selectedCar.pricePerDay}/day &bull; Total: ${totalPrice}
                </div>
              </div>

              {/* Field 2: Pickup Station */}
              <div className="bg-white p-3 border-2 border-black">
                <span className="block font-heading font-bold text-[11px] uppercase text-black/70 mb-1">
                  2. Pickup Station
                </span>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#f4f4f5] border-2 border-black px-2 py-1.5 font-body font-bold text-xs text-black focus:outline-none"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 3: Duration */}
              <div className="bg-white p-3 border-2 border-black">
                <span className="block font-heading font-bold text-[11px] uppercase text-black/70 mb-1">
                  3. Duration
                </span>
                <div className="grid grid-cols-4 gap-1">
                  {DURATIONS.map((d) => (
                    <button
                      type="button"
                      key={d.days}
                      onClick={() => setDurationDays(d.days)}
                      className={`py-1 text-xs font-heading font-extrabold border border-black transition-all ${
                        durationDays === d.days
                          ? 'bg-[#171e19] text-[#ffe17c]'
                          : 'bg-[#f4f4f5] text-black hover:bg-[#ffe17c]'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 4: Driver Name & Phone */}
              <div className="bg-white p-3 border-2 border-black">
                <span className="block font-heading font-bold text-[11px] uppercase text-black/70 mb-1">
                  4. Driver Contact
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-[#f4f4f5] border border-black px-2 py-1 text-xs font-body font-bold"
                    required
                  />
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Phone"
                    className="w-full bg-[#f4f4f5] border border-black px-2 py-1 text-xs font-body font-bold"
                    required
                  />
                </div>
              </div>

            </div>

            {/* Verification Bar & Submit Button */}
            <div className="bg-white p-3.5 border-2 border-black flex flex-col sm:flex-row items-center justify-between gap-3">
              
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <div className={`w-8 h-8 border-2 border-black flex items-center justify-center shrink-0 ${
                  isVerified ? 'bg-[#b7c6c2]' : 'bg-[#ffe17c]'
                }`}>
                  {isVerified ? (
                    <ShieldCheck className="w-5 h-5 text-black" />
                  ) : (
                    <ShieldAlert className="w-5 h-5 text-black" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-black text-xs uppercase text-black">
                      Age 18+ Verification:
                    </span>
                    <span className={`px-1.5 py-0.2 font-mono text-[10px] font-bold border border-black ${
                      isVerified ? 'bg-[#28c840] text-black' : 'bg-[#ff5f57] text-white'
                    }`}>
                      {isVerified ? 'VERIFIED' : 'REQUIRED'}
                    </span>
                  </div>
                  <span className="text-[11px] font-body text-black/70 font-medium">
                    {isVerified
                      ? `Approved by VerifID (Age: ${verificationResult?.age})`
                      : 'Third-party KYC API confirms age 18+ to unlock rental.'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                {!isVerified ? (
                  <button
                    type="button"
                    onClick={onOpenVerification}
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-[#b7c6c2] text-black font-heading font-extrabold text-xs uppercase border-2 border-black rounded shadow-hard-sm hover:bg-white transition-all"
                  >
                    VERIFY AGE 18+ (EXTERNAL KYC)
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onOpenVerification}
                    className="px-3 py-2 bg-white text-black font-heading font-bold text-xs border border-black"
                  >
                    Change KYC
                  </button>
                )}

                <button
                  type="submit"
                  className="flex-1 sm:flex-none neo-btn-primary px-6 py-2.5 text-xs font-heading font-extrabold border-2 border-black rounded shadow-hard flex items-center justify-center gap-1.5"
                >
                  <Key className="w-4 h-4 text-[#ffe17c]" />
                  <span>{isVerified ? 'BOOK & UNLOCK' : 'PROCEED'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {formError && (
              <div className="p-2.5 bg-[#ff5f57]/20 border border-black text-xs font-body font-bold flex items-center gap-2">
                <Info className="w-4 h-4 text-black shrink-0" />
                <span>{formError}</span>
              </div>
            )}

          </form>
        </div>

        {/* 4 CLEAN FLEET CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARS.map((car) => {
            const isSelected = selectedCar.id === car.id;
            return (
              <div
                key={car.id}
                onClick={() => onSelectCar(car)}
                className={`cursor-pointer transition-all border-2 border-black rounded-xl overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#ffe17c] shadow-hard-lg'
                    : 'bg-white shadow-hard hover:bg-[#f4f4f5]'
                }`}
              >
                <div>
                  <div className="relative h-40 bg-[#171e19] border-b-2 border-black overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-[#171e19] text-[#ffe17c] px-2 py-0.5 font-mono text-[10px] border border-black font-bold uppercase">
                      {car.badge}
                    </span>
                  </div>

                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-heading font-extrabold uppercase bg-[#b7c6c2] text-black px-1.5 py-0.5 border border-black">
                        {car.category}
                      </span>
                      <span className="font-heading font-extrabold text-sm text-black">
                        ${car.pricePerDay}<span className="text-[10px] font-normal text-black/70">/day</span>
                      </span>
                    </div>
                    <h4 className="font-heading font-extrabold text-base text-black tracking-tight leading-tight">
                      {car.name}
                    </h4>
                    <div className="mt-2 text-[11px] font-mono text-black/70 flex justify-between border-t border-black/10 pt-2">
                      <span>{car.power}</span>
                      <span>{car.acceleration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white border-t border-black/10">
                  <button
                    type="button"
                    className={`w-full py-2 font-heading font-extrabold text-xs uppercase border-2 border-black rounded shadow-hard-sm transition-all flex items-center justify-center gap-1 ${
                      isSelected
                        ? 'bg-[#171e19] text-[#ffe17c]'
                        : 'bg-white text-black hover:bg-[#ffe17c]'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>ACTIVE CAR</span>
                      </>
                    ) : (
                      <span>SELECT</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

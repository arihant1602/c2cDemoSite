import React, { useState } from 'react';
import { 
  CheckCircle2, 
  X, 
  Key, 
  ShieldCheck, 
  MapPin, 
  Unlock, 
  Lock 
} from 'lucide-react';

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: any;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  isOpen,
  onClose,
  bookingData,
}) => {
  const [isCarUnlocked, setIsCarUnlocked] = useState(false);

  if (!isOpen || !bookingData) return null;

  const bayNumber = 'Bay 4A';
  const confirmationCode = 'NEO-' + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-lg bg-white border-2 border-black rounded-xl shadow-hard-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header Bar */}
        <div className="bg-[#ffe17c] px-5 py-3.5 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-black text-[#ffe17c] border border-black flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-[#ffe17c]" />
            </div>
            <div>
              <span className="font-heading font-black text-sm text-black uppercase tracking-tight block leading-none">
                RESERVATION CONFIRMED
              </span>
              <span className="font-mono text-[10px] text-black/70">
                PASS #{confirmationCode}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 bg-white text-black border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4">
          
          {/* Main Pass Box */}
          <div className="bg-[#171e19] text-white p-4 border-2 border-black rounded-lg space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono text-[10px] font-bold bg-[#ffe17c] text-black px-1.5 py-0.2 border border-black uppercase">
                  ACTIVE DIGITAL KEY
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white tracking-tight mt-1">
                  {bookingData.car.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#b7c6c2] mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ffe17c]" />
                  <span>{bookingData.location} &bull; {bayNumber}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-heading font-black text-xl text-[#ffe17c]">
                  ${bookingData.totalPrice}
                </span>
                <span className="text-[10px] font-mono text-white/60 block">
                  {bookingData.durationDays}d &bull; Paid
                </span>
              </div>
            </div>

            <div className="bg-[#272727] p-2 border border-white/20 flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#28c840]" />
                <span>Age 18+ proven · Zeroara</span>
              </span>
              <span className="text-[#ffe17c] text-[11px] truncate max-w-[160px]">
                {bookingData.verificationResult?.verificationId || 'ZK-VERIFIED'}
              </span>
            </div>
          </div>

          {/* Interactive NFC Key Simulator */}
          <div className="bg-[#b7c6c2] p-4 border-2 border-black rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-heading font-black text-xs uppercase text-black">
                NFC DOOR UNLOCK SIMULATOR
              </span>
              <span className={`px-2 py-0.5 text-[10px] font-mono font-bold border border-black ${
                isCarUnlocked ? 'bg-[#28c840] text-black' : 'bg-white text-black'
              }`}>
                {isCarUnlocked ? 'DOORS UNLOCKED' : 'DOORS LOCKED'}
              </span>
            </div>

            <button
              onClick={() => setIsCarUnlocked(!isCarUnlocked)}
              className={`w-full py-2.5 font-heading font-extrabold text-xs uppercase border-2 border-black rounded shadow-hard-sm transition-all flex items-center justify-center gap-2 ${
                isCarUnlocked
                  ? 'bg-[#171e19] text-[#ffe17c]'
                  : 'bg-white text-black hover:bg-[#ffe17c]'
              }`}
            >
              {isCarUnlocked ? (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>LOCK VEHICLE</span>
                </>
              ) : (
                <>
                  <Unlock className="w-3.5 h-3.5" />
                  <span>TAP TO UNLOCK VEHICLE</span>
                </>
              )}
            </button>
          </div>

          {/* Driver details */}
          <div className="text-xs font-mono flex justify-between text-black/70 border-t border-black/10 pt-2">
            <span>Driver: <strong>{bookingData.fullName}</strong></span>
            <span>Bay: <strong>{bayNumber}</strong></span>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#f4f4f5] px-5 py-2.5 border-t-2 border-black flex justify-end">
          <button
            onClick={onClose}
            className="neo-btn-primary px-5 py-2 text-xs font-heading font-extrabold border-2 border-black rounded"
          >
            DONE
          </button>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { Car, ShieldCheck, Key } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
  onOpenVerification: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onOpenBooking,
  onOpenVerification,
}) => {
  return (
    <section id="how-it-works" className="py-20 bg-[#171e19] text-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold bg-[#272727] text-[#ffe17c] px-2 py-0.5 border border-white/20 uppercase">
            3-STEP FLOW
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white uppercase mt-1">
            HOW NEODRIVE WORKS
          </h2>
        </div>

        {/* 3-Step Horizontal Flow */}
        <div className="relative">
          
          {/* Connecting line: dark gray #272727 */}
          <div className="hidden lg:block absolute top-12 left-24 right-24 h-1 bg-[#272727] z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            
            {/* Step 1: Sage Border */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#171e19] border-4 border-[#b7c6c2] flex items-center justify-center mb-5 shadow-hard-white-lg">
                <Car className="w-9 h-9 text-[#b7c6c2]" />
              </div>
              <span className="font-mono text-xs text-[#b7c6c2] font-bold uppercase mb-1">
                STEP 01
              </span>
              <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-tight mb-2">
                Pick Your Car
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#b7c6c2] leading-relaxed max-w-xs">
                Select your machine and pickup station in our short 3-field reservation form.
              </p>
            </div>

            {/* Step 2: Yellow Border */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#171e19] border-4 border-[#ffe17c] flex items-center justify-center mb-5 shadow-hard-white-lg">
                <ShieldCheck className="w-9 h-9 text-[#ffe17c]" />
              </div>
              <span className="font-mono text-xs text-[#ffe17c] font-bold uppercase mb-1">
                STEP 02 &bull; 18+ CHECK
              </span>
              <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-tight mb-2">
                External 18+ KYC
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#b7c6c2] leading-relaxed max-w-xs">
                VerifID Global validates driver age in 15 seconds with zero paper upload.
              </p>
            </div>

            {/* Step 3: White Border */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#171e19] border-4 border-white flex items-center justify-center mb-5 shadow-hard-white-lg">
                <Key className="w-9 h-9 text-white" />
              </div>
              <span className="font-mono text-xs text-white font-bold uppercase mb-1">
                STEP 03
              </span>
              <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-tight mb-2">
                Tap Phone &amp; Drive
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#b7c6c2] leading-relaxed max-w-xs">
                Receive your digital NFC key on your phone. Walk directly to your bay and drive off.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Key, Lock, Unlock, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenVerification: () => void;
  isAgeVerified: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenVerification,
  isAgeVerified,
}) => {
  const [carUnlocked, setCarUnlocked] = useState(false);

  return (
    <section className="relative pt-28 pb-16 neo-dots border-b-2 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-black shadow-hard-sm">
              <span className="w-2 h-2 rounded-full bg-[#171e19]" />
              <span className="font-heading font-extrabold text-xs uppercase tracking-wider text-black">
                15-SEC 18+ KYC &bull; 0 COUNTER QUEUES
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black tracking-tighter leading-[0.9] uppercase">
              RENT CARS IN <span className="neo-text-stroke">SECONDS</span>, NOT QUEUES.
            </h1>

            {/* Concise Subtitle */}
            <p className="font-body font-medium text-lg sm:text-xl text-[#171e19] max-w-lg leading-snug">
              Skip the paperwork. Verify you are 18+ with our external service, select your ride, and unlock directly with your smartphone.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="neo-btn-primary px-8 py-3.5 text-base border-2 border-black rounded-neo-btn shadow-hard-lg hover:shadow-hard flex items-center gap-2"
              >
                <span>CHOOSE YOUR CAR</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenVerification}
                className="neo-btn-secondary px-6 py-3.5 text-base border-2 border-black rounded-neo-btn shadow-hard hover:shadow-none flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                <span>{isAgeVerified ? 'VERIFIED 18+ (PASS)' : 'VERIFY AGE 18+'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Clean Browser Mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border-2 border-black rounded-[1rem] shadow-hard-xl overflow-hidden">
              
              {/* Browser Header Bar */}
              <div className="bg-[#000000] px-4 py-3 border-b-2 border-black flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="bg-[#171e19] text-[#b7c6c2] font-mono text-[11px] px-3 py-0.5 border border-black rounded">
                  neodrive.internal/pass
                </div>
                <div className="text-white/40 font-mono text-[10px]">LIVE</div>
              </div>

              {/* Clean Preview Content */}
              <div className="p-5 bg-white space-y-4">
                
                {/* Active Vehicle Card */}
                <div className="bg-[#171e19] text-white p-4 border-2 border-black rounded-lg shadow-hard-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-heading font-bold bg-[#ffe17c] text-black px-2 py-0.5 border border-black uppercase">
                        INSTANT BOOKING
                      </span>
                      <h3 className="font-heading font-extrabold text-xl tracking-tight text-white mt-1">
                        Porsche 911 GT3
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="font-heading font-black text-[#ffe17c] text-xl">
                        $440
                      </span>
                      <span className="text-xs text-white/70 block">/day</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/20 font-mono text-xs text-[#b7c6c2]">
                    <span>502 HP &bull; Flat-6</span>
                    <span className="text-white font-bold">Bay 4A (SFO)</span>
                  </div>
                </div>

                {/* 2 Clean Panels */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Status Panel */}
                  <div className="bg-[#b7c6c2] p-3 border-2 border-black rounded-lg shadow-hard-sm flex flex-col justify-between">
                    <span className="text-[10px] font-heading font-black uppercase text-black">
                      AGE VERIFICATION
                    </span>
                    <div className="my-1 flex items-center gap-1.5">
                      <CheckCircle2 className={`w-4 h-4 ${isAgeVerified ? 'text-black fill-[#ffe17c]' : 'text-black'}`} />
                      <span className="font-heading font-black text-xs text-black uppercase">
                        {isAgeVerified ? '18+ VERIFIED' : 'REQUIRED'}
                      </span>
                    </div>
                    <button
                      onClick={onOpenVerification}
                      className="w-full py-1 text-[11px] font-heading font-bold bg-white text-black border-2 border-black rounded shadow-hard-sm hover:bg-[#ffe17c] transition-colors"
                    >
                      {isAgeVerified ? 'VIEW TOKEN' : 'START KYC'}
                    </button>
                  </div>

                  {/* Unlock Simulator */}
                  <div className="bg-[#b7c6c2] p-3 border-2 border-black rounded-lg shadow-hard-sm flex flex-col justify-between">
                    <span className="text-[10px] font-heading font-black uppercase text-black">
                      SMART KEY
                    </span>
                    <div className="my-1 font-heading font-black text-xs text-black uppercase">
                      {carUnlocked ? 'DOORS UNLOCKED' : 'DOORS LOCKED'}
                    </div>
                    <button
                      onClick={() => setCarUnlocked(!carUnlocked)}
                      className={`w-full py-1 text-[11px] font-heading font-black border-2 border-black rounded shadow-hard-sm transition-all flex items-center justify-center gap-1 ${
                        carUnlocked ? 'bg-[#171e19] text-[#ffe17c]' : 'bg-[#ffe17c] text-black'
                      }`}
                    >
                      {carUnlocked ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                      <span>{carUnlocked ? 'LOCKED' : 'TAP TO UNLOCK'}</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

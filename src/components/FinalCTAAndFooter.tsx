import React from 'react';
import { Zap, ArrowRight, ShieldCheck, Globe, Terminal, Share2, Disc } from 'lucide-react';

interface FinalCTAAndFooterProps {
  onOpenBooking: () => void;
  onOpenVerification: () => void;
}

export const FinalCTAAndFooter: React.FC<FinalCTAAndFooterProps> = ({
  onOpenBooking,
  onOpenVerification,
}) => {
  return (
    <>
      {/* Final CTA on #ffe17c with large centered heading */}
      <section className="py-20 bg-[#ffe17c] border-b-2 border-black neo-dots text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tighter text-black uppercase leading-[0.95] mb-4">
            SKIP THE RENTAL <span className="neo-text-stroke">COUNTER</span>
          </h2>

          <p className="font-body font-medium text-base sm:text-lg text-[#171e19] max-w-lg mx-auto mb-8">
            Complete the 3-field reservation, verify you are 18+, and drive straight out of the airport.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto neo-btn-primary px-8 py-3.5 text-base border-2 border-black rounded-neo-btn shadow-hard-lg hover:shadow-hard flex items-center justify-center gap-2"
            >
              <span>RESERVE IN 60 SEC</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={onOpenVerification}
              className="w-full sm:w-auto neo-btn-secondary px-6 py-3.5 text-base border-2 border-black rounded-neo-btn shadow-hard hover:shadow-none flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>TEST 18+ KYC</span>
            </button>
          </div>

        </div>
      </section>

      {/* Footer in #171e19 with 4 columns */}
      <footer className="bg-[#171e19] text-white border-t-2 border-black pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/15">
            
            {/* Column 1: Brand */}
            <div className="space-y-3 col-span-2 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black border border-white/40 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#ffe17c] fill-[#ffe17c]" />
                </div>
                <span className="font-heading font-extrabold text-xl tracking-tighter text-white uppercase">
                  NEO<span className="text-[#ffe17c]">DRIVE</span>
                </span>
              </div>
              <p className="font-body text-xs text-[#b7c6c2] leading-relaxed">
                Keyless, instant car rentals with external 18+ biometric verification.
              </p>
              
              {/* 10x10 social squares */}
              <div className="flex items-center gap-2 pt-1">
                {[
                  { icon: Globe, label: 'Web' },
                  { icon: Terminal, label: 'CLI' },
                  { icon: Share2, label: 'Share' },
                  { icon: Disc, label: 'Media' }
                ].map((social, i) => {
                  const SIcon = social.icon;
                  return (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 bg-[#272727] border border-gray-400 flex items-center justify-center text-white hover:bg-[#ffe17c] hover:text-black transition-colors"
                      aria-label={social.label}
                    >
                      <SIcon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Fleet */}
            <div className="space-y-2">
              <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-white">
                THE FLEET
              </h4>
              <ul className="space-y-1.5 font-body text-xs text-[#b7c6c2]">
                <li><a href="#fleet" className="hover:text-[#ffe17c]">Porsche 911 GT3</a></li>
                <li><a href="#fleet" className="hover:text-[#ffe17c]">Tesla Model S Plaid</a></li>
                <li><a href="#fleet" className="hover:text-[#ffe17c]">BMW M4 Competition</a></li>
                <li><a href="#fleet" className="hover:text-[#ffe17c]">Rivian R1T Quad</a></li>
              </ul>
            </div>

            {/* Column 3: Trust & Age */}
            <div className="space-y-2">
              <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-white">
                VERIFICATION
              </h4>
              <ul className="space-y-1.5 font-body text-xs text-[#b7c6c2]">
                <li><button onClick={onOpenVerification} className="hover:text-[#ffe17c]">VerifID Global API</button></li>
                <li><span className="hover:text-[#ffe17c] cursor-pointer">18+ Age Check Policy</span></li>
                <li><span className="hover:text-[#ffe17c] cursor-pointer">Zero Paper Storage</span></li>
                <li><span className="hover:text-[#ffe17c] cursor-pointer">NFC Smart Keys</span></li>
              </ul>
            </div>

            {/* Column 4: Hubs */}
            <div className="space-y-2">
              <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-white">
                HUBS
              </h4>
              <ul className="space-y-1.5 font-body text-xs text-[#b7c6c2]">
                <li><span>SFO &bull; Lot 4 Bay 1-20</span></li>
                <li><span>LAX &bull; Pod B Keyless</span></li>
                <li><span>JFK &bull; T4 Skydeck</span></li>
                <li><span>Austin &bull; Central Hub</span></li>
              </ul>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#b7c6c2]/70 gap-2">
            <div>&copy; {new Date().getFullYear()} NEODRIVE PROTOCOL. ALL RIGHTS RESERVED.</div>
            <div>STRICT NEO-BRUTALIST SPEC &bull; VERIFID EXTERNAL KYC</div>
          </div>

        </div>
      </footer>
    </>
  );
};

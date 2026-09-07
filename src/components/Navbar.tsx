import React from 'react';
import { Zap, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  isAgeVerified: boolean;
  onOpenVerification: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  isAgeVerified,
  onOpenVerification,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-[#ffe17c] border-b-2 border-black z-40 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo: 10x10 black square with #ffe17c bolt */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#171e19] border-2 border-black flex items-center justify-center shadow-hard-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            <Zap className="w-6 h-6 text-[#ffe17c] fill-[#ffe17c]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-2xl tracking-tighter leading-none text-black">
              NEO<span className="neo-text-stroke">DRIVE</span>
            </span>
            <span className="font-body text-[10px] uppercase font-bold tracking-widest text-[#171e19]/80">
              60-SEC RENTAL
            </span>
          </div>
        </a>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-8 font-body font-bold text-sm tracking-tight text-black">
          <a
            href="#fleet"
            className="hover:underline underline-offset-4 decoration-2 decoration-black transition-all"
          >
            THE FLEET
          </a>
          <a
            href="#verification"
            className="hover:underline underline-offset-4 decoration-2 decoration-black transition-all flex items-center gap-1.5"
          >
            <span>18+ VERIFICATION</span>
            {isAgeVerified ? (
              <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] bg-[#171e19] text-[#ffe17c] border border-black font-bold">
                VERIFIED
              </span>
            ) : (
              <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] bg-white text-black border border-black font-bold">
                REQUIRED
              </span>
            )}
          </a>
          <a
            href="#problem-solution"
            className="hover:underline underline-offset-4 decoration-2 decoration-black transition-all"
          >
            WHY NEODRIVE
          </a>
          <a
            href="#how-it-works"
            className="hover:underline underline-offset-4 decoration-2 decoration-black transition-all"
          >
            HOW IT WORKS
          </a>
          <a
            href="#reviews"
            className="hover:underline underline-offset-4 decoration-2 decoration-black transition-all"
          >
            REVIEWS
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          {!isAgeVerified ? (
            <button
              onClick={onOpenVerification}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-heading font-extrabold bg-[#b7c6c2] text-black border-2 border-black rounded-neo-btn shadow-hard-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>PRE-VERIFY AGE</span>
            </button>
          ) : (
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-heading font-extrabold bg-white text-black border-2 border-black rounded-neo-btn shadow-hard-sm">
              <span className="w-2 h-2 rounded-full bg-[#28c840] animate-pulse"></span>
              <span>AGE 18+ CONFIRMED</span>
            </div>
          )}

          <button
            onClick={onOpenBooking}
            className="neo-btn-primary px-5 py-2.5 text-sm sm:text-base border-2 border-black shadow-hard hover:shadow-hard-sm"
          >
            BOOK IN 60 SEC
          </button>
        </div>
      </div>
    </header>
  );
};

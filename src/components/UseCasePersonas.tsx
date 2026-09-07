import React from 'react';
import { Flag, Briefcase, Compass, Check } from 'lucide-react';

interface UseCasePersonasProps {
  onOpenBooking: () => void;
}

export const UseCasePersonas: React.FC<UseCasePersonasProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 bg-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold bg-[#ffe17c] px-2 py-0.5 border border-black uppercase">
            WHO IT IS FOR
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-black uppercase mt-1">
            BUILT FOR MODERN DRIVERS
          </h2>
        </div>

        {/* 3-column bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Sage (#b7c6c2) */}
          <div className="bg-[#b7c6c2] border-2 border-black rounded-xl p-6 flex flex-col justify-between shadow-hard">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-white border-2 border-black rounded-full shadow-hard-sm mb-4">
                <Flag className="w-3 h-3 text-black" />
                <span className="font-heading font-extrabold text-[11px] uppercase tracking-wider text-black">
                  TRACK ENTHUSIAST
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-black uppercase tracking-tight mb-2">
                Canyon Carvers
              </h3>

              <p className="font-body text-xs text-black/85 font-medium leading-relaxed mb-4">
                Porsche 911 GT3s and track machinery on demand with zero long-term ownership baggage.
              </p>

              <ul className="space-y-1.5 font-body text-xs text-black font-bold">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
                  <span>Flat-6 9K RPM &amp; Michelin Pilot Cups</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
                  <span>Guaranteed exact spec on arrival</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full py-2 bg-white text-black font-heading font-extrabold text-xs uppercase border-2 border-black rounded shadow-hard-sm hover:bg-[#ffe17c] transition-colors"
            >
              SELECT CAR
            </button>
          </div>

          {/* Card 2: Yellow (#ffe17c) with 8px hard shadow */}
          <div className="bg-[#ffe17c] border-2 border-black rounded-xl p-6 flex flex-col justify-between shadow-hard-lg">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-white border-2 border-black rounded-full shadow-hard-sm mb-4">
                <Briefcase className="w-3 h-3 text-black" />
                <span className="font-heading font-extrabold text-[11px] uppercase tracking-wider text-black">
                  EXECUTIVES
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-black uppercase tracking-tight mb-2">
                Zero-Time Travel
              </h3>

              <p className="font-body text-xs text-[#171e19] font-medium leading-relaxed mb-4">
                Land at the airport and be on your way in 60 seconds. No lines, no desk agents, no paper.
              </p>

              <ul className="space-y-1.5 font-body text-xs text-black font-bold">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
                  <span>Tesla Model S Plaid &amp; BMW M</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
                  <span>Instant curbside keyless release</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full py-2 bg-[#171e19] text-[#ffe17c] font-heading font-extrabold text-xs uppercase border-2 border-black rounded shadow-hard-sm hover:bg-black transition-colors"
            >
              SELECT CAR
            </button>
          </div>

          {/* Card 3: Dark Gray (#272727) with white text */}
          <div className="bg-[#272727] text-white border-2 border-black rounded-xl p-6 flex flex-col justify-between shadow-hard">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-white border-2 border-black rounded-full shadow-hard-sm mb-4">
                <Compass className="w-3 h-3 text-black" />
                <span className="font-heading font-extrabold text-[11px] uppercase tracking-wider text-black">
                  YOUNG DRIVERS (18+)
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white uppercase tracking-tight mb-2">
                Roadtrippers
              </h3>

              <p className="font-body text-xs text-[#b7c6c2] font-medium leading-relaxed mb-4">
                No punitive $45/day underage surcharges. As long as you are 18+, you pay the exact standard rate.
              </p>

              <ul className="space-y-1.5 font-body text-xs text-white font-bold">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#ffe17c] stroke-[3]" />
                  <span>Rivian R1T Quad Adventure Truck</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#ffe17c] stroke-[3]" />
                  <span>Zero young driver surcharge penalties</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full py-2 bg-[#ffe17c] text-black font-heading font-extrabold text-xs uppercase border-2 border-black rounded shadow-hard-sm hover:bg-white transition-colors"
            >
              SELECT CAR
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { XCircle, CheckCircle, Clock, Zap } from 'lucide-react';

export const ProblemVsSolution: React.FC = () => {
  return (
    <section id="problem-solution" className="py-16 bg-white border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold bg-[#b7c6c2] px-2 py-0.5 border border-black uppercase">
            WHY NEODRIVE
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-black uppercase mt-1">
            TRADITIONAL DESKS VS NEODRIVE
          </h2>
        </div>

        {/* Side-by-side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Card A (Problem): #f4f4f5, 2px dashed gray border, 70% opacity */}
          <div className="bg-[#f4f4f5] border-2 border-dashed border-gray-500 rounded-3xl opacity-70 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-300 mb-5">
                <div>
                  <span className="font-mono text-xs font-bold text-gray-500 uppercase">
                    THE OLD WAY
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-gray-800 uppercase tracking-tight">
                    Traditional Rental Counters
                  </h3>
                </div>
                <Clock className="w-6 h-6 text-gray-500" />
              </div>

              <ul className="space-y-3 font-body font-bold text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>45-minute airport counter queues and manual passport copies</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Hidden $500 credit card deposit holds lasting 2 weeks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>Unfair $40/day underage surcharges for young drivers</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t border-gray-300 font-mono text-xs text-gray-500">
              Avg Wait Time: 45 min &bull; Paper Contracts: 8 pages
            </div>
          </div>

          {/* Card B (Solution): #ffe17c, 2px solid black border, 8px hard shadow */}
          <div className="bg-[#ffe17c] border-2 border-black rounded-3xl shadow-hard-lg p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b-2 border-black mb-5">
                <div>
                  <span className="font-heading font-black text-xs text-black uppercase bg-white px-2 py-0.5 border border-black shadow-hard-sm">
                    NEODRIVE METHOD
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-black uppercase tracking-tight mt-1">
                    Instant 60-Sec Drive-Away
                  </h3>
                </div>
                <Zap className="w-6 h-6 text-black" />
              </div>

              <ul className="space-y-3 font-body font-bold text-sm text-black">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-black fill-[#b7c6c2] shrink-0 mt-0.5" />
                  <span>Zero-knowledge 18+ age check — your date of birth and ID number stay on your device</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-black fill-[#b7c6c2] shrink-0 mt-0.5" />
                  <span>Ultra-short 3-field booking with instant confirmed bay allocation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-black fill-[#b7c6c2] shrink-0 mt-0.5" />
                  <span>Tap phone to unlock &amp; drive with zero deposit holds</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-3 border-t-2 border-black font-mono text-xs text-black font-bold flex items-center justify-between">
              <span>Avg Wait Time: 0 min</span>
              <span className="bg-black text-[#ffe17c] px-2 py-0.5 border border-black">100% KEYLESS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

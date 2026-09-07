import React from 'react';
import { ShieldCheck, Smartphone, Zap } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: '18+ External KYC',
    desc: 'Biometric verification in 15 seconds. Confirm your eligibility once and bypass all manual counter queues.'
  },
  {
    icon: Smartphone,
    title: 'NFC Smart Key',
    desc: 'Your phone is your digital key. Tap against the door pillar at your assigned bay to unlock and drive.'
  },
  {
    icon: Zap,
    title: 'Zero Paperwork',
    desc: 'No 12-page rental agreements, no hidden deposit hold delays, and guaranteed exact car specifications.'
  }
];

export const FeatureGrid: React.FC = () => {
  return (
    <section className="py-16 bg-[#ffe17c] border-y-2 border-black neo-dots">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 border border-black uppercase">
            FEATURES
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-black uppercase mt-1">
            BUILT FOR VELOCITY
          </h2>
        </div>

        {/* 3-column grid of white cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 border-2 border-black rounded-xl shadow-hard hover:shadow-hard-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* 16x16 icon box in #b7c6c2 that turns #ffe17c on hover */}
                  <div className="w-16 h-16 bg-[#b7c6c2] group-hover:bg-[#ffe17c] border-2 border-black flex items-center justify-center mb-5 transition-colors shadow-hard-sm">
                    <Icon className="w-8 h-8 text-black stroke-[2.2]" />
                  </div>

                  {/* Heading: Cabinet Grotesk 2xl */}
                  <h3 className="font-heading font-extrabold text-2xl text-black uppercase tracking-tight mb-2">
                    {feat.title}
                  </h3>

                  <p className="font-body font-medium text-sm text-[#171e19]/90 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-black/10 font-mono text-[11px] text-black/60 font-bold">
                  PROTOCOL FEATURE 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

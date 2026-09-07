import React from 'react';
import { BRANDS } from '../data/cars';

export const SocialProofMarquee: React.FC = () => {
  // Repeating list for seamless marquee
  const items = [...BRANDS, 'ACME PERFORMANCE FLEET', 'GLOBEX LUXURY MOTORS', ...BRANDS];

  return (
    <div className="w-full bg-[#171e19] border-b-2 border-black overflow-hidden py-4 sm:py-5 select-none">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {items.map((brand, idx) => (
          <div key={idx} className="flex items-center mx-6 sm:mx-8">
            <span className="font-heading font-extrabold text-lg sm:text-2xl tracking-tighter text-[#b7c6c2] opacity-50 uppercase">
              {brand}
            </span>
            <span className="ml-6 sm:ml-8 text-[#b7c6c2] opacity-30 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Marcus Vance',
    role: 'Tech Lead',
    text: 'Verified my age in 15 seconds, walked straight to Bay 4, held my phone to the pillar, and was driving my 911 GT3 in under 2 minutes.',
    stars: 5,
  },
  {
    name: 'Chloe Zhang',
    role: 'Founder',
    text: 'Legacy rentals try charging $40/day extra because I am under 25. NeoDrive only requires that you are legally over 18. Brutally simple.',
    stars: 5,
  },
  {
    name: 'Derek Sorenson',
    role: 'Product Designer',
    text: 'The 3-field form is legit. No credit card deposit holds that take two weeks to clear. Car was 100% charged and ready in my bay.',
    stars: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-[#b7c6c2] border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 border border-black uppercase">
            REVIEWS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-black uppercase mt-1">
            DRIVER EXPERIENCES
          </h2>
        </div>

        {/* Grid of 3 white cards with asymmetric corner rounding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-6 neo-testimonial-card flex flex-col justify-between hover:shadow-hard-lg transition-all"
            >
              <div>
                {/* 5-star rating in #ffbc2e yellow */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#ffbc2e] fill-[#ffbc2e] stroke-black stroke-[1.5]"
                    />
                  ))}
                </div>

                <p className="font-body font-medium text-sm text-black/90 leading-relaxed mb-4 italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t-2 border-black flex items-center justify-between">
                <div>
                  <div className="font-heading font-extrabold text-sm text-black uppercase">
                    {rev.name}
                  </div>
                  <div className="font-body text-xs text-black/60 font-medium">
                    {rev.role}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 bg-[#ffe17c] px-1.5 py-0.5 text-[10px] font-mono font-bold border border-black">
                  <ShieldCheck className="w-3 h-3 text-black" />
                  <span>VERIFIED 18+</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

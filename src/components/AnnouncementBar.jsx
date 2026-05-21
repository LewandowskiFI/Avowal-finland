import React from 'react';

export const AnnouncementBar = () => {
  return (
    <div className="w-full bg-brand-gold text-brand-midnight py-2 overflow-hidden z-40 relative">
      <div className="whitespace-nowrap animate-marquee flex items-center min-w-max">
        {/* Repeat text multiple times to ensure continuous infinite scrolling on large screens */}
        {[...Array(16)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0 pr-8">
            <span className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] font-bold">
              Vuoden 2026 ja 2027 varaukset tehdään nyt!
            </span>
            <span className="mx-8 opacity-50">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';

export default function TopBanner() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-4 py-3 text-center text-xs text-white shadow-md md:text-sm">
      <p className="flex flex-col items-center justify-center gap-2 font-medium tracking-wide md:flex-row md:gap-3">
        <span>🇮🇳 Proudly Made in India</span>
        <span className="hidden text-indigo-200 md:inline">•</span>
        <span>
          Developed by
          <span className="mx-2 rounded-md bg-white px-3 py-1 text-sm font-extrabold uppercase tracking-wider text-indigo-700 shadow-sm">
            Mohiuddin Ahmad
          </span>
        </span>
        <span className="hidden text-indigo-200 md:inline">•</span>
        <span>B.Tech in AI & DS, KL University, Hyderabad</span>
      </p>
    </div>
  );
}
import React from 'react';

export default function TopBanner() {
  return (
    <div className="border-b border-indigo-500/30 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 px-4 py-2 text-center text-xs text-white md:text-sm">
      <p className="flex flex-col items-center justify-center gap-1 font-medium tracking-wide md:flex-row md:gap-3">
        <span>🇮🇳 Proudly Made in India</span>
        <span className="hidden text-indigo-300 md:inline">•</span>
        <span>
          Developed by <strong className="text-indigo-300">Mohiuddin Ahmad</strong>
        </span>
        <span className="hidden text-indigo-300 md:inline">•</span>
        <span>B.Tech in AI & DS, KL University, Hyderabad</span>
      </p>
    </div>
  );
}
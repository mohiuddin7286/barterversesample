import React from 'react';

export default function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="barter-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#9333EA" />
        </linearGradient>
      </defs>

      <rect width="40" height="40" rx="12" fill="url(#barter-gradient)" fillOpacity="0.1" />

      <path d="M12 18C12 14.6863 14.6863 12 18 12H27" stroke="url(#barter-gradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 9L28 12L24 15" stroke="url(#barter-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <path d="M28 22C28 25.3137 25.3137 28 22 28H13" stroke="url(#barter-gradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 31L12 28L16 25" stroke="url(#barter-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
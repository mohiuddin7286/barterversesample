import React from 'react';
import LogoIcon from './LogoIcon';

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <div className="mb-6 flex items-center gap-2 opacity-80">
          <LogoIcon className="scale-75" />
          <h2 className="text-xl font-bold tracking-tighter text-indigo-600">
            BARTER<span className="text-slate-900">VERSE</span>
          </h2>
        </div>

        <div className="mb-8 w-full max-w-lg rounded-2xl border border-slate-200 bg-slate-50 px-8 py-5 shadow-sm">
          <p className="mb-1 text-lg font-bold text-slate-900">
            Developed by <span className="text-indigo-600">Mohiuddin Ahmad</span>
          </p>
          <p className="mb-2 text-sm font-medium text-slate-600">Pursuing B.Tech in AI & DS</p>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">KL University, Hyderabad</p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-5 py-2 text-sm font-bold text-slate-600 shadow-sm">
          <span>Proudly Made in India</span>
          <span className="text-xl">🇮🇳</span>
        </div>

        <p className="mt-10 text-xs font-medium text-slate-400">&copy; {new Date().getFullYear()} Barter Verse Trial Version. All rights reserved.</p>
      </div>
    </footer>
  );
}
import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-slate-800 bg-slate-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <h2 className="mb-6 text-xl font-bold tracking-tighter text-slate-500">
          BARTER<span className="text-slate-600">VERSE</span>
        </h2>

        <div className="mb-6 w-full max-w-lg rounded-2xl border border-slate-700/50 bg-slate-800/50 px-6 py-4 backdrop-blur-sm">
          <p className="mb-1 text-lg font-medium text-white">
            Developed by <span className="text-indigo-400">Mohiuddin Ahmad</span>
          </p>
          <p className="mb-2 text-sm text-slate-400">Pursuing B.Tech in AI & DS</p>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">KL University, Hyderabad</p>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
          <span>Proudly Made in India</span>
          <span className="text-lg">🇮🇳</span>
        </div>

        <p className="mt-8 text-xs text-slate-600">&copy; {new Date().getFullYear()} Barter Verse Trial Version. All rights reserved.</p>
      </div>
    </footer>
  );
}
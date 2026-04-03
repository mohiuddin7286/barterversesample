import React from 'react';
import { useUser } from '../contexts/UserContext';
import LogoIcon from './LogoIcon';

export default function Navbar() {
  const { coins } = useUser();

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4 shadow-sm">
      <div className="flex items-center gap-3">
        <LogoIcon />
        <h1 className="text-2xl font-bold tracking-tighter text-indigo-600">
          BARTER<span className="text-slate-900">VERSE</span>
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-inner">
          <span className="font-bold text-yellow-500">🪙 {coins}</span>
          <span className="text-xs font-medium text-slate-500">Coins</span>
        </div>
        <button className="hidden font-medium text-slate-600 transition hover:text-indigo-600 md:block">My Vault</button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-indigo-100 font-bold text-indigo-700 shadow-sm">
          ME
        </div>
      </div>
    </nav>
  );
}
import React from 'react';
import { useUser } from '../contexts/UserContext';

export default function Navbar() {
  const { coins } = useUser();

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-4">
      <h1 className="text-2xl font-bold tracking-tighter text-indigo-400">
        BARTER<span className="text-white">VERSE</span>
      </h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2">
          <span className="font-bold text-yellow-400">🪙 {coins}</span>
          <span className="text-xs text-slate-400">Coins</span>
        </div>
        <button className="hidden font-medium transition hover:text-indigo-400 md:block">My Vault</button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold shadow-lg">
          ME
        </div>
      </div>
    </nav>
  );
}
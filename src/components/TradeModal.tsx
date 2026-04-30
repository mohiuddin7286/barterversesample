import React, { useState } from 'react';
import { Listing } from '../lib/mockData';
import { useUser } from '../contexts/UserContext';

interface Props {
  item: Listing;
  onClose: () => void;
}

export default function TradeModal({ item, onClose }: Props) {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { coins } = useUser();

  if (showWaitlist) {
    if (isSubmitted) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-2xl">
            <button onClick={onClose} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors hover:text-slate-900">✕</button>
            <div className="mb-5 text-6xl">✅</div>
            <h2 className="mb-3 text-2xl font-extrabold text-slate-900">You're on the list!</h2>
            <p className="mb-8 font-medium text-slate-600">Keep an eye on your inbox.</p>
            <button
              onClick={onClose}
              className="w-full rounded-xl bg-indigo-600 px-5 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700 active:scale-95"
            >
              Awesome
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
        <div className="relative w-full max-w-md rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-2xl">
          <button onClick={onClose} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors hover:text-slate-900">✕</button>
          <div className="mb-6 text-6xl drop-shadow-md">🚀</div>
          <h2 className="mb-3 text-2xl font-extrabold text-slate-900">The Verse is Expanding!</h2>
          <p className="mb-8 font-medium text-slate-600">
            You caught us early. Live trading and smart contracts are launching soon. Join the waitlist to get 500 bonus coins.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-4 w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 font-medium text-slate-900 outline-none transition-all focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => setIsSubmitted(true)}
            className="w-full rounded-xl bg-indigo-600 px-5 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700 active:scale-95"
          >
            Claim Early Access
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors hover:text-slate-900">✕</button>
        <h2 className="mb-2 text-2xl font-extrabold text-slate-900">Propose a Trade</h2>
        <p className="mb-8 font-medium text-slate-600">
          You are making an offer for: <strong className="text-indigo-600">{item.title}</strong>
        </p>

        <div className="mb-8 space-y-4">
          <div className="group cursor-pointer rounded-xl border-2 border-slate-100 bg-slate-50 p-5 transition-all hover:border-indigo-300 hover:bg-white hover:shadow-md">
            <p className="font-bold text-slate-700 group-hover:text-indigo-600">➕ Offer an item from your Vault</p>
          </div>
          <div className="group flex cursor-pointer items-center justify-between rounded-xl border-2 border-slate-100 bg-slate-50 p-5 transition-all hover:border-yellow-400 hover:bg-white hover:shadow-md">
            <p className="font-bold text-slate-700 group-hover:text-yellow-600">🪙 Offer Barter Coins</p>
            <span className="rounded-md border border-slate-100 bg-white px-3 py-1.5 text-sm font-bold text-slate-500 shadow-sm">Balance: {coins}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border-2 border-slate-200 px-4 py-3.5 font-bold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowWaitlist(true)}
            className="flex-1 rounded-xl bg-indigo-600 px-4 py-3.5 font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700 active:scale-95"
          >
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
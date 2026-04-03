import React, { useState } from 'react';
import { Listing } from '../lib/mockData';
import { useUser } from '../contexts/UserContext';

interface Props {
  item: Listing;
  onClose: () => void;
}

export default function TradeModal({ item, onClose }: Props) {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const { coins } = useUser();

  if (showWaitlist) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-2xl border border-slate-600 bg-gradient-to-b from-indigo-900/40 to-slate-800 p-8 text-center shadow-2xl">
          <div className="mb-4 text-5xl">🚀</div>
          <h2 className="mb-4 text-2xl font-bold">The Verse is Expanding!</h2>
          <p className="mb-6 text-slate-300">
            You caught us early. Live trading and smart contracts are launching soon. Join the waitlist to get 500 bonus coins.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-4 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-white px-4 py-3 font-bold text-slate-900 transition hover:bg-slate-200"
          >
            Claim Early Access
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-slate-600 bg-slate-800 p-8 shadow-2xl">
        <h2 className="mb-2 text-2xl font-bold">Propose a Trade</h2>
        <p className="mb-6 text-slate-400">
          You are making an offer for: <strong className="text-white">{item.title}</strong>
        </p>

        <div className="mb-8 space-y-4">
          <div className="cursor-pointer rounded-lg border border-slate-600 bg-slate-700/50 p-4 transition hover:border-indigo-400">
            <p className="font-bold">➕ Offer an item from your Vault</p>
          </div>
          <div className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-600 bg-slate-700/50 p-4 transition hover:border-yellow-400">
            <p className="font-bold">🪙 Offer Barter Coins</p>
            <span className="text-sm text-slate-400">Balance: {coins}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-slate-600 px-4 py-3 font-medium transition hover:bg-slate-700"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowWaitlist(true)}
            className="flex-1 rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
          >
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Listing } from '../lib/mockData';

interface Props {
  item: Listing;
  onTradeClick: (item: Listing) => void;
}

export default function ListingCard({ item, onTradeClick }: Props) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-700 bg-slate-800 p-5 transition duration-300 hover:border-indigo-500">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <span className="rounded bg-slate-700 px-2 py-1 text-xs text-slate-300">{item.condition}</span>
      </div>

      <p className="mb-4 flex-grow text-sm text-slate-400">{item.description}</p>

      <div className="mb-6 rounded-lg border border-slate-700 bg-slate-900 p-3">
        <p className="mb-1 text-xs font-bold uppercase text-indigo-400">Seeking:</p>
        <p className="text-sm font-medium italic">{item.seeking}</p>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <div className="text-sm">
          <p className="text-slate-400">
            Listed by <span className="font-medium text-white">{item.user}</span>
          </p>
          <p className="text-xs">{item.reputation}</p>
        </div>
        <button
          onClick={() => onTradeClick(item)}
          className="rounded-lg bg-indigo-600 px-5 py-2 font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
        >
          Trade
        </button>
      </div>
    </div>
  );
}
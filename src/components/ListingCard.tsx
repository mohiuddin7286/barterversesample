import React from 'react';
import { Listing } from '../lib/mockData';

interface Props {
  item: Listing;
  onTradeClick: (item: Listing) => void;
}

export default function ListingCard({ item, onTradeClick }: Props) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-700 bg-slate-800/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="mb-3 flex items-center justify-between text-xs">
        <span className="font-semibold uppercase tracking-wider text-indigo-400">{item.category}</span>
        <span className="text-slate-500">{item.timeAgo}</span>
      </div>

      <div className="mb-2 flex items-start justify-between">
        <h3 className="text-xl font-bold leading-tight transition-colors group-hover:text-indigo-300">{item.title}</h3>
      </div>

      <span className="mb-4 inline-block w-max rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300">
        {item.condition}
      </span>

      <p className="mb-6 flex-grow text-sm text-slate-400 line-clamp-2">{item.description}</p>

      <div className="relative mb-6 overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/80 p-4">
        <div className="absolute bottom-0 left-0 top-0 w-1 bg-indigo-500"></div>
        <p className="mb-1 text-xs font-bold uppercase text-indigo-400">Seeking</p>
        <p className="text-sm font-medium text-white">{item.seeking}</p>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-700/50 pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-300">
            {item.user.charAt(0)}
          </div>
          <div className="text-sm">
            <p className="mb-1 leading-none font-medium text-white">{item.user}</p>
            <p className="text-[10px] tracking-widest">{item.reputation}</p>
          </div>
        </div>
        <button
          onClick={() => onTradeClick(item)}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition-all active:scale-95 hover:bg-indigo-500"
        >
          Trade
        </button>
      </div>
    </div>
  );
}
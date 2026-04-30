import React from 'react';
import { Listing } from '../lib/mockData';

interface Props {
  item: Listing;
  onTradeClick: (item: Listing) => void;
}

export default function ListingCard({ item, onTradeClick }: Props) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md">
          {item.condition}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <div className="mb-3 flex items-center justify-between text-xs">
          <span className="font-bold uppercase tracking-wider text-indigo-600">{item.category}</span>
          <span className="font-medium text-slate-400">{item.timeAgo}</span>
        </div>

        <h3 className="mb-2 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-indigo-600">{item.title}</h3>
        <p className="mb-6 flex-grow text-sm text-slate-500 line-clamp-2">{item.description}</p>

        <div className="relative mb-6 overflow-hidden rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
          <div className="absolute bottom-0 left-0 top-0 w-1 bg-indigo-500"></div>
          <p className="mb-1 text-xs font-bold uppercase text-indigo-600">Seeking</p>
          <p className="text-sm font-semibold text-slate-800">{item.seeking}</p>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-gradient-to-br from-indigo-100 to-purple-100 text-sm font-bold text-indigo-700">
              {item.user.charAt(0)}
            </div>
            <div className="text-sm">
              <p className="mb-1 font-bold leading-none text-slate-900">{item.user}</p>
              <p className="text-[10px] tracking-widest text-slate-400">{item.reputation}</p>
            </div>
          </div>
          <button
            onClick={() => onTradeClick(item)}
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg active:scale-95"
          >
            Trade
          </button>
        </div>
      </div>
    </div>
  );
}
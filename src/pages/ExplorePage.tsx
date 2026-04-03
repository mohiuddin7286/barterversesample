import React, { useState } from 'react';
import { MOCK_LISTINGS, Listing, Category } from '../lib/mockData';
import ListingCard from '../components/ListingCard';
import TradeModal from '../components/TradeModal';

const CATEGORIES: Category[] = ['All', 'Electronics', 'Services', 'Fashion', 'Home', 'Vehicles'];

export default function ExplorePage() {
  const [selectedItem, setSelectedItem] = useState<Listing | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredListings = activeCategory === 'All'
    ? MOCK_LISTINGS
    : MOCK_LISTINGS.filter((item) => item.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 px-6 py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
            Welcome to the New Economy
          </span>
          <h2 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            The World is Your <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Currency.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Trade skills, goods, and digital assets directly with others. No middleman, no fiat, just pure, trust-based exchange.
          </p>

          <div className="mx-auto mt-4 flex max-w-xl justify-center gap-8 border-t border-slate-800 pt-8 text-sm">
            <div>
              <p className="text-3xl font-bold text-white">2.4k</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Live Swaps</p>
            </div>
            <div className="w-px bg-slate-800"></div>
            <div>
              <p className="text-3xl font-bold text-white">850+</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Active Traders</p>
            </div>
            <div className="w-px bg-slate-800"></div>
            <div>
              <p className="text-3xl font-bold text-white">0%</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Fiat Fees</p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-7xl flex-grow px-6 py-12">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h3 className="text-2xl font-bold">Latest Discoveries</h3>

          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'border border-slate-700 bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredListings.map((item) => (
            <ListingCard
              key={item.id}
              item={item}
              onTradeClick={(clickedItem) => setSelectedItem(clickedItem)}
            />
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-800/30 py-20 text-center">
            <p className="text-lg text-slate-400">No items found in this category yet.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-indigo-400 underline hover:text-indigo-300"
            >
              View all listings
            </button>
          </div>
        )}

      {selectedItem && <TradeModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
      </main>
    </div>
  );
}
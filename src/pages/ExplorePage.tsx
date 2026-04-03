import React, { useState } from 'react';
import { MOCK_LISTINGS, Listing, Category } from '../lib/mockData';
import ListingCard from '../components/ListingCard';
import TradeModal from '../components/TradeModal';
import UpcomingFeatures from '../components/UpcomingFeatures';

const CATEGORIES: Category[] = ['All', 'Electronics', 'Services', 'Fashion', 'Home', 'Vehicles'];

export default function ExplorePage() {
  const [selectedItem, setSelectedItem] = useState<Listing | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredListings = activeCategory === 'All'
    ? MOCK_LISTINGS
    : MOCK_LISTINGS.filter((item) => item.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 px-6 py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
            Welcome to Barter Verse
          </span>
          <h2 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            The Future of{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Decentralized Trade.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Money is an illusion; value is real. Barter Verse is a next-generation marketplace where you can trade physical goods, digital assets, and professional services directly. Discover items below and see how the UI works before the official backend launch.
          </p>
        </div>
      </section>

      <main className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h3 className="text-2xl font-bold">Mockup Environment Feed</h3>

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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filteredListings.map((item) => (
            <ListingCard
              key={item.id}
              item={item}
              onTradeClick={(clickedItem) => setSelectedItem(clickedItem)}
            />
          ))}
        </div>
      </main>

      <UpcomingFeatures />

      {selectedItem && <TradeModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}
import React, { useState } from 'react';
import { MOCK_LISTINGS, Listing, Category } from '../lib/mockData';
import ListingCard from '../components/ListingCard';
import TradeModal from '../components/TradeModal';
import UpcomingFeatures from '../components/UpcomingFeatures';

const CATEGORIES: Category[] = ['All', 'Electronics', 'Services', 'Fashion', 'Home', 'Vehicles'];

export default function ExplorePage() {
  const [selectedItem, setSelectedItem] = useState<Listing | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [showVideo, setShowVideo] = useState(false);

  const filteredListings = activeCategory === 'All'
    ? MOCK_LISTINGS
    : MOCK_LISTINGS.filter((item) => item.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 rounded-full bg-indigo-400 opacity-5 blur-[150px]"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-block rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-sm">
            Welcome to Barter Verse
          </span>
          <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            The Future of <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Decentralized Trade.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Money is an illusion; value is real. Barter Verse is a next-generation marketplace where you can trade physical goods, digital assets, and professional services directly.
          </p>

          <button
            onClick={() => setShowVideo(true)}
            className="mx-auto flex items-center gap-3 rounded-xl bg-slate-900 px-8 py-4 font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:scale-105 hover:bg-indigo-600"
          >
            <span className="text-xl">▶</span> Watch Introduction Video
          </button>
        </div>
      </section>

      <main className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h3 className="text-2xl font-bold text-slate-900">Live Mockup Feed</h3>

          <div className="flex flex-wrap justify-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-50'
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

      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-900 transition-colors hover:bg-white/20"
            >
              ✕
            </button>
            <div className="aspect-video w-full bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9GqIN7DVW8U?autoplay=1"
                title="Barter Verse Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
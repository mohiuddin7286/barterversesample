import React, { useState } from 'react';
import { MOCK_LISTINGS, Listing, Category } from '../lib/mockData';
import ListingCard from '../components/ListingCard';
import TradeModal from '../components/TradeModal';
import UpcomingFeatures from '../components/UpcomingFeatures';

const CATEGORIES: Category[] = ['All', 'Electronics', 'Services', 'Fashion', 'Home', 'Vehicles'];

export default function ExplorePage() {
  const [selectedItem, setSelectedItem] = useState<Listing | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const filteredListings = activeCategory === 'All'
    ? MOCK_LISTINGS
    : MOCK_LISTINGS.filter((item) => item.category === activeCategory);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 py-24">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 rounded-full bg-indigo-400 opacity-5 blur-[150px]"></div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <span className="mb-6 inline-block rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-sm">
            Welcome to Barter Verse
          </span>
          <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            The Future of <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Decentralized Trade.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Money is an illusion; value is real. Barter Verse is a next-generation marketplace where you can trade physical goods, digital assets, and professional services directly.
          </p>

          <div className="group relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl border-4 border-white bg-slate-900 shadow-2xl">
            {!isVideoPlaying ? (
              <div
                className="absolute inset-0 flex cursor-pointer items-center justify-center"
                onClick={() => setIsVideoPlaying(true)}
              >
                <img
                  src="https://img.youtube.com/vi/9GqIN7DVW8U/maxresdefault.jpg"
                  alt="Barter Verse Introduction"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute inset-0 bg-indigo-900/10 transition-colors duration-500 group-hover:bg-transparent"></div>

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-indigo-500/50">
                  <div className="ml-1 h-0 w-0 border-t-[10px] border-b-[10px] border-l-[18px] border-t-transparent border-b-transparent border-l-indigo-600"></div>
                </div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9GqIN7DVW8U?autoplay=1"
                title="Barter Verse Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            )}
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h3 className="text-3xl font-extrabold text-slate-900">Live Mockup Feed</h3>

          <div className="flex flex-wrap justify-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
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
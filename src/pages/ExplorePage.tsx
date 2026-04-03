import React, { useState } from 'react';
import { MOCK_LISTINGS, Listing } from '../lib/mockData';
import ListingCard from '../components/ListingCard';
import TradeModal from '../components/TradeModal';

export default function ExplorePage() {
  const [selectedItem, setSelectedItem] = useState<Listing | null>(null);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-extrabold">Explore the Verse</h2>
        <p className="text-lg text-slate-400">Find what you need. Trade what you have. No fiat required.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_LISTINGS.map((item) => (
          <ListingCard key={item.id} item={item} onTradeClick={(clickedItem) => setSelectedItem(clickedItem)} />
        ))}
      </div>

      {selectedItem && <TradeModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </main>
  );
}
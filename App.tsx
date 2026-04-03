import React, { useState } from 'react';

// --- MOCK DATA (Simulating your future Prisma database) ---
const MOCK_LISTINGS = [
  {
    id: 1,
    title: "Sony PlayStation 5",
    condition: "Like New",
    description: "Hardly used, comes with one controller.",
    seeking: "Electric Guitar or iPad Pro",
    user: "Alex",
    reputation: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    title: "Logo & Brand Identity Design",
    condition: "Digital Service",
    description: "I will design a full brand package for your startup.",
    seeking: "Used Herman Miller Chair or 500 Barter Coins",
    user: "DesignNinja",
    reputation: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Vintage Leather Jacket",
    condition: "Worn/Vintage",
    description: "Classic brown leather, size Large.",
    seeking: "Record Player or Good Coffee Beans",
    user: "Sammy_T",
    reputation: "⭐⭐⭐⭐⭐",
  }
];

// --- MAIN COMPONENT ---
export default function App() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showWaitlist, setShowWaitlist] = useState(false);

  // Simulating the user's current gamified state
  const myCoins = 250;

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
        <h1 className="text-2xl font-bold tracking-tighter text-indigo-400">
          BARTER<span className="text-white">VERSE</span>
        </h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
            <span className="text-yellow-400 font-bold">🪙 {myCoins}</span>
            <span className="text-xs text-slate-400">Coins</span>
          </div>
          <button className="hidden md:block hover:text-indigo-400 transition">My Vault</button>
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold">
            ME
          </div>
        </div>
      </nav>

      {/* 2. EXPLORE FEED */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Explore the Verse</h2>
          <p className="text-slate-400">Find what you need. Trade what you have.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_LISTINGS.map((item) => (
            <div key={item.id} className="bg-slate-800 rounded-xl border border-slate-700 p-5 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <span className="bg-slate-700 text-xs px-2 py-1 rounded text-slate-300">
                  {item.condition}
                </span>
              </div>
              
              <p className="text-slate-400 text-sm mb-4 flex-grow">{item.description}</p>
              
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 mb-6">
                <p className="text-xs text-indigo-400 font-bold uppercase mb-1">Seeking:</p>
                <p className="text-sm font-medium">{item.seeking}</p>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <div className="text-sm">
                  <p className="text-slate-400">Listed by <span className="text-white">{item.user}</span></p>
                  <p className="text-xs">{item.reputation}</p>
                </div>
                <button 
                  onClick={() => setSelectedItem(item)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold transition"
                >
                  Trade
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 3. INTERACTIVE MODAL (The "How it works" part) */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl w-full max-w-lg overflow-hidden border border-slate-600 shadow-2xl">
            
            {!showWaitlist ? (
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">Propose a Trade</h2>
                <p className="text-slate-400 mb-6">You are making an offer for: <strong className="text-white">{selectedItem.title}</strong></p>
                
                <div className="space-y-4 mb-8">
                  <div className="border border-slate-600 rounded-lg p-4 bg-slate-700/50 cursor-pointer hover:border-indigo-400 transition">
                    <p className="font-bold">➕ Offer an item from your Vault</p>
                  </div>
                  <div className="border border-slate-600 rounded-lg p-4 bg-slate-700/50 flex justify-between items-center cursor-pointer hover:border-yellow-400 transition">
                    <p className="font-bold">🪙 Offer Barter Coins</p>
                    <span className="text-sm text-slate-400">Balance: {myCoins}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 px-4 py-3 border border-slate-600 rounded-xl hover:bg-slate-700 transition"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => setShowWaitlist(true)}
                    className="flex-1 px-4 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/30"
                  >
                    Send Proposal
                  </button>
                </div>
              </div>
            ) : (
              /* THE WAITLIST HOOK */
              <div className="p-8 text-center bg-gradient-to-b from-indigo-900/40 to-slate-800">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold mb-4">The Verse is Expanding!</h2>
                <p className="text-slate-300 mb-6">
                  You caught us early. Live trading, chat, and smart contracts are launching soon. Join the waitlist to secure your username and get 500 bonus coins.
                </p>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
                />
                <button 
                  onClick={() => {
                    setShowWaitlist(false);
                    setSelectedItem(null);
                  }}
                  className="w-full px-4 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition"
                >
                  Claim Early Access
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
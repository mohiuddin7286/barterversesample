import React from 'react';

export default function UpcomingFeatures() {
  const features = [
    {
      icon: '🤖',
      title: 'AI Trade Matching',
      description:
        'Our machine learning models will analyze your Vault and Wishlist to automatically suggest 3-way and 4-way multi-trades.',
    },
    {
      icon: '🔐',
      title: 'Smart Escrow',
      description:
        'Trade securely. Barter Coins and digital assets are held in automated escrow until both parties confirm delivery.',
    },
    {
      icon: '💬',
      title: 'Real-Time Negotiation',
      description:
        'A built-in chat system allowing you to haggle, counter-offer, and finalize logistics without leaving the app.',
    },
  ];

  return (
    <section className="border-t border-slate-800 bg-slate-900/50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-indigo-400">Roadmap</span>
          <h2 className="text-3xl font-extrabold md:text-4xl">The Verse is Expanding</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            This trial version is just a glimpse. The full platform is currently being developed with an advanced backend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feat, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-700 bg-slate-800 p-8 transition duration-300 hover:border-indigo-500/50">
              <div className="mb-4 text-4xl">{feat.icon}</div>
              <h3 className="mb-3 text-xl font-bold">{feat.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
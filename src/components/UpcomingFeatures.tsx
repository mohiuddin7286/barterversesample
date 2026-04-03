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
    <section className="border-t border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-indigo-600">Roadmap</span>
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">The Verse is Expanding</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            This trial version is just a glimpse. The full platform is currently being developed with an advanced backend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feat, idx) => (
            <div key={idx} className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white text-3xl shadow-sm transition-transform group-hover:scale-110">
                {feat.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">{feat.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
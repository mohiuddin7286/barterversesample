import React, { useState, useEffect, useRef } from 'react';

// --- SCROLL REVEAL ANIMATION COMPONENT ---
const FadeIn: React.FC<{ children: React.ReactNode, delay?: string }> = ({ children, delay = '' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out ${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Live Google Apps Script URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz6GRQKJ8z7Atyd7gRXA8eCpyElorH1RaE9WYnCZbxqp40wzKDH36UJzmBAurh--kk-/exec';

  // --- ANTI-SNOOPING SECURITY BLOCK ---
  useEffect(() => {
    // 1. Disable Right-Click (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Disable F12, Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspector), and Ctrl+U (View Source)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.ctrlKey && e.shiftKey && e.key === 'C') || 
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };

    // Attach event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  // --- END ANTI-SNOOPING BLOCK ---

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      setSubmitMessage('Success! You are on the waitlist.');
      setEmail('');
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50 selection:bg-indigo-500 selection:text-white">
      {/* Header Section */}
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm overflow-hidden bg-indigo-50 hover:scale-105 transition-transform">
              <img src="/barterverse-logo.png" alt="BarterVerse Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                BarterVerse
              </span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 font-medium text-sm text-slate-600 items-center">
            <a href="#about" className="hover:text-indigo-600 transition-colors">Platform</a>
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-lg active:scale-95 transition-all shadow-md">Get Early Access</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 animate-gradient-x">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-float-delayed"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Launching Soon
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Value Exchange</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Trade goods, services, skills, and more through a secure, smart-matching decentralized economy. No cash required.
            </p>
          </FadeIn>
          
          <FadeIn delay="delay-300">
            <div className="max-w-md mx-auto">
              
              {/* FOMO Counter */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex -space-x-3">
                  <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=33" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=47" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=12" alt="User" />
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">+2k</div>
                </div>
                <p className="text-sm text-slate-600 font-medium">Join <span className="font-bold text-slate-900">400+</span> early adopters</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 rounded-full border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-indigo-600 hover:shadow-xl active:scale-95 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:transform-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Notify Me'}
                </button>
              </form>
              {submitMessage && (
                <div className={`mt-4 text-sm font-semibold ${submitMessage.includes('Success') ? 'text-emerald-600' : 'text-red-500'}`}>
                  {submitMessage}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What is BarterVerse Section */}
      <section id="about" className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">What is BarterVerse?</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                BarterVerse is a modern digital barter economy built on trust and technology. We believe everyone has untapped value—whether it's an unused item sitting in your garage, a professional skill you've mastered, or a service you can provide. 
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                We eliminate the friction of traditional bartering by using smart matching and digital tokens to ensure that your goods and talents can always be exchanged for what you truly need.
              </p>
            </FadeIn>
            
            <FadeIn delay="delay-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { 
                    title: 'Physical Goods', 
                    color: 'bg-orange-50 text-orange-500',
                    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.22 22.02 11.78 22.02 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.78 1.98 12.22 1.98 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" fillOpacity="0.2"/><path d="M12 2.18L3.53 6.62C3.21 6.79 3 7.12 3 7.5V16.5C3 16.88 3.21 17.21 3.53 17.38L11.43 21.82C11.78 22.02 12.22 22.02 12.57 21.82L20.47 17.38C20.79 17.21 21 16.88 21 16.5V7.5C21 7.12 20.79 6.79 20.47 6.62L12 2.18ZM11.25 4.09L18.11 7.64L12 11.21L5.14 7.64L11.25 4.09ZM4.5 16.14V9L11.25 12.55V19.69L4.5 16.14ZM12.75 19.69V12.55L19.5 9V16.14L12.75 19.69Z"/></svg>
                  },
                  { 
                    title: 'Local Services', 
                    color: 'bg-indigo-50 text-indigo-500',
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  },
                  { 
                    title: 'Professional Skills', 
                    color: 'bg-emerald-50 text-emerald-500',
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                  },
                  { 
                    title: 'Barter Coins', 
                    color: 'bg-yellow-50 text-yellow-500',
                    isCoin: true
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color}`}>
                      {item.isCoin ? (
                        <img src="/barter-coin.png" alt="Barter Coin" className="w-8 h-8 object-contain" />
                      ) : (
                        item.icon
                      )}
                    </div>
                    <span className="font-semibold text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 relative">
             <FadeIn delay="delay-500">
               <div className="aspect-square bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-3xl absolute -inset-4 blur-3xl opacity-50"></div>
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Platform Dashboard" className="relative rounded-[2rem] shadow-2xl object-cover border border-white" />
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Engineered for Fair Exchange</h2>
              <p className="text-lg text-slate-600">We've solved the traditional problems of bartering with advanced platform mechanics, ensuring every trade is safe, flexible, and fair.</p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Secure Escrow Control', 
                desc: 'Trade with absolute peace of mind. Barter Coins and item agreements are locked in our secure digital escrow and only released when both parties verify they are satisfied with the exchange.',
                color: 'bg-indigo-50 text-indigo-500',
                icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" /></svg>
              },
              { 
                title: 'The X-to-Y Trade Engine', 
                desc: 'Direct swaps aren’t always perfect (You have X, but want Z). Our algorithm facilitates multi-way trades or supplements gaps with Barter Coins, ensuring your X seamlessly gets you your desired Y.',
                color: 'bg-blue-50 text-blue-500',
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              },
              { 
                title: 'Barter Coins Ecosystem', 
                desc: 'Earn our internal currency by offering your skills or items. Store your value safely and spend it later on exactly what you need without relying on a direct 1:1 item swap.',
                color: 'bg-amber-50 text-amber-500',
                icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4 2.25a.75.75 0 01.75-.75h14.5a.75.75 0 01.75.75v19.5a.75.75 0 01-.75.75H4.75a.75.75 0 01-.75-.75V2.25zM8.25 9a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm0 4.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" clipRule="evenodd" /></svg>
              },
              { 
                title: 'SkillShare via Google Meet', 
                desc: 'Trade knowledge remotely. Book tutoring, consulting, or lessons and instantly connect through our fully integrated Google Meet video sessions.',
                color: 'bg-purple-50 text-purple-500',
                icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" /></svg>
              },
              { 
                title: 'Location-Based Eco Map', 
                desc: 'Discover hyper-local trading opportunities in your neighborhood. Reduce shipping emissions and build a tighter-knit physical community.',
                color: 'bg-rose-50 text-rose-500',
                icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
              },
              { 
                title: 'Verified Trust Scores', 
                desc: 'Every user builds a transparent reputation. Complete successful trades, communicate well, and earn community badges to become a Top Tier Trader.',
                color: 'bg-yellow-50 text-yellow-500',
                icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
              }
            ].map((feature, i) => (
              <FadeIn key={i} delay={`delay-[${i * 100}ms]`}>
                <div className="bg-white p-8 h-full rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center tracking-tight">Frequently Asked Questions</h2>
          </FadeIn>
          
          <FadeIn delay="delay-200">
            <div className="space-y-6">
              {[
                {
                  q: "How do Barter Coins work?",
                  a: "Barter Coins act as a placeholder for value. If you offer a service but don't need anything immediately, you earn coins which you can save and spend later within the BarterVerse ecosystem."
                },
                {
                  q: "Is my trade protected?",
                  a: "Yes! We use a digital escrow system. Items and coins are held securely until both parties confirm they have received what was promised and are fully satisfied with the exchange."
                },
                {
                  q: "Is there a cost to join?",
                  a: "No, joining BarterVerse is completely free. Early adopters who sign up on this page will even receive a starting bonus of 50 Barter Coins to get their trading journey started."
                }
              ].map((faq, i) => (
                <details key={i} className="group border-b border-slate-200 pb-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-bold text-lg text-slate-800 list-none outline-none">
                    {faq.q}
                    <span className="transition-transform duration-300 group-open:rotate-180 text-indigo-500">
                      <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-4 leading-relaxed animate-[fadeIn_0.3s_ease-in-out]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Be Part of the Revolution</h2>
            <p className="text-xl text-slate-400 mb-10 font-light">BarterVerse officially launches in 2026. Join the waitlist today to secure your username and receive your starting bonus.</p>
            
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 rounded-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-md disabled:opacity-50 transition-all"
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:transform-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Secure Early Access'}
                </button>
              </form>
              {submitMessage && (
                <div className={`mt-4 text-sm font-semibold ${submitMessage.includes('Success') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {submitMessage}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 overflow-hidden">
                   <img src="/barterverse-logo.png" alt="BV Logo" className="w-full h-full object-cover" />
                </div>
                <div className="text-2xl font-extrabold text-white tracking-tight">BarterVerse</div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Redefining global value exchange through a trust-based, decentralized barter platform.
              </p>
              
              <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-inner cursor-default hover:border-indigo-500/30 transition-colors">
                <p className="text-xs text-slate-500 mb-1 font-medium tracking-wide">Conceptualized & Founded by</p>
                <p className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 uppercase tracking-wide">
                  Mohiuddin Ahmad
                </p>
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-1">
                  (B.TECH AI&DS, 2ND YEAR)
                  KL University Hyderabad, India
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#about" className="hover:text-indigo-400 transition-colors">Our Mission</a></li>
                <li><a href="#features" className="hover:text-indigo-400 transition-colors">Escrow System</a></li>
                <li><a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
                <li><a href="#features" className="hover:text-indigo-400 transition-colors">Earn Barter Coins</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Legal & Support</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Trust & Safety</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Join the Community</h4>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'Discord'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover:text-white hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-slate-400 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} BarterVerse. Proudly Made in India.</p>
            <p>Designed for the Decentralized Economy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonPage;
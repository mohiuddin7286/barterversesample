import React from 'react';

const ComingSoonPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">BarterVerse</div>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">BarterVerse: Redefining Value Exchange</h1>
        <p className="text-lg md:text-2xl mb-6">Trade goods, services, skills, and more without relying on money.</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200">Notify Me</button>
      </section>

      {/* Overview Section */}
      <section id="about" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">What is BarterVerse?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          BarterVerse is a digital barter economy platform where people can trade goods, services, skills, and local help without depending only on money.
        </p>
        <div className="flex justify-center space-x-6">
          <div className="bg-white p-4 rounded shadow">Goods</div>
          <div className="bg-white p-4 rounded shadow">Services</div>
          <div className="bg-white p-4 rounded shadow">Skills</div>
          <div className="bg-white p-4 rounded shadow">Barter Coins</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Key Features of BarterVerse</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4">
          <div className="p-4 border rounded shadow">Peer-to-peer trading</div>
          <div className="p-4 border rounded shadow">Barter Coins for flexible exchanges</div>
          <div className="p-4 border rounded shadow">SkillShare sessions with Google Meet integration</div>
          <div className="p-4 border rounded shadow">Community discussions and posts</div>
          <div className="p-4 border rounded shadow">Location-based discovery and Eco Map</div>
          <div className="p-4 border rounded shadow">Gamified quests and achievements</div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Why BarterVerse Matters</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Reduces waste by encouraging reuse, promotes skill sharing and community engagement, and provides access to services without cash dependency.
        </p>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Launching Soon!</h2>
        <p className="text-lg mb-6">Launching Soon</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200">Sign Up for Updates</button>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Proudly MADE IN INDIA by MOHIUDDIN AHMAD (Founder: Barter Verse, KL UNIVERSITY HYD)</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonPage;
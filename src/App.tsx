import React from 'react';
import { UserProvider } from './contexts/UserContext';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import ExplorePage from './pages/ExplorePage';
import Footer from './components/Footer';

export default function App() {
  return (
    <UserProvider>
      <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
        <TopBanner />
        <Navbar />
        <div className="flex-grow">
          <ExplorePage />
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}
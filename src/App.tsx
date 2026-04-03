import React from 'react';
import { UserProvider } from './contexts/UserContext';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import ExplorePage from './pages/ExplorePage';

export default function App() {
  return (
    <UserProvider>
      <div className="flex min-h-screen flex-col bg-slate-900 font-sans text-white">
        <TopBanner />
        <Navbar />
        <div className="flex-grow">
          <ExplorePage />
        </div>
      </div>
    </UserProvider>
  );
}
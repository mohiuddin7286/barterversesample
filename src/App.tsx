import React from 'react';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import ExplorePage from './pages/ExplorePage';
import Footer from './components/Footer';

export default function App() {
  return (
    <UserProvider>
      <div className="flex min-h-screen flex-col bg-slate-900 font-sans text-white">
        <Navbar />
        <div className="flex-grow">
          <ExplorePage />
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}
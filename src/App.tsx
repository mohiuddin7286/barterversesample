import React from 'react';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import ExplorePage from './pages/ExplorePage';

export default function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-slate-900 font-sans text-white">
        <Navbar />
        <ExplorePage />
      </div>
    </UserProvider>
  );
}
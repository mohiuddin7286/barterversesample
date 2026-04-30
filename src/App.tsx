import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComingSoonPage from './pages/ComingSoonPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoonPage />} />
      </Routes>
    </Router>
  );
};

export default App;
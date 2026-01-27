import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

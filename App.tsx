import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { DetectDisease } from './pages/DetectDisease';
import { PlantGuide } from './pages/PlantGuide';
import { History } from './pages/History';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detect" element={<DetectDisease />} />
            <Route path="/guide" element={<PlantGuide />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

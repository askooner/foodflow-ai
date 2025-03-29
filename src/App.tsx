import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DonorDashboard from './pages/DonorDashboard';
import FoodBankDashboard from './pages/FoodBankDashboard';
import VolunteerDashboard from './pages/VolunteerDashboard';
import AIHub from './pages/AIHub';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donor" element={<DonorDashboard />} />
          <Route path="/foodbank" element={<FoodBankDashboard />} />
          <Route path="/volunteer" element={<VolunteerDashboard />} />
          <Route path="/ai-hub" element={<AIHub />} />
        </Routes>
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Sprout className="h-6 w-6 text-primary-600" />
                <span className="text-gray-600">Food Flow</span>
              </div>
              <div className="text-sm text-gray-500">
                Supported by CSR Leaders
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
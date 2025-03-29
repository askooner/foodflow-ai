import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, BarChart2 } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-semibold text-gray-900">Food Flow</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/ai-hub"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/ai-hub'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BarChart2 className="h-4 w-4" />
              <span>AI Insights</span>
            </Link>
            
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            
            <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Store, Users } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Food Flow: Fighting Food Insecurity with AI
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Powered by AI for a Hunger-Free Canada
        </p>
        
        <div className="bg-primary-50 rounded-lg p-4 max-w-2xl mx-auto">
          <div className="flex justify-around text-primary-700">
            <div className="text-center">
              <span className="text-2xl font-bold">2.5K</span>
              <p className="text-sm">Tons of Food Saved</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold">500+</span>
              <p className="text-sm">Active Volunteers</p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold">150</span>
              <p className="text-sm">Partner Food Banks</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Link
          to="/donor"
          className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <Package className="h-12 w-12 text-primary-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Food Donors</h2>
          <p className="text-gray-600 text-center">
            Connect with food banks and make a difference in your community
          </p>
        </Link>

        <Link
          to="/foodbank"
          className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <Store className="h-12 w-12 text-primary-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Food Banks</h2>
          <p className="text-gray-600 text-center">
            Manage inventory and coordinate with donors and volunteers efficiently
          </p>
        </Link>

        <Link
          to="/volunteer"
          className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <Users className="h-12 w-12 text-primary-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Volunteers</h2>
          <p className="text-gray-600 text-center">
            Join our network of food rescue heroes and help your community
          </p>
        </Link>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          How Food Flow Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-primary-600 font-semibold mb-2">Step 1</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Donors Log Surplus
            </h3>
            <p className="text-gray-600">
              Food donors input their available surplus food and scheduling details
            </p>
          </div>
          <div>
            <div className="text-primary-600 font-semibold mb-2">Step 2</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              AI Matches Resources
            </h3>
            <p className="text-gray-600">
              Our AI system matches donations with nearby food banks and available volunteers
            </p>
          </div>
          <div>
            <div className="text-primary-600 font-semibold mb-2">Step 3</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Volunteers Deliver
            </h3>
            <p className="text-gray-600">
              Volunteers receive optimized routes and complete the food rescue mission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
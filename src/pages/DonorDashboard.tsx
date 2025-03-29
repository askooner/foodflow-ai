import React, { useState } from 'react';
import { Package, Clock, MapPin } from 'lucide-react';
import { DonorMap } from '../components/ui/DonorMap';
import { DonationHistory } from '../components/ui/DonationHistory';
import { foodBanks } from '../services/foodBankService';
import { findMatchingFoodBanks } from '../services/matchingService';

interface DonationForm {
  foodType: string;
  weight: string;
  expiryDate: string;
  storage: string;
  pickupTime: string;
}

function DonorDashboard() {
  const [showMatchingPopup, setShowMatchingPopup] = useState(false);
  const [matchingFoodBanks, setMatchingFoodBanks] = useState<typeof foodBanks>([]);
  const [formData, setFormData] = useState<DonationForm>({
    foodType: '',
    weight: '',
    expiryDate: '',
    storage: '',
    pickupTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMatchingPopup(true);
    
    // Find matching food banks
    const matches = findMatchingFoodBanks(formData, foodBanks);
    setMatchingFoodBanks(matches);
    
    // Close popup after 5 seconds if matches are found
    if (matches.length > 0) {
      setTimeout(() => setShowMatchingPopup(false), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Donor Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Total Donations: <span className="font-semibold">40kg</span>
          </div>
          <div className="text-sm text-gray-600">
            Impact: <span className="font-semibold">80 meals</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Donation Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Package className="h-5 w-5 text-primary-600" />
            <h2 className="text-xl font-semibold">Log Your Donation</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Food Type
              </label>
              <select
                name="foodType"
                value={formData.foodType}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select type</option>
                <option value="Fresh Vegetables">Fresh Vegetables</option>
                <option value="Fresh Fruits">Fresh Fruits</option>
                <option value="Dairy Products">Dairy Products</option>
                <option value="Protein">Protein (Meat/Fish)</option>
                <option value="Bread">Bread</option>
                <option value="Prepared Meals">Prepared Meals</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter weight in kg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry/Best-Before Date
              </label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Storage Requirements
              </label>
              <select
                name="storage"
                value={formData.storage}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select storage type</option>
                <option value="refrigerated">Refrigerated</option>
                <option value="dry">Dry</option>
                <option value="frozen">Frozen</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Timeframe
              </label>
              <input
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
            >
              Submit Donation
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <MapPin className="h-5 w-5 text-primary-600" />
            <h2 className="text-xl font-semibold">Nearby Food Banks</h2>
          </div>
          <DonorMap foodBanks={foodBanks} />
        </div>
      </div>

      {/* Donation History */}
      <div className="mt-8">
        <DonationHistory />
      </div>

      {/* AI Matching Popup */}
      {showMatchingPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            {matchingFoodBanks.length > 0 ? (
              <div>
                <h3 className="text-lg font-semibold mb-4">Matching Food Banks Found!</h3>
                <div className="space-y-3">
                  {matchingFoodBanks.map(bank => (
                    <div key={bank.id} className="p-3 bg-primary-50 rounded-lg">
                      <div className="font-medium text-primary-900">{bank.name}</div>
                      <div className="text-sm text-primary-700">{bank.address}</div>
                      <div className="text-sm text-primary-600 mt-1">
                        Available Capacity: {100 - bank.currentCapacity}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                <p className="text-lg font-medium">Finding best matches...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DonorDashboard;
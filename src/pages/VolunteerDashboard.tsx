import React, { useState } from 'react';
import { Star, Clock, MapPin, CheckCircle, Truck, AlertCircle } from 'lucide-react';

function VolunteerDashboard() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Volunteer Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Availability:</span>
          <button
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isAvailable ? 'bg-primary-600' : 'bg-gray-200'
            }`}
            onClick={() => setIsAvailable(!isAvailable)}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAvailable ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Star className="h-5 w-5 text-yellow-400" />
            <h2 className="font-semibold text-gray-900">Rating</h2>
          </div>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= 4 ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">Based on 28 deliveries</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="h-5 w-5 text-gray-400" />
            <h2 className="font-semibold text-gray-900">Hours This Month</h2>
          </div>
          <div className="text-3xl font-bold text-primary-600">24.5</div>
          <div className="text-sm text-gray-600">Target: 30 hours</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Truck className="h-5 w-5 text-gray-400" />
            <h2 className="font-semibold text-gray-900">Deliveries</h2>
          </div>
          <div className="text-3xl font-bold text-primary-600">28</div>
          <div className="text-sm text-gray-600">Completed this month</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Profile</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Certifications</h3>
              <div className="mt-2 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary-600" />
                <span className="text-gray-900">Food Handling Certificate</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Vehicle</h3>
              <div className="mt-2 flex items-center space-x-2">
                <Truck className="h-5 w-5 text-primary-600" />
                <span className="text-gray-900">Personal Vehicle (SUV)</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Service Area</h3>
              <div className="mt-2 flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary-600" />
                <span className="text-gray-900">Greater Toronto Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Current Tasks</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-r-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                <h3 className="font-medium text-yellow-900">Urgent Pickup Needed</h3>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-sm text-yellow-800">
                  5kg bread from Downtown Bakery
                </p>
                <p className="text-sm text-yellow-800">
                  Deliver to: Central Food Bank
                </p>
                <p className="text-sm font-medium text-yellow-800">
                  Required by: 2:00 PM
                </p>
              </div>
              <button className="mt-3 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-md text-sm font-medium hover:bg-yellow-200 transition-colors">
                Accept Task
              </button>
            </div>

            <div className="border-l-4 border-primary-600 bg-primary-50 p-4 rounded-r-lg">
              <h3 className="font-medium text-primary-900">Scheduled Pickups</h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm text-primary-800">
                  3:00 PM - Grocery Store A (15kg vegetables)
                </li>
                <li className="text-sm text-primary-800">
                  4:30 PM - Restaurant B (8kg prepared meals)
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r-lg">
              <h3 className="font-medium text-gray-900">Completed Today</h3>
              <ul className="mt-2 space-y-2">
                <li className="text-sm text-gray-600">
                  10:00 AM - Bakery C → Food Bank D
                </li>
                <li className="text-sm text-gray-600">
                  11:30 AM - Market E → Community Center F
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerDashboard;
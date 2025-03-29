import React, { useState } from 'react';
import { format } from 'date-fns';
import { ChevronDown, History, Calendar, Package, Scale, CheckCircle2, MapPin, Clock, AlertCircle } from 'lucide-react';

interface DonationRecord {
  id: string;
  date: string;
  foodType: string;
  weight: number;
  status: 'pending' | 'in_transit' | 'delivered';
  impact: string;
  foodBank: string;
  volunteer?: string;
  urgency: 'high' | 'medium' | 'low';
  eta?: string;
  distance?: string;
}

const mockDonations: DonationRecord[] = [
  {
    id: '1',
    date: '2025-03-15',
    foodType: 'Fresh Vegetables',
    weight: 25,
    status: 'delivered',
    impact: '50 meals served',
    foodBank: 'Daily Bread Food Bank',
    volunteer: 'Sarah Chen',
    urgency: 'low',
    distance: '3.2 km'
  },
  {
    id: '2',
    date: '2025-03-14',
    foodType: 'Bread',
    weight: 15,
    status: 'delivered',
    impact: '30 meals served',
    foodBank: 'North York Harvest',
    volunteer: 'Michael Brown',
    urgency: 'low',
    distance: '5.1 km'
  },
  {
    id: '3',
    date: '2025-03-16',
    foodType: 'Dairy Products',
    weight: 20,
    status: 'in_transit',
    impact: 'Pending delivery',
    foodBank: 'Second Harvest',
    volunteer: 'David Wilson',
    urgency: 'medium',
    eta: '30 mins',
    distance: '4.7 km'
  },
  {
    id: '4',
    date: '2025-03-16',
    foodType: 'Fresh Produce',
    weight: 30,
    status: 'pending',
    impact: 'Awaiting pickup',
    foodBank: 'Daily Bread Food Bank',
    urgency: 'high',
    distance: '2.8 km'
  }
];

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-800',
  in_transit: 'bg-blue-100 text-blue-800',
  delivered: 'bg-green-100 text-green-800'
};

const statusLabels = {
  pending: 'Pending',
  in_transit: 'In Transit',
  delivered: 'Delivered'
};

const urgencyStyles = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
};

export function DonationHistory() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'delivered'>('all');
  const [showDetails, setShowDetails] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'date' | 'urgency'>('date');

  const filteredDonations = mockDonations
    .filter(donation => 
      filter === 'all' || 
      (filter === 'pending' && donation.status === 'pending') ||
      (filter === 'delivered' && donation.status === 'delivered')
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        const urgencyOrder = { high: 0, medium: 1, low: 2 };
        return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
      }
    });

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <History className="h-5 w-5 text-primary-600" />
          <h2 className="text-xl font-semibold">Donation History</h2>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'urgency')}
              className="text-sm border-gray-300 rounded-md"
            >
              <option value="date">Date</option>
              <option value="urgency">Urgency</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'all'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'pending'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('delivered')}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === 'delivered'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Delivered
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredDonations.map((donation) => (
          <div key={donation.id} className="border rounded-lg overflow-hidden">
            <div 
              className="p-4 bg-white cursor-pointer hover:bg-gray-50"
              onClick={() => setShowDetails(showDetails === donation.id ? null : donation.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {format(new Date(donation.date), 'MMM d, yyyy')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <Package className="h-4 w-4 text-gray-400" />
                      <span className="text-sm font-medium">{donation.foodType}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Scale className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{donation.weight}kg</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[donation.status]}`}>
                    {statusLabels[donation.status]}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${urgencyStyles[donation.urgency]}`}>
                    {donation.urgency.charAt(0).toUpperCase() + donation.urgency.slice(1)} Priority
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transform transition-transform ${
                      showDetails === donation.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
            
            {showDetails === donation.id && (
              <div className="p-4 bg-gray-50 border-t">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Food Bank</h4>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <p className="text-sm text-gray-600">{donation.foodBank}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Distance: {donation.distance}</p>
                  </div>
                  {donation.volunteer && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Volunteer</h4>
                      <p className="text-sm text-gray-600">{donation.volunteer}</p>
                      {donation.eta && (
                        <div className="flex items-center space-x-1 mt-1 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>ETA: {donation.eta}</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Impact</h4>
                    <div className="flex items-center space-x-1">
                      <CheckCircle2 className="h-4 w-4 text-primary-600" />
                      <p className="text-sm text-gray-600">{donation.impact}</p>
                    </div>
                  </div>
                  {donation.status === 'pending' && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Action Needed</h4>
                      <div className="flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                        <p className="text-sm text-yellow-600">Awaiting volunteer assignment</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
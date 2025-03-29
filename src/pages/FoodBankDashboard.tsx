import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { MapPin, Clock, AlertTriangle, RefreshCw, Users, CheckCircle2, Package, Calendar } from 'lucide-react';

interface Volunteer {
  id: string;
  name: string;
  area: string;
  urgency: 'high' | 'medium' | 'low';
  availability: string[];
  skills: string[];
  certifications: string[];
  hoursThisMonth: number;
  status: 'active' | 'inactive';
}

interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  status: 'available' | 'low' | 'critical';
  needed: number;
  expiryDate: string;
  category: string;
}

const mockVolunteers: Volunteer[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    area: 'East End',
    urgency: 'high',
    availability: ['Monday AM', 'Wednesday PM', 'Friday AM'],
    skills: ['Food Handling', 'Driving', 'Inventory Management'],
    certifications: ['Food Safety', 'First Aid'],
    hoursThisMonth: 28,
    status: 'active'
  },
  {
    id: '2',
    name: 'Michael Brown',
    area: 'West End',
    urgency: 'medium',
    availability: ['Tuesday PM', 'Thursday PM', 'Saturday AM'],
    skills: ['Heavy Lifting', 'Organization', 'Customer Service'],
    certifications: ['Food Safety'],
    hoursThisMonth: 15,
    status: 'active'
  },
  {
    id: '3',
    name: 'David Wilson',
    area: 'North End',
    urgency: 'low',
    availability: ['Monday PM', 'Wednesday AM', 'Friday PM'],
    skills: ['Driving', 'Communication'],
    certifications: ["Driver's License"],
    hoursThisMonth: 22,
    status: 'active'
  }
];

const mockInventory: InventoryItem[] = [
  {
    id: '1',
    name: 'Fresh Vegetables',
    quantity: 150,
    unit: 'kg',
    status: 'low',
    needed: 250,
    expiryDate: '2025-03-20',
    category: 'Produce'
  },
  {
    id: '2',
    name: 'Canned Soup',
    quantity: 300,
    unit: 'cans',
    status: 'available',
    needed: 200,
    expiryDate: '2025-12-31',
    category: 'Non-Perishable'
  },
  {
    id: '3',
    name: 'Milk',
    quantity: 25,
    unit: 'L',
    status: 'critical',
    needed: 100,
    expiryDate: '2025-03-18',
    category: 'Dairy'
  },
  {
    id: '4',
    name: 'Bread',
    quantity: 45,
    unit: 'loaves',
    status: 'low',
    needed: 80,
    expiryDate: '2025-03-19',
    category: 'Bakery'
  }
];

function FoodBankDashboard() {
  const [selectedVolunteerFilter, setSelectedVolunteerFilter] = useState('all');
  const [selectedInventoryFilter, setSelectedInventoryFilter] = useState('all');
  const [selectedTab, setSelectedTab] = useState<'volunteers' | 'inventory'>('volunteers');

  const inventoryData = {
    labels: ['Bread', 'Vegetables', 'Fruits', 'Dairy', 'Protein', 'Grains'],
    datasets: [
      {
        label: 'Current Stock (kg)',
        data: [50, 30, 25, 15, 20, 40],
        backgroundColor: 'rgba(22, 163, 74, 0.5)',
        borderColor: 'rgb(22, 163, 74)',
        borderWidth: 1,
      },
      {
        label: 'Minimum Required (kg)',
        data: [60, 45, 35, 25, 30, 50],
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const getStatusStyle = (status: string) => {
    const styles = {
      available: 'bg-green-100 text-green-800',
      low: 'bg-yellow-100 text-yellow-800',
      critical: 'bg-red-100 text-red-800',
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800'
    };
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Food Bank Dashboard</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Request Support
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Storage Capacity</h3>
            <RefreshCw className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-end space-x-2">
            <div className="flex-1 bg-gray-100 rounded-full h-6">
              <div 
                className="bg-primary-600 h-full rounded-full"
                style={{ width: '65%' }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">65%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Active Volunteers</h3>
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold text-primary-600">8</div>
          <p className="text-sm text-gray-600">Available today</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Critical Items</h3>
            <AlertTriangle className="h-5 w-5 text-red-500" />
          </div>
          <div className="text-3xl font-bold text-red-600">3</div>
          <p className="text-sm text-gray-600">Need immediate attention</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Today's Schedule</h3>
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <div className="text-3xl font-bold text-primary-600">12</div>
          <p className="text-sm text-gray-600">Planned activities</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm mb-8">
        <div className="border-b px-6 py-4">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedTab === 'volunteers'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedTab('volunteers')}
            >
              Volunteer Management
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedTab === 'inventory'
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedTab('inventory')}
            >
              Inventory Control
            </button>
          </div>
        </div>

        {selectedTab === 'volunteers' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Volunteer List</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedVolunteerFilter('all')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedVolunteerFilter === 'all'
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedVolunteerFilter('active')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedVolunteerFilter === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Active
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Area
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Skills & Certifications
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Availability
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hours
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockVolunteers.map((volunteer) => (
                    <tr key={volunteer.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{volunteer.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{volunteer.area}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {volunteer.certifications.map((cert, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {volunteer.availability.map((time, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800"
                            >
                              {time}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{volunteer.hoursThisMonth}h</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusStyle(volunteer.status)}`}>
                          {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'inventory' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Current Inventory</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedInventoryFilter('all')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedInventoryFilter === 'all'
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedInventoryFilter('critical')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedInventoryFilter === 'critical'
                      ? 'bg-red-100 text-red-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Critical
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Needed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Expiry Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockInventory.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{item.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.quantity} {item.unit}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.needed} {item.unit}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {new Date(item.expiryDate).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusStyle(item.status)}`}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Inventory Levels</h2>
          <Bar data={inventoryData} options={chartOptions} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">AI Recommendations</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-yellow-900">Low Stock Alert</h3>
                <p className="text-sm text-yellow-800">Critical items need immediate attention</p>
                <ul className="mt-2 space-y-1 text-sm text-yellow-800">
                  <li>• Milk (25L remaining)</li>
                  <li>• Fresh Vegetables (150kg remaining)</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-primary-600 bg-primary-50 p-4 rounded-r-lg">
              <h3 className="font-medium text-primary-900">Volunteer Optimization</h3>
              <ul className="mt-2 space-y-2 text-sm text-primary-800">
                <li>• Schedule additional volunteers for Wednesday PM</li>
                <li>• Cross-train 2 volunteers on inventory management</li>
                <li>• Coordinate with Sarah Chen for urgent deliveries</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary-600 bg-primary-50 p-4 rounded-r-lg">
              <h3 className="font-medium text-primary-900">Inventory Predictions</h3>
              <ul className="mt-2 space-y-2 text-sm text-primary-800">
                <li>• Expected 30% increase in dairy demand next week</li>
                <li>• Schedule additional produce pickup on Friday</li>
                <li>• Consider temporary storage solutions for incoming bulk donation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodBankDashboard;
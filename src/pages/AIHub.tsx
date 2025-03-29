import React from 'react';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { AlertTriangle, TrendingUp, Users, Truck, Brain } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

function AIHub() {
  // Enhanced data for charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Food Donations (kg)',
        data: [1200, 1900, 1500, 2100, 1800, 2300],
        borderColor: 'rgb(22, 163, 74)',
        backgroundColor: 'rgba(22, 163, 74, 0.5)',
        fill: true,
      },
      {
        label: 'Food Rescued (kg)',
        data: [1000, 1700, 1400, 1900, 1600, 2100],
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.5)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    datasets: [
      {
        label: 'Active Volunteers',
        data: [120, 98, 85, 65, 45],
        backgroundColor: 'rgba(22, 163, 74, 0.5)',
        borderColor: 'rgb(22, 163, 74)',
        borderWidth: 1,
      },
      {
        label: 'Required Volunteers',
        data: [150, 120, 100, 80, 60],
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Vegetables', 'Fruits', 'Grains', 'Protein', 'Dairy'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(22, 163, 74, 0.7)',
          'rgba(34, 197, 94, 0.7)',
          'rgba(74, 222, 128, 0.7)',
          'rgba(134, 239, 172, 0.7)',
          'rgba(187, 247, 208, 0.7)',
        ],
        borderColor: [
          'rgb(22, 163, 74)',
          'rgb(34, 197, 94)',
          'rgb(74, 222, 128)',
          'rgb(134, 239, 172)',
          'rgb(187, 247, 208)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const radarChartData = {
    labels: ['Food Recovery', 'Volunteer Engagement', 'Distribution Efficiency', 'Community Impact', 'Resource Utilization'],
    datasets: [
      {
        label: 'Current Performance',
        data: [85, 78, 92, 88, 75],
        backgroundColor: 'rgba(22, 163, 74, 0.2)',
        borderColor: 'rgb(22, 163, 74)',
        pointBackgroundColor: 'rgb(22, 163, 74)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(22, 163, 74)',
      },
      {
        label: 'Target Performance',
        data: [90, 85, 95, 90, 85],
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: 'rgb(37, 99, 235)',
        pointBackgroundColor: 'rgb(37, 99, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(37, 99, 235)',
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
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI-Powered Insights</h1>
          <p className="mt-2 text-gray-600">Real-time analytics and predictions for optimizing food rescue operations</p>
        </div>
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary-600" />
          <span className="text-primary-600 font-medium">AI Assistant Active</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Food Rescued</p>
              <p className="text-2xl font-bold text-gray-900">2,300kg</p>
            </div>
            <TrendingUp className="h-8 w-8 text-primary-600" />
          </div>
          <div className="mt-2">
            <span className="text-sm text-green-600">↑ 15% vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Volunteers</p>
              <p className="text-2xl font-bold text-gray-900">413</p>
            </div>
            <Users className="h-8 w-8 text-primary-600" />
          </div>
          <div className="mt-2">
            <span className="text-sm text-green-600">↑ 8% vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Deliveries Today</p>
              <p className="text-2xl font-bold text-gray-900">28</p>
            </div>
            <Truck className="h-8 w-8 text-primary-600" />
          </div>
          <div className="mt-2">
            <span className="text-sm text-green-600">On track</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Urgent Needs</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
          </div>
          <div className="mt-2">
            <span className="text-sm text-yellow-600">Requires attention</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Donation & Rescue Trends</h2>
          <Line data={lineChartData} options={chartOptions} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Volunteer Distribution & Needs</h2>
          <Bar data={barChartData} options={chartOptions} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Food Category Distribution</h2>
          <div className="max-w-md mx-auto">
            <Pie data={pieChartData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <Radar data={radarChartData} options={chartOptions} />
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-6">AI Predictions & Recommendations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-primary-50 rounded-lg">
            <h3 className="font-medium text-primary-700">Peak Donation Times</h3>
            <p className="text-primary-600 mt-2">Expected surge in donations next weekend. Recommend scheduling additional volunteers.</p>
            <div className="mt-3 flex items-center text-sm text-primary-700">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>85% confidence</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-lg">
            <h3 className="font-medium text-primary-700">Resource Optimization</h3>
            <p className="text-primary-600 mt-2">East End area showing increased demand. Consider redistributing 3 volunteers from West End.</p>
            <div className="mt-3 flex items-center text-sm text-primary-700">
              <Users className="h-4 w-4 mr-1" />
              <span>92% efficiency gain</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-lg">
            <h3 className="font-medium text-primary-700">Demand Forecast</h3>
            <p className="text-primary-600 mt-2">Projected 15% increase in food bank demand next month. Focus on protein and dairy donations.</p>
            <div className="mt-3 flex items-center text-sm text-primary-700">
              <Brain className="h-4 w-4 mr-1" />
              <span>90% accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIHub;
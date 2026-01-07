# Food Flow Platform 🌿

Food Flow is an intelligent food rescue and distribution platform designed to bridge the gap between food donors, food banks, and volunteers. By leveraging AI-powered insights and real-time data, we aim to minimize food waste and ensure efficient distribution to those in need.

## 🚀 Overview

The platform serves three main user groups:
1. **Donors:** Restaurants, grocery stores, and individuals who donate surplus food.
2. **Food Banks:** Organizations that receive and distribute food to the community.
3. **Volunteers:** Individuals who facilitate the transport of food from donors to food banks.

At the core of Food Flow is the **AI Hub**, a powerful analytics dashboard that provides predictive insights to optimize logistics, volunteer allocation, and resource management.

## ✨ Key Features

### 🤖 AI Hub & Analytics
- **Real-time Analytics:** Visualizations for food donations vs. rescue trends.
- **Predictive Modeling:** AI forecasts for peak donation times and future demand.
- **Resource Optimization:** Smart recommendations for volunteer distribution based on need.
- **Performance Metrics:** Radar charts tracking efficiency, impact, and utilization.

### 🍎 Donor Dashboard
- Manage and track food donations.
- View donation history and impact reports.
- Schedule pickups.

### 🏦 Food Bank Dashboard
- Monitor inventory levels.
- Post urgent needs for specific food categories.
- Track incoming deliveries.

### 🤝 Volunteer Dashboard
- View available pickup and delivery tasks.
- Route optimization for efficient deliveries.
- Track volunteer hours and impact.

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Visualization:** [Chart.js](https://www.chartjs.org/) & [React Chartjs 2](https://react-chartjs-2.js.org/)
- **Maps:** [React Google Maps](https://www.npmjs.com/package/@react-google-maps/api)
- **Routing:** [React Router](https://reactrouter.com/)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/foodflow-ai.git
   cd foodflow-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory if needed (e.g., for Google Maps API key).
   ```env
   VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```
foodflow-ai/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.tsx   # Main navigation
│   │   └── ui/          # Shared UI elements
│   ├── pages/           # Main application pages
│   │   ├── AIHub.tsx              # Analytics dashboard
│   │   ├── DonorDashboard.tsx     # Donor interface
│   │   ├── FoodBankDashboard.tsx  # Food bank interface
│   │   ├── VolunteerDashboard.tsx # Volunteer interface
│   │   └── Home.tsx               # Landing page
│   ├── services/        # API and logic services
│   ├── types/           # TypeScript definitions
│   ├── App.tsx          # Main app component & routing
│   └── main.tsx         # Entry point
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

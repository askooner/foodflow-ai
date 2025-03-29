import { FoodBank } from '../types/foodBank';

export const foodBanks: FoodBank[] = [
  {
    id: 1,
    name: "Daily Bread Food Bank",
    position: { lat: 43.6426, lng: -79.4376 },
    address: "191 New Toronto St, Etobicoke, ON M8V 2E7",
    phone: "(416) 203-0050",
    website: "https://www.dailybread.ca",
    hours: {
      "Monday": "8:30 AM - 4:30 PM",
      "Tuesday": "8:30 AM - 4:30 PM",
      "Wednesday": "8:30 AM - 4:30 PM",
      "Thursday": "8:30 AM - 4:30 PM",
      "Friday": "8:30 AM - 4:30 PM",
      "Saturday": "Closed",
      "Sunday": "Closed"
    },
    needs: [
      { item: "Fresh Vegetables", urgency: "high" },
      { item: "Protein (Meat/Fish)", urgency: "high" },
      { item: "Whole Grains", urgency: "medium" },
      { item: "Baby Formula", urgency: "high" }
    ],
    currentCapacity: 85
  },
  {
    id: 2,
    name: "North York Harvest",
    position: { lat: 43.7615, lng: -79.4111 },
    address: "116 Industry St, North York, ON M6M 4L8",
    phone: "(416) 635-7771",
    website: "https://northyorkharvest.com",
    hours: {
      "Monday": "9:00 AM - 5:00 PM",
      "Tuesday": "9:00 AM - 5:00 PM",
      "Wednesday": "9:00 AM - 5:00 PM",
      "Thursday": "9:00 AM - 5:00 PM",
      "Friday": "9:00 AM - 4:00 PM",
      "Saturday": "10:00 AM - 2:00 PM",
      "Sunday": "Closed"
    },
    needs: [
      { item: "Dairy Products", urgency: "high" },
      { item: "Fresh Fruits", urgency: "medium" },
      { item: "Canned Protein", urgency: "high" },
      { item: "Rice", urgency: "medium" }
    ],
    currentCapacity: 60
  },
  {
    id: 3,
    name: "Second Harvest",
    position: { lat: 43.7046, lng: -79.3346 },
    address: "1450 Lodestar Rd, North York, ON M3J 3C1",
    phone: "(416) 408-2594",
    website: "https://secondharvest.ca",
    hours: {
      "Monday": "7:00 AM - 6:00 PM",
      "Tuesday": "7:00 AM - 6:00 PM",
      "Wednesday": "7:00 AM - 6:00 PM",
      "Thursday": "7:00 AM - 6:00 PM",
      "Friday": "7:00 AM - 5:00 PM",
      "Saturday": "8:00 AM - 2:00 PM",
      "Sunday": "Closed"
    },
    needs: [
      { item: "Prepared Meals", urgency: "high" },
      { item: "Fresh Vegetables", urgency: "medium" },
      { item: "Fresh Fruits", urgency: "medium" },
      { item: "Bread", urgency: "low" }
    ],
    currentCapacity: 75
  }
];
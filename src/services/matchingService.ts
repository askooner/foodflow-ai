import { FoodBank } from '../types/foodBank';

interface DonationDetails {
  foodType: string;
  weight: string;
  expiryDate: string;
  storage: string;
  pickupTime: string;
}

export function findMatchingFoodBanks(donation: DonationDetails, foodBanks: FoodBank[]): FoodBank[] {
  // Convert weight to number for comparison
  const donationWeight = parseFloat(donation.weight);
  
  // Calculate remaining capacity in kg (assuming a total capacity of 1000kg)
  const getRemainingCapacity = (bank: FoodBank) => (1000 * (100 - bank.currentCapacity)) / 100;
  
  return foodBanks.filter(bank => {
    // Check if the food bank has enough capacity
    const remainingCapacity = getRemainingCapacity(bank);
    if (remainingCapacity < donationWeight) return false;
    
    // Check if the food bank has matching needs
    const hasMatchingNeeds = bank.needs.some(need => {
      const needsUrgent = need.urgency === 'high';
      const matchesType = donation.foodType.toLowerCase().includes(need.item.toLowerCase());
      return needsUrgent && matchesType;
    });
    
    // Check if the food bank is open during pickup time
    const [pickupHour] = donation.pickupTime.split(':').map(Number);
    const todayHours = bank.hours[Object.keys(bank.hours)[new Date().getDay()]];
    if (todayHours === 'Closed') return false;
    
    const [openHour, closeHour] = todayHours.split(' - ')
      .map(time => parseInt(time.split(':')[0]) + (time.includes('PM') ? 12 : 0));
    
    const isOpenDuringPickup = pickupHour >= openHour && pickupHour < closeHour;
    
    return hasMatchingNeeds && isOpenDuringPickup;
  });
}
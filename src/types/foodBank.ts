export interface FoodBank {
  id: number;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  address: string;
  phone: string;
  website: string;
  hours: {
    [key: string]: string;
  };
  needs: {
    item: string;
    urgency: 'high' | 'medium' | 'low';
  }[];
  currentCapacity: number;
}
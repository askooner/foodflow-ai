import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { Phone, Globe, Clock, AlertCircle } from 'lucide-react';
import { FoodBank } from '../../types/foodBank';

interface DonorMapProps {
  foodBanks: FoodBank[];
}

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem'
};

const center = {
  lat: 43.6532,
  lng: -79.3832
};

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

const libraries: ("places" | "drawing" | "geometry" | "localContext" | "visualization")[] = ["places"];

const getUrgencyColor = (urgency: 'high' | 'medium' | 'low') => {
  switch (urgency) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
  }
};

const getCurrentDayHours = (hours: { [key: string]: string }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  return hours[today];
};

export function DonorMap({ foodBanks }: DonorMapProps) {
  const [selectedFoodBank, setSelectedFoodBank] = useState<FoodBank | null>(null);
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAHKTpti-s1h1XbCEf4yBV8JljLjNewLYQ",
    libraries,
  });

  const onMapClick = useCallback(() => {
    setSelectedFoodBank(null);
  }, []);

  if (loadError) {
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-800">Error loading maps</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="h-[400px] flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={11}
        options={mapOptions}
        onClick={onMapClick}
      >
        {foodBanks.map((foodBank) => (
          <Marker
            key={foodBank.id}
            position={foodBank.position}
            onClick={() => setSelectedFoodBank(foodBank)}
          />
        ))}
        {selectedFoodBank && (
          <InfoWindow
            position={selectedFoodBank.position}
            onCloseClick={() => setSelectedFoodBank(null)}
          >
            <div className="min-w-[200px]">
              <h3 className="font-semibold text-gray-900">{selectedFoodBank.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{selectedFoodBank.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      
      {selectedFoodBank && (
        <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">{selectedFoodBank.name}</h3>
            <div className="flex items-center space-x-2">
              <a
                href={`tel:${selectedFoodBank.phone}`}
                className="p-2 text-gray-600 hover:text-primary-600"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={selectedFoodBank.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-primary-600"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Hours Today</span>
              </div>
              <p className="text-sm text-gray-600">
                {getCurrentDayHours(selectedFoodBank.hours)}
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Current Needs</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {selectedFoodBank.needs.map((need, index) => (
                  <div
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(
                      need.urgency
                    )}`}
                  >
                    {need.item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Storage Capacity</span>
                <span className="text-sm text-gray-600">{selectedFoodBank.currentCapacity}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 rounded-full h-2"
                  style={{ width: `${selectedFoodBank.currentCapacity}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
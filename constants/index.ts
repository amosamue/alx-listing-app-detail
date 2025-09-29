import { PropertyProps } from '@/interfaces';

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: 'Beach House',
    address: { city: 'Accra', country: 'Ghana' },
    rating: 4.5,
    description: 'A beautiful house by the beach with amazing sunset views.',
    image: '/images/beach-house.jpg',
    category: ['WiFi', 'Pool', 'Kitchen', 'Parking'],
    price: 150,
    reviews: [
      { name: 'John Doe', avatar: '/images/avatar1.jpg', rating: 5, comment: 'Amazing stay, highly recommend!' },
      { name: 'Jane Smith', avatar: '/images/avatar2.jpg', rating: 4, comment: 'Great location and friendly host.' }
    ]
  }
];

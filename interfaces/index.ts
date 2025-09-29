export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Address {
  city: string;
  country: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  description: string;
  image: string;
  category: string[];
  price: number;
  reviews: Review[];
}

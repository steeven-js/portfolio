import type { DateInput } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export type IProductItemHeroProps = {
  name: string;
  label: string;
  caption: string;
  coverUrl: string;
};

export type IProductItemCompareProps = {
  id: string;
  name: string;
  price: number;
  coverUrl: string;
  details: string[];
  ratingNumber: number;
};

export type IProductItemProps = {
  id: string;
  name: string;
  sold: number;
  label: string;
  price: number;
  caption: string;
  stock: number;
  coverUrl: string;
  category: string;
  images: string[];
  priceSale: number;
  ratingNumber: number;
  description: string;
  totalReviews: number;
};

export type IProductFiltersProps = {
  tags: string[];
  inStock: boolean;
  brands: string[];
  shipping: string[];
  category: string;
  rating: string | null;
  price: [number, number];
};

export type IProductOrderProps = {
  id: string;
  item: string;
  price: number;
  status: string;
  orderId: string;
  deliveryDate: DateInput;
};

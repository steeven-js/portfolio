import type { IAuthorProps } from './author';
import type { ISocialLinks } from './socials';
import type { DateInput } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export type ITourProps = {
  id: string;
  slug: string;
  price: number;
  heroUrl: string;
  coverUrl: string;
  location: string;
  duration: string;
  continent: string;
  priceSale: number;
  gallery: string[];
  favorited: boolean;
  services: string[];
  description: string;
  languages: string[];
  ratingNumber: number;
  totalReviews: number;
  highlights: string[];
  createdAt: DateInput;
  tourGuide?: IAuthorProps;
  shareLinks: ISocialLinks;
  available: {
    start: DateInput;
    end: DateInput;
  };
  program: {
    label: string;
    text: string;
  }[];
};

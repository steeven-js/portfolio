import type { ISocialLinks } from './socials';
import type { DateInput } from 'src/utils/format-time';
import type { MapLocationProps } from 'src/components/map';

// ----------------------------------------------------------------------

export type IJobByCompanyProps = {
  id: string;
  name: string;
  logo: string;
  totalJobs: number;
};

export type IJobByCategoryProps = {
  id: string;
  name: string;
  icon: string;
  totalJobs: number;
};

export type IJobByCountryProps = {
  id: string;
  location: string;
  coverUrl: string;
  totalJobs: number;
};

export type IJobProps = {
  id: string;
  type: string;
  slug: string;
  level: string;
  urgent: boolean;
  content: string;
  category: string;
  location: string;
  skills: string[];
  totalViews: number;
  benefits: string[];
  favorited: boolean;
  deadline: DateInput;
  createdAt: DateInput;
  languages: string[];
  salary: string | number;
  shareLinks: ISocialLinks;
  experience: string | number;
  locationMap: MapLocationProps[];
  company: {
    name: string;
    logo: string;
  };
};

export type IJobFiltersProps = {
  type: string[];
  level: string[];
  salary: number[];
  benefits: string[];
  keyword: string | null;
  location: string | null;
  categories: string | null;
};

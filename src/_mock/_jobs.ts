import dayjs from 'dayjs';

import { fAdd } from 'src/utils/format-time';

import { CONFIG } from 'src/global-config';
import { countries } from 'src/assets/data';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const CONTENT = `
<h5>Job description</h5>
<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>

<h5>Key responsibilities</h5>
<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>

<h5>Why you'll love working here</h5>
<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>
`;

export const JOB_BENEFIT_OPTIONS = [
  'Free parking',
  'Bonus commission',
  'Travel',
  'Device support',
  'Health care',
  'Training',
  'Retirement plans',
  'Flexible work schedule',
];

// ----------------------------------------------------------------------

const getLocationMap = (index: number) => [
  {
    id: _mock.id(index),
    email: _mock.email(index),
    address: _mock.fullAddress(index),
    phoneNumber: _mock.phoneNumber(index),
    position: { lat: 33, lng: 65 },
  },
];

const getJobType = (index: number) => {
  if (index % 2) return 'Part time';
  if (index % 4) return 'Freelance';
  return 'Full time';
};

const getJobLevel = (index: number) => {
  if (index % 2) return 'Manager';
  if (index % 4) return 'Intern/student';
  return 'No experience';
};

const getSalary = (index: number) => (index % 3 ? 12000 : 'Competitive');

const getLocation = (index: number) => countries.map((option) => option.label)[index + 1];

export const _jobs = Array.from({ length: 12 }, (_, index) => ({
  id: _mock.id(index),
  content: CONTENT,
  experience: index + 1,
  category: _tags[index],
  type: getJobType(index),
  salary: getSalary(index),
  skills: _tags.slice(0, 5),
  level: getJobLevel(index),
  slug: _mock.jobTitle(index),
  location: getLocation(index),
  benefits: JOB_BENEFIT_OPTIONS,
  urgent: [1, 3].includes(index),
  favorited: [2, 4].includes(index),
  deadline: fAdd({ months: index }),
  locationMap: getLocationMap(index),
  createdAt: dayjs(new Date()).format(),
  totalViews: _mock.number.nativeL(index),
  languages: ['Russian', 'Spanish', 'English'],
  company: {
    name: _mock.companyName(index),
    logo: _mock.image.company(index),
  },
  shareLinks: {
    facebook: 'https://facebook.example.com',
    instagram: 'https://instagram.example.com',
    linkedin: 'https://linkedin.example.com',
    twitter: 'https://twitter.example.com',
  },
}));

export const _jobsByCompanies = Array.from({ length: 12 }, (_, index) => ({
  id: _mock.id(index),
  name: _mock.companyName(index),
  logo: _mock.image.company(index),
  totalJobs: 101 + index,
}));

const ICONS = [
  `${CONFIG.assetsDir}/assets/icons/solid-64/ic-finance.svg`,
  `${CONFIG.assetsDir}/assets/icons/solid-64/ic-marketing-bullhorn.svg`,
  `${CONFIG.assetsDir}/assets/icons/solid-64/ic-creativity.svg`,
  `${CONFIG.assetsDir}/assets/icons/solid-64/ic-web-programming.svg`,
  `${CONFIG.assetsDir}/assets/icons/solid-64/ic-chip.svg`,
  `${CONFIG.assetsDir}/assets/icons/solid-64/ic-customer-service.svg`,
  `${CONFIG.assetsDir}/assets/icons/solid-64/ic-stethoscope.svg`,
  `${CONFIG.assetsDir}/assets/icons/solid-64/ic-banking.svg`,
];

export const _jobsByCategories = Array.from({ length: 8 }, (_, index) => ({
  id: _mock.id(index),
  icon: ICONS[index],
  name: [
    'Accounting / Finance',
    'Marketing',
    'Design',
    'Development',
    'IT - Hardware',
    'Customer Service',
    'Health and Care',
    'Banking',
  ][index],
  totalJobs: _mock.number.nativeM(index),
}));

export const _jobsByCountries = Array.from({ length: 12 }, (_, index) => ({
  id: _mock.id(index),
  coverUrl: _mock.image.travel(index),
  totalJobs: _mock.number.nativeM(index),
  location: countries.map((option) => option.label)[index + 1],
}));

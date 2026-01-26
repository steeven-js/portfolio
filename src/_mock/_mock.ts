import { fSub } from 'src/utils/format-time';

import { CONFIG } from 'src/global-config';

import {
  _id,
  _ages,
  _roles,
  _emails,
  _prices,
  _nativeL,
  _nativeM,
  _nativeS,
  _ratings,
  _booleans,
  _percents,
  _taskNames,
  _jobTitles,
  _tourNames,
  _fullNames,
  _lastNames,
  _sentences,
  _firstNames,
  _postTitles,
  _courseNames,
  _fullAddress,
  _phoneNumbers,
  _descriptions,
  _productNames,
  _companyNames,
} from './assets';

// ----------------------------------------------------------------------

export const _mock = {
  id: (index: number) => _id[index],
  time: (index: number) => fSub({ days: index, hours: index }),
  boolean: (index: number) => _booleans[index],
  role: (index: number) => _roles[index],
  // Text
  courseNames: (index: number) => _courseNames[index],
  taskNames: (index: number) => _taskNames[index],
  postTitle: (index: number) => _postTitles[index],
  jobTitle: (index: number) => _jobTitles[index],
  tourName: (index: number) => _tourNames[index],
  productName: (index: number) => _productNames[index],
  sentence: (index: number) => _sentences[index],
  description: (index: number) => _descriptions[index],
  // Contact
  email: (index: number) => _emails[index],
  phoneNumber: (index: number) => _phoneNumbers[index],
  fullAddress: (index: number) => _fullAddress[index],
  // Name
  firstName: (index: number) => _firstNames[index],
  lastName: (index: number) => _lastNames[index],
  fullName: (index: number) => _fullNames[index],
  companyName: (index: number) => _companyNames[index],
  // Number
  number: {
    percent: (index: number) => _percents[index],
    rating: (index: number) => _ratings[index],
    age: (index: number) => _ages[index],
    price: (index: number) => _prices[index],
    nativeS: (index: number) => _nativeS[index],
    nativeM: (index: number) => _nativeM[index],
    nativeL: (index: number) => _nativeL[index],
  },
  // Media
  image: {
    cover: (index: number) => `${CONFIG.assetsDir}/assets/images/cover/cover-${index + 1}.webp`,
    course: (index: number) => `${CONFIG.assetsDir}/assets/images/course/course-${index + 1}.webp`,
    avatar: (index: number) => `${CONFIG.assetsDir}/assets/images/avatar/avatar-${index + 1}.webp`,
    travel: (index: number) => `${CONFIG.assetsDir}/assets/images/travel/travel-${index + 1}.webp`,
    career: (index: number) => `${CONFIG.assetsDir}/assets/images/career/career-${index + 1}.webp`,
    company: (index: number) =>
      `${CONFIG.assetsDir}/assets/images/company/company-${index + 1}.webp`,
    product: (index: number) =>
      `${CONFIG.assetsDir}/assets/images/z-product/product-${index + 1}.webp`,
    portrait: (index: number) =>
      `${CONFIG.assetsDir}/assets/images/portrait/portrait-${index + 1}.webp`,
    marketing: (index: number) =>
      `${CONFIG.assetsDir}/assets/images/marketing/marketing-${index + 1}.webp`,
  },
  video: (index: number) =>
    [
      `${CONFIG.assetsDir}/assets/video/video-1.mp4`,
      `${CONFIG.assetsDir}/assets/video/video-2.mp4`,
    ][index],
};

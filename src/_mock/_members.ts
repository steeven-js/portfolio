import { CONFIG } from 'src/global-config';

import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _members = Array.from({ length: 8 }, (_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  photoUrl: `${CONFIG.assetsDir}/assets/images/portrait/portrait-${index + 1}.webp`,
  socialLinks: {
    facebook: `facebook/${_mock.fullName(index)}`,
    instagram: `instagram/${_mock.fullName(index)}`,
    linkedin: `linkedin/${_mock.fullName(index)}`,
    twitter: `twitter/${_mock.fullName(index)}`,
  },
}));

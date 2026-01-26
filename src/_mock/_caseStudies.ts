import { CONFIG } from 'src/global-config';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const TITLES = [
  'Bank of America',
  'Technology Nixon',
  'Turn Key Smart',
  'Digital Shose',
  'Action Car',
  'The Zone UI',
  'Minimal UI',
  'Network Firefox',
];

const CONTENT = `
<h4>Project brief</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>

<h4>How we work</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>

<h4>Results</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>
`;

// ----------------------------------------------------------------------

const getCategory = (index: number) => {
  if ([1, 2].includes(index)) return _tags[1];
  if ([3, 4].includes(index)) return _tags[2];
  if ([5, 6].includes(index)) return _tags[3];
  return _tags[0];
};

const getGalleryImgs = () => Array.from({ length: 6 }, (_, index) => _mock.image.marketing(index));

export const _caseStudies = TITLES.map((_, index) => ({
  id: _mock.id(index),
  content: CONTENT,
  title: TITLES[index],
  createdAt: _mock.time(index),
  website: 'https://example.com/',
  description: _mock.description(index),
  coverUrl: _mock.image.marketing(index + 1),
  heroUrl: `${CONFIG.assetsDir}/assets/images/marketing/marketing-large-1.webp`,
  how_we_work:
    'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
  results:
    'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
  category: getCategory(index),
  galleryImgs: getGalleryImgs(),
}));

import { orderBy, kebabCase } from 'es-toolkit';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

export type NavItemData = {
  name: string;
  href: string;
  icon: string;
};

const componentNames = [
  'Icons',
  'Image',
  'Label',
  'Player',
  'Animate',
  'Carousel',
  'Lightbox',
  'Markdown',
  'Utilities',
  'Mega menu',
  'Scrollbar',
  'Form wizard',
  'Navigation bar',
  'Form validation',
  'Scroll progress',
];

const createComponents = componentNames.map((name) => ({
  name,
  href: `/components/${kebabCase(name)}`,
  icon: `${CONFIG.assetsDir}/assets/icons/components/ic-${kebabCase(name)}.svg`,
}));

export const allComponents = orderBy(createComponents, ['name'], ['asc']);

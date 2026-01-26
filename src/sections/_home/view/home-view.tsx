import { _pricingHome } from 'src/_mock';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeHero } from '../home-hero';
import { HomeFAQs } from '../home-faqs';
import { HomePricing } from '../home-pricing';
import { HomeNewStart } from '../home-new-start';
import { HomeMinimalUI } from '../home-combination';
import { HomeForDesigner } from '../home-for-designer';
import { HomeAdvertisement } from '../home-advertisement';
import { HomeFeatureHighlights } from '../home-feature-highlights';
import { HomeFlexibleComponents } from '../home-flexible-components';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTopButton />

      <HomeHero />

      <HomeNewStart />

      <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner />

      <HomePricing plans={_pricingHome} />

      <HomeFAQs />

      <HomeMinimalUI />

      <HomeAdvertisement />
    </>
  );
}

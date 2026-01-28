import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { PortfolioHero } from '../portfolio-hero';
import { PortfolioAbout } from '../portfolio-about';
import { PortfolioContact } from '../portfolio-contact';
import { PortfolioProjects } from '../portfolio-projects';
import { PortfolioServices } from '../portfolio-services';
import { PortfolioCertifications } from '../portfolio-certifications';

// ----------------------------------------------------------------------

export function PortfolioView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTopButton />

      <PortfolioHero />

      <PortfolioAbout />

      <PortfolioServices />

      <PortfolioCertifications />

      <PortfolioProjects />

      <PortfolioContact />
    </>
  );
}

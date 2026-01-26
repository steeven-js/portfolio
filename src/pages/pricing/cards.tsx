import { CONFIG } from 'src/global-config';

import { PricingCardsView } from 'src/sections/pricing/view/pricing-cards-view';

// ----------------------------------------------------------------------

const metadata = { title: `Pricing cards - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <PricingCardsView />
    </>
  );
}

import { CONFIG } from 'src/global-config';

import { MarketingLandingView } from 'src/sections/_marketing/view/marketing-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <MarketingLandingView />
    </>
  );
}

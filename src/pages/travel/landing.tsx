import { CONFIG } from 'src/global-config';

import { TravelLandingView } from 'src/sections/_travel/view/travel-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <TravelLandingView />
    </>
  );
}

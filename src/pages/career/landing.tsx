import { CONFIG } from 'src/global-config';

import { CareerLandingView } from 'src/sections/_career/view/career-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <CareerLandingView />
    </>
  );
}

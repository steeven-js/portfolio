import { CONFIG } from 'src/global-config';

import { TravelAboutView } from 'src/sections/_travel/view/travel-about-view';

// ----------------------------------------------------------------------

const metadata = { title: `About us | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <TravelAboutView />
    </>
  );
}

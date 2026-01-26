import { CONFIG } from 'src/global-config';

import { TravelContactView } from 'src/sections/_travel/view/travel-contact-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact us | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <TravelContactView />
    </>
  );
}

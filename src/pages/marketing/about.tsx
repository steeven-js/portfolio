import { CONFIG } from 'src/global-config';

import { MarketingAboutView } from 'src/sections/_marketing/view/marketing-about-view';

// ----------------------------------------------------------------------

const metadata = { title: `About us | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <MarketingAboutView />
    </>
  );
}

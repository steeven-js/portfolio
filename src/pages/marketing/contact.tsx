import { CONFIG } from 'src/global-config';

import { MarketingContactView } from 'src/sections/_marketing/view/marketing-contact-view';

// ----------------------------------------------------------------------

const metadata = { title: `Contact us | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <MarketingContactView />
    </>
  );
}

import { CONFIG } from 'src/global-config';

import { SupportView } from 'src/sections/support/view/support-view';

// ----------------------------------------------------------------------

const metadata = { title: `Support - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <SupportView />
    </>
  );
}

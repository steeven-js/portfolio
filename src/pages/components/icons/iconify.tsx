import { CONFIG } from 'src/global-config';

import { IconifyView } from 'src/sections/_examples/icons-view';

// ----------------------------------------------------------------------

const metadata = { title: `Icon Iconify | Components - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>

      <IconifyView />
    </>
  );
}

import { CONFIG } from 'src/global-config';

import { IconsView } from 'src/sections/_examples/icons-view';

// ----------------------------------------------------------------------

const metadata = { title: `Icons | Components - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <IconsView />
    </>
  );
}

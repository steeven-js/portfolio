import { CONFIG } from 'src/global-config';

import { TravelPostView } from 'src/sections/_travel/view/travel-post-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post details | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <TravelPostView />
    </>
  );
}

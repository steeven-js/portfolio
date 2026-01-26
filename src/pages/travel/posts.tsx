import { CONFIG } from 'src/global-config';

import { TravelPostsView } from 'src/sections/_travel/view/travel-posts-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post list | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <TravelPostsView />
    </>
  );
}

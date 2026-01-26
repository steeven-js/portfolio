import { CONFIG } from 'src/global-config';

import { MarketingPostsView } from 'src/sections/_marketing/view/marketing-posts-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post list | Marketing - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <MarketingPostsView />
    </>
  );
}

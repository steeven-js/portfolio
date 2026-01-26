import { CONFIG } from 'src/global-config';

import { CareerPostsView } from 'src/sections/_career/view/career-posts-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post list | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <CareerPostsView />
    </>
  );
}

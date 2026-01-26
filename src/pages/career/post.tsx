import { CONFIG } from 'src/global-config';

import { CareerPostView } from 'src/sections/_career/view/career-post-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post details | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <CareerPostView />
    </>
  );
}

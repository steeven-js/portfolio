import { CONFIG } from 'src/global-config';

import { ElearningPostView } from 'src/sections/_elearning/view/elearning-post-view';

// ----------------------------------------------------------------------

const metadata = { title: `Post details | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <ElearningPostView />
    </>
  );
}

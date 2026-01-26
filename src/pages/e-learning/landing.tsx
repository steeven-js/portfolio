import { CONFIG } from 'src/global-config';

import { ElearningLandingView } from 'src/sections/_elearning/view/elearning-landing-view';

// ----------------------------------------------------------------------

const metadata = { title: `Home | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <ElearningLandingView />
    </>
  );
}

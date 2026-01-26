import { CONFIG } from 'src/global-config';

import { CareerAboutView } from 'src/sections/_career/view/career-about-view';

// ----------------------------------------------------------------------

const metadata = { title: `About us | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <CareerAboutView />
    </>
  );
}

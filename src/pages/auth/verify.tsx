import { CONFIG } from 'src/global-config';

import { VerifyView } from 'src/sections/auth/verify-view';

// ----------------------------------------------------------------------

const metadata = { title: `Verify - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <VerifyView />
    </>
  );
}

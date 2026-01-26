import { CONFIG } from 'src/global-config';

import { SignUpSplitView } from 'src/sections/auth/sign-up-split-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <SignUpSplitView />
    </>
  );
}

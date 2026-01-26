import { CONFIG } from 'src/global-config';

import { SignInSplitView } from 'src/sections/auth/sign-in-split-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Layout split - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <SignInSplitView />
    </>
  );
}

import { CONFIG } from 'src/global-config';

import { SignInIllustrationView } from 'src/sections/auth/sign-in-illustration-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Layout illustration - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <SignInIllustrationView />
    </>
  );
}

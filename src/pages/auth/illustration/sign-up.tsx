import { CONFIG } from 'src/global-config';

import { SignUpIllustrationView } from 'src/sections/auth/sign-up-illustration-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Layout illustration - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <SignUpIllustrationView />
    </>
  );
}

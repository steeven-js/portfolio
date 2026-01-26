import { CONFIG } from 'src/global-config';

import { SignInCenteredView } from 'src/sections/auth/sign-in-centered-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Layout centered - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <SignInCenteredView />
    </>
  );
}

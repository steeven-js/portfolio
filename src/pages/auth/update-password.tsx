import { CONFIG } from 'src/global-config';

import { UpdatePasswordView } from 'src/sections/auth/update-password-view';

// ----------------------------------------------------------------------

const metadata = { title: `Update password - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <UpdatePasswordView />
    </>
  );
}

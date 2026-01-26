import { CONFIG } from 'src/global-config';

import { AccountOrdersView } from 'src/sections/_account/view/account-orders-view';

// ----------------------------------------------------------------------

const metadata = { title: `Orders | Account - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <AccountOrdersView />
    </>
  );
}

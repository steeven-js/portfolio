import { CONFIG } from 'src/global-config';

import { AccountPaymentView } from 'src/sections/_account/view/account-payment-view';

// ----------------------------------------------------------------------

const metadata = { title: `Payment | Account - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <AccountPaymentView />
    </>
  );
}

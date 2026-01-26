import { CONFIG } from 'src/global-config';

import { AccountVouchersView } from 'src/sections/_account/view/account-vouchers-view';

// ----------------------------------------------------------------------

const metadata = { title: `Vouchers | Account - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <AccountVouchersView />
    </>
  );
}

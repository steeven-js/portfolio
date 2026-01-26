import { CONFIG } from 'src/global-config';

import { AccountWishlistView } from 'src/sections/_account/view/account-wishlist-view';

// ----------------------------------------------------------------------

const metadata = { title: `Wishlist | Account - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <AccountWishlistView />
    </>
  );
}

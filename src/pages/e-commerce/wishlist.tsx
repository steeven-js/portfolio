import { _products } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { EcommerceWishlistView } from 'src/sections/_ecommerce/view/ecommerce-wishlist-view';

// ----------------------------------------------------------------------

const metadata = { title: `Products wishlist | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <EcommerceWishlistView products={_products.slice(0, 4)} />
    </>
  );
}

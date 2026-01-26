import { _products } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { EcommerceCartView } from 'src/sections/_ecommerce/view/ecommerce-cart-view';

// ----------------------------------------------------------------------

const metadata = { title: `Cart | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <EcommerceCartView products={_products.slice(0, 4)} />
    </>
  );
}

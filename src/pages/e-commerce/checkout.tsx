import { _products } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { EcommerceCheckoutView } from 'src/sections/_ecommerce/view/ecommerce-checkout-view';

// ----------------------------------------------------------------------

const metadata = { title: `Checkout | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <EcommerceCheckoutView products={_products.slice(0, 3)} />
    </>
  );
}

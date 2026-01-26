import { _products } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { EcommerceProductView } from 'src/sections/_ecommerce/view/ecommerce-product-view';

// ----------------------------------------------------------------------

const metadata = { title: `Product details | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <EcommerceProductView product={_products[0]} />
    </>
  );
}

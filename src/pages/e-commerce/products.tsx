import { _products } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { EcommerceProductsView } from 'src/sections/_ecommerce/view/ecommerce-products-view';

// ----------------------------------------------------------------------

const metadata = { title: `Product list | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <EcommerceProductsView
        products={_products.slice(0, 16)}
        bestSellers={_products.slice(0, 3)}
      />
    </>
  );
}

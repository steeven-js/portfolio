import { CONFIG } from 'src/global-config';

import { EcommerceOrderCompletedView } from 'src/sections/_ecommerce/view/ecommerce-order-completed-view';

// ----------------------------------------------------------------------

const metadata = { title: `Order completed | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <EcommerceOrderCompletedView />
    </>
  );
}

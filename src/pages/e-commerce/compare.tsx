import { CONFIG } from 'src/global-config';

import { EcommerceCompareView } from 'src/sections/_ecommerce/view/ecommerce-compare-view';

// ----------------------------------------------------------------------

const metadata = { title: `Product compare | E-commerce - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <EcommerceCompareView />
    </>
  );
}

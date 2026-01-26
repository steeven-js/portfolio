import { _tours } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { TravelOrderCompletedView } from 'src/sections/_travel/view/travel-order-completed-view';

// ----------------------------------------------------------------------

const metadata = { title: `Order completed | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <TravelOrderCompletedView tour={_tours[8]} />
    </>
  );
}

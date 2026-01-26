import { _tours } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { TravelToursView } from 'src/sections/_travel/view/travel-tours-view';

// ----------------------------------------------------------------------

const metadata = { title: `Tour list | Travel - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <TravelToursView tours={_tours} />
    </>
  );
}

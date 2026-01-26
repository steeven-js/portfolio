import { CONFIG } from 'src/global-config';

import { Error500View } from 'src/sections/error/500-view';

// ----------------------------------------------------------------------

const metadata = { title: `500 Internal server error! | Error - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <Error500View />
    </>
  );
}

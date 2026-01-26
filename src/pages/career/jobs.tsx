import { _jobs } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { CareerJobsView } from 'src/sections/_career/view/career-jobs-view';

// ----------------------------------------------------------------------

const metadata = { title: `Jobs | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <CareerJobsView jobs={_jobs} />
    </>
  );
}

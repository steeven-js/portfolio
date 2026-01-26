import { _jobs } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { CareerJobView } from 'src/sections/_career/view/career-job-view';

// ----------------------------------------------------------------------

const metadata = { title: `Job details | Career - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <CareerJobView
        job={_jobs[0]}
        relatedJobs={_jobs.slice(-3)}
        jobsFromCompany={_jobs.slice(-3)}
      />
    </>
  );
}

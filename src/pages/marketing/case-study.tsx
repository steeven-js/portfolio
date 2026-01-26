import { useParams } from 'src/routes/hooks';

import { _caseStudies } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { MarketingCaseStudyView } from 'src/sections/_marketing/view/marketing-case-study-view';

// ----------------------------------------------------------------------

function fetchCaseStudy(paramId: string) {
  return _caseStudies.find((caseStudy) => caseStudy.id === paramId);
}

// ----------------------------------------------------------------------

export default function Page() {
  const { id = '' } = useParams();

  const data = fetchCaseStudy(id);

  return (
    <>
      <title>{`${data?.title} | Marketing - ${CONFIG.appName}`}</title>

      <MarketingCaseStudyView caseStudy={data} relatedCaseStudies={_caseStudies.slice(0, 3)} />
    </>
  );
}

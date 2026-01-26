import { _courses } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { ElearningCoursesView } from 'src/sections/_elearning/view/elearning-courses-view';

// ----------------------------------------------------------------------

const metadata = { title: `Course list | E-learning - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <ElearningCoursesView courses={_courses} />
    </>
  );
}

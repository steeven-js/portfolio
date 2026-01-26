import type { BoxProps } from '@mui/material/Box';
import type { ICourseProps } from 'src/types/course';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { ElearningCourseDetailsLessonList } from './elearning-course-details-lesson-list';

// ----------------------------------------------------------------------

type Props = BoxProps & Partial<ICourseProps>;

export function ElearningCourseDetailsSummary({ lessons, learnList, skills, sx, ...other }: Props) {
  const renderSummary = () => (
    <div>
      <Typography component="h6" variant="h4" sx={{ mb: 3 }}>
        What you will learn
      </Typography>

      <Box component="ul" sx={{ gap: 1, display: 'flex', flexDirection: 'column' }}>
        {learnList?.map((learn) => (
          <Box
            component="li"
            key={learn}
            sx={{ gap: 1.5, display: 'flex', alignItems: 'flex-start' }}
          >
            <Iconify
              width={20}
              icon="eva:checkmark-fill"
              sx={{ mt: '2px', color: 'primary.main' }}
            />
            {learn}
          </Box>
        ))}
      </Box>
    </div>
  );

  const renderSkills = () => (
    <div>
      <Typography component="h6" variant="h4" sx={{ mb: 3 }}>
        Skills you will gain
      </Typography>

      <Box sx={{ gap: 1, display: 'flex', flexWrap: 'wrap' }}>
        {skills?.map((skill) => (
          <Chip key={skill} label={skill} size="small" variant="soft" onClick={() => {}} />
        ))}
      </Box>
    </div>
  );

  const renderOverview = () => (
    <div>
      <Typography component="h6" variant="h4" sx={{ mb: 2 }}>
        Overview
      </Typography>

      <Typography>
        Consentaneum aeternitate dignitati commoventur primisque cupit mea officia peccata parens
        egone dolorem minuis. Secundae neglegi sextilius conantur commodaita siti philosophi ioca
        tenere lorem apparet assentior pudoris sint leves neglegebat unde reliquisti simile.
      </Typography>
    </div>
  );

  return (
    <Box
      sx={[
        {
          gap: 5,
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <ElearningCourseDetailsLessonList lessons={lessons || []} />

      {renderSummary()}
      {renderSkills()}
      {renderOverview()}
    </Box>
  );
}

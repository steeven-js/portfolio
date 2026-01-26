import type { BoxProps } from '@mui/material/Box';
import type { ICaseStudyProps } from 'src/types/case-study';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  project: ICaseStudyProps;
};

export function MarketingCaseStudyItem({ project, sx, ...other }: Props) {
  return (
    <Box sx={[{ minWidth: 0 }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
      <Image src={project.coverUrl} alt={project.title} ratio="1/1" sx={{ borderRadius: 2 }} />
      <Box
        sx={{
          pt: 2.5,
          px: 2.5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="overline" sx={{ mb: 1, color: 'text.disabled' }}>
          {project.category}
        </Typography>

        <Link
          component={RouterLink}
          href={paths.marketing.caseStudy(project.id)}
          color="inherit"
          variant="h6"
          noWrap
        >
          {project.title}
        </Link>
      </Box>
    </Box>
  );
}

import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import type { ICaseStudyProps } from 'src/types/case-study';

import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { Image, imageClasses } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  caseStudies: ICaseStudyProps[];
};

export function MarketingLandingCaseStudies({ caseStudies, sx, ...other }: Props) {
  const renderTexts = () => (
    <Box sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
      <Typography variant="overline" sx={{ mb: 3, display: 'block', color: 'text.disabled' }}>
        Our work
      </Typography>
      <Typography variant="h2">Case studies</Typography>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          pb: 10,
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        {renderTexts()}

        <Grid spacing={3} container sx={{ alignItems: 'center', py: { xs: 5, md: 10 } }}>
          <Grid size={{ xs: 6, md: 2 }}>
            <SmallItem item={caseStudies[0]} />
          </Grid>

          <Grid sx={{ display: { md: 'none' } }} size={{ xs: 6, md: 2 }}>
            <SmallItem item={caseStudies[5]} />
          </Grid>

          <Grid container size={{ xs: 12, sm: 12, md: 8 }}>
            <Grid size={{ xs: 6, md: 9 }}>
              <LargeItem item={caseStudies[1]} sx={{ display: { xs: 'none', md: 'flex' } }} />
              <SmallItem item={caseStudies[1]} isSquare sx={{ display: { md: 'none' } }} />
            </Grid>

            <Grid
              size={{ xs: 6, md: 3 }}
              sx={{
                display: { md: 'flex' },
                flexDirection: { md: 'column' },
              }}
            >
              <SmallItem item={caseStudies[2]} isSquare sx={{ mt: { md: 'auto' } }} />
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <SmallItem item={caseStudies[3]} isSquare />
            </Grid>

            <Grid size={{ xs: 6, md: 9 }}>
              <LargeItem item={caseStudies[4]} sx={{ display: { xs: 'none', md: 'flex' } }} />
              <SmallItem item={caseStudies[4]} isSquare sx={{ display: { md: 'none' } }} />
            </Grid>
          </Grid>

          <Grid sx={{ display: { xs: 'none', md: 'block' } }} size={{ xs: 6, md: 2 }}>
            <SmallItem item={caseStudies[5]} />
          </Grid>
        </Grid>

        <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
          <Button
            component={RouterLink}
            href={paths.marketing.caseStudies}
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            View all
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ItemProps = {
  isSquare?: boolean;
  sx?: SxProps<Theme>;
  item: ICaseStudyProps;
};

const transition = (theme: Theme) =>
  theme.transitions.create(['transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  });

function LargeItem({ item, sx }: Omit<ItemProps, 'isSquare'>) {
  const renderContent = () => (
    <Box
      sx={{
        p: 3,
        pt: 5,
        width: 0.5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="overline" sx={{ color: 'primary.main' }}>
        {item.category}
      </Typography>

      <Typography variant="h4" component="h6" sx={{ mt: 1, mb: 2 }}>
        {item.title}
      </Typography>

      <Typography
        variant="body2"
        sx={(theme) => ({ ...theme.mixins.maxLine({ line: 2 }), color: 'text.secondary' })}
      >
        {item.description}
      </Typography>

      <Button
        component={RouterLink}
        href={paths.marketing.caseStudy(item.id)}
        size="small"
        color="inherit"
        endIcon={<Iconify width={16} icon="carbon:chevron-right" sx={{ ml: -0.5 }} />}
        sx={{ mt: 'auto', alignSelf: 'flex-end' }}
      >
        Learn more
      </Button>
    </Box>
  );

  return (
    <Paper
      sx={[
        (theme) => ({
          p: 0.75,
          display: 'flex',
          borderRadius: 2,
          bgcolor: 'background.paper',
          boxShadow: theme.vars.customShadows.z24,
          '&:hover': {
            [`& .${imageClasses.root}`]: { transform: 'scale(1.2)' },
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box component="span" sx={{ overflow: 'hidden', borderRadius: 2, width: 0.5 }}>
        <Image alt={item.title} src={item.coverUrl} ratio="3/4" sx={{ transition }} />
      </Box>

      {renderContent()}
    </Paper>
  );
}

// ----------------------------------------------------------------------

function SmallItem({ item, isSquare, sx }: ItemProps) {
  const renderContent = () => (
    <Box
      sx={{
        px: 2,
        gap: 1,
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        zIndex: 9,
        display: 'flex',
        textAlign: 'center',
        position: 'absolute',
        color: 'common.white',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box component="span" sx={{ opacity: 0.48, typography: 'overline' }}>
        {item.category}
      </Box>

      <Link
        component={RouterLink}
        href={paths.marketing.caseStudy(item.id)}
        variant="h6"
        color="inherit"
        underline="none"
      >
        {item.title}
      </Link>
    </Box>
  );

  return (
    <Paper
      sx={[
        {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            [`& .${imageClasses.root}`]: { transform: 'scale(1.2)' },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {renderContent()}

      <Image
        alt={item.title}
        src={item.coverUrl}
        ratio={isSquare ? '1/1' : { xs: '1/1', md: '3/4' }}
        sx={{ transition }}
        slotProps={{
          overlay: {
            sx: (theme) => ({
              bgcolor: varAlpha(theme.vars.palette.common.blackChannel, 0.48),
            }),
          },
        }}
      />
    </Paper>
  );
}

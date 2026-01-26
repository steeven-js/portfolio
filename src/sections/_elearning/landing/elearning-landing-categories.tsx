import type { BoxProps } from '@mui/material/Box';
import type { ICourseByCategoryProps } from 'src/types/course';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link, { linkClasses } from '@mui/material/Link';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  categories: ICourseByCategoryProps[];
};

export function ElearningLandingCategories({ categories, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          bgcolor: 'background.neutral',
          py: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Grid container spacing={{ xs: 5, lg: 3 }} sx={{ justifyContent: { lg: 'space-between' } }}>
          <Grid sx={{ textAlign: { xs: 'center', lg: 'unset' } }} size={{ xs: 12, lg: 4 }}>
            <Typography variant="h2">Featured category</Typography>

            <Typography sx={{ color: 'text.secondary', mt: 2, mb: 5 }}>
              Since wire-frame renderings are relatively simple and fast to calculate, they are
              often used in cases
            </Typography>

            <Button
              variant="contained"
              size="large"
              color="inherit"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              Explore more
            </Button>
          </Grid>

          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                gap: 3,
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              }}
            >
              {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CategoryItemProps = {
  category: ICourseByCategoryProps;
};

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        p: 3,
        minWidth: 0,
        display: 'flex',
        borderRadius: 1.5,
        cursor: 'pointer',
        bgcolor: 'transparent',
        flexDirection: 'column',
        transition: theme.transitions.create(['all'], {
          duration: theme.transitions.duration.enteringScreen,
        }),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: theme.vars.customShadows.z24,
          [`& .${linkClasses.root}`]: { color: 'primary.main' },
        },
      })}
    >
      <Link color="inherit" variant="h6" noWrap>
        {category.name}
      </Link>

      <Typography variant="body2" sx={{ mt: 0.5, color: 'text.disabled' }}>
        {category.totalStudents} students
      </Typography>
    </Paper>
  );
}

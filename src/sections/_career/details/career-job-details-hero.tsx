import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/material/styles';
import type { IJobProps } from 'src/types/job';

import { useState, useCallback } from 'react';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  slug: IJobProps['slug'];
  category: IJobProps['category'];
  location: IJobProps['location'];
  deadline: IJobProps['deadline'];
  favorited: IJobProps['favorited'];
  totalViews: IJobProps['totalViews'];
};

export function CareerJobDetailsHero({
  sx,
  slug,
  category,
  location,
  deadline,
  favorited,
  totalViews,
  ...other
}: Props) {
  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  }, []);

  const itemStyles: SxProps<Theme> = {
    gap: 1,
    display: 'flex',
    alignItems: 'center',
  };

  const renderInfo = () => (
    <Box
      sx={{
        display: 'flex',
        color: 'common.white',
        gap: { xs: 3, md: 2 },
        flexDirection: 'column',
      }}
    >
      <Typography variant="h3" component="h1">
        {slug}
      </Typography>

      <Box
        sx={{
          gap: 3,
          opacity: 0.48,
          display: 'flex',
          flexWrap: 'wrap',
          typography: 'body2',
        }}
      >
        <Box sx={itemStyles}>
          <Iconify icon="carbon:baggage-claim" />
          <Link color="inherit" underline="always">
            {category}
          </Link>
        </Box>

        <Box sx={itemStyles}>
          <Iconify icon="solar:eye-outline" /> {totalViews} views
        </Box>

        <Box sx={itemStyles}>
          <Iconify icon="carbon:location" /> {location}
        </Box>
      </Box>
    </Box>
  );

  const renderActions = () => (
    <Box
      sx={{
        gap: 2,
        width: 1,
        maxWidth: 340,
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <Box sx={{ width: 1 }}>
        <Button fullWidth variant="contained" size="large" color="primary">
          Apply now
        </Button>
        <Typography variant="body2" sx={{ mt: 2, color: 'common.white', textAlign: 'center' }}>
          {`Expiration date: `}
          <Box component="span" sx={{ color: 'primary.main' }}>
            {fDate(deadline)}
          </Box>
        </Typography>
      </Box>

      <Checkbox
        color="error"
        checked={favorite}
        onChange={handleChangeFavorite}
        icon={<Iconify width={24} icon="solar:heart-outline" />}
        checkedIcon={<Iconify width={24} icon="solar:heart-bold" />}
        slotProps={{
          input: {
            id: 'favorite-checkbox',
            'aria-label': 'Favorite checkbox',
          },
        }}
        sx={{ mt: 0.75 }}
      />
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0.8)})`,
              `url(${CONFIG.assetsDir}/assets/background/overlay-2.webp)`,
            ],
          }),
          pt: 5,
          pb: 10,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Jobs', href: paths.career.jobs },
            { name: slug },
          ]}
          sx={{ mb: { xs: 5, md: 10 }, '& a > div': { color: 'common.white' } }}
        />

        <Box
          sx={{
            gap: 5,
            display: 'flex',
            justifyContent: { md: 'space-between' },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {renderInfo()}
          {renderActions()}
        </Box>
      </Container>
    </Box>
  );
}

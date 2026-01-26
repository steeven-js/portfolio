import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  brands: {
    id: string;
    name: string;
    image: string;
  }[];
};

export function TravelOurClients({ brands, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          pb: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box
          sx={{
            gap: 3,
            display: 'grid',
            textAlign: { xs: 'center', md: 'left' },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
          }}
        >
          <Typography variant="h2">Our clients</Typography>

          <div>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Enhance your life by having a sense of purpose
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Around the world, food-borne illnesses have become increasingly common. In the United
              States alone, millions of people get a food-related illness each year.
            </Typography>
          </div>
        </Box>

        <Box
          sx={{
            columnGap: 3,
            display: 'grid',
            mt: { xs: 5, md: 15 },
            rowGap: { xs: 4, md: 5 },
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {brands.map((brand) => (
            <SvgColor
              key={brand.id}
              src={brand.image}
              sx={{
                width: 106,
                height: 32,
                color: 'text.disabled',
                mx: { xs: 'auto', md: 'unset' },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

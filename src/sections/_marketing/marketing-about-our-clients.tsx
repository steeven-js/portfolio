import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  brands: {
    id: string;
    name: string;
    image: string;
  }[];
};

export function MarketingAboutOurClients({ brands, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[
        {
          textAlign: 'center',
          pb: { xs: 10, md: 15 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Typography variant="h2" sx={{ mb: { xs: 5, md: 10 } }}>
          Our clients
        </Typography>

        <Box
          sx={{
            rowGap: 5,
            mx: 'auto',
            maxWidth: 680,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            columnGap: { xs: 4, md: 8 },
          }}
        >
          {brands.map((brand) => (
            <Box
              key={brand.id}
              component="img"
              loading="lazy"
              alt={brand.name}
              src={brand.image.replace('.svg', '-original.svg')}
              sx={{ width: 106, height: 32 }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

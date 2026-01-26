import type { BoxProps } from '@mui/material/Box';
import type { ITourProps } from 'src/types/tour';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { TravelTourItem } from './travel-tour-item';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  tours: ITourProps[];
};

export function TravelTourList({ tours, sx, ...other }: Props) {
  return (
    <>
      <Box
        component="section"
        sx={[
          {
            columnGap: 3,
            display: 'grid',
            rowGap: { xs: 4, md: 5 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {tours.map((tour) => (
          <TravelTourItem key={tour.id} tour={tour} />
        ))}
      </Box>

      <Pagination
        count={10}
        sx={{
          mb: 10,
          mt: { xs: 5, md: 10 },
          [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
        }}
      />
    </>
  );
}

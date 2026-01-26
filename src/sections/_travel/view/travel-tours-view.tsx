import type { ITourProps } from 'src/types/tour';

import Container from '@mui/material/Container';

import { TravelNewsletter } from '../travel-newsletter';
import { TravelFilters } from '../filters/travel-filters';
import { TravelTourList } from '../list/travel-tour-list';

// ----------------------------------------------------------------------

type ViewProps = {
  tours?: ITourProps[];
};

export function TravelToursView({ tours }: ViewProps) {
  return (
    <>
      <Container>
        <TravelFilters
          sx={{
            mt: { xs: 1, md: 3 },
            mb: { xs: 3, md: 5 },
          }}
        />
        <TravelTourList tours={tours || []} />
      </Container>

      <TravelNewsletter />
    </>
  );
}

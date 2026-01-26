import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { _productsCompare } from 'src/_mock';

import { EcommerceCompareList } from '../ecommerce-compare-list';

// ----------------------------------------------------------------------

export function EcommerceCompareView() {
  return (
    <Container sx={{ pb: 10 }}>
      <Typography
        variant="h3"
        sx={{
          mb: 2,
          mt: { xs: 3, md: 5 },
        }}
      >
        Compare
      </Typography>

      <FormControlLabel
        control={
          <Switch
            defaultChecked
            slotProps={{
              input: { id: 'view-mode-switch' },
            }}
          />
        }
        label="Only view the difference"
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <EcommerceCompareList products={_productsCompare} />
    </Container>
  );
}

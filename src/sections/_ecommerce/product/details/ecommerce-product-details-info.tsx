import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { NumberInput } from 'src/components/number-input';

import { ProductPrice } from '../../components/product-price';
import { ProductOptionPicker } from '../../components/product-option-picker';

// ----------------------------------------------------------------------

const COLOR_OPTIONS = [
  { label: '#FA541C', value: 'red' },
  { label: '#754FFE', value: 'violet' },
  { label: '#00B8D9', value: 'cyan' },
  { label: '#36B37E', value: 'green' },
];

const MEMORY_OPTIONS = [
  { label: '128GB', value: '128gb' },
  { label: '256GB', value: '256gb' },
  { label: '512GB', value: '512gb' },
  { label: '1TB', value: '1tb' },
];

// ----------------------------------------------------------------------

type Props = BoxProps & {
  name: string;
  price: number;
  caption: string;
  priceSale: number;
  ratingNumber: number;
  totalReviews: number;
};

export function EcommerceProductDetailsInfo({
  sx,
  name,
  price,
  caption,
  priceSale,
  ratingNumber,
  totalReviews,
  ...other
}: Props) {
  const [color, setColor] = useState('red');
  const [memory, setMemory] = useState('128gb');
  const [quantity, setQuantity] = useState(1);

  return (
    <Box sx={sx} {...other}>
      <Label color="success" sx={{ mb: 3 }}>
        In Stock
      </Label>

      <Typography variant="h4" sx={{ mb: 1 }}>
        {name}
      </Typography>

      <Box
        sx={{
          mb: 2,
          gap: 0.5,
          display: 'flex',
          alignItems: 'center',
          typography: 'caption',
          color: 'text.disabled',
        }}
      >
        <Rating size="small" value={ratingNumber} readOnly precision={0.5} />
        {`(${totalReviews} reviews)`}
      </Box>

      <ProductPrice price={price} priceSale={priceSale} sx={{ mb: 2, typography: 'h5' }} />

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {caption}
      </Typography>

      <ProductOptionPicker
        color={color}
        memory={memory}
        onSelectColor={(newValue) => setColor(newValue)}
        onSelectMemory={(newValue) => setMemory(newValue)}
        options={{ colors: COLOR_OPTIONS, memory: MEMORY_OPTIONS }}
        sx={{ my: 5 }}
      />

      <Box
        sx={{
          gap: 2,
          display: 'flex',
          alignItems: { md: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <NumberInput
          value={quantity}
          onChange={(event, newValue) => setQuantity(newValue)}
          sx={{ width: 128, height: 48 }}
        />

        <Box sx={{ gap: 2, display: 'flex' }}>
          <Button
            component={RouterLink}
            href={paths.eCommerce.cart}
            size="large"
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="solar:cart-3-outline" />}
            sx={{ width: { xs: 1, sm: 'auto' } }}
          >
            Add to cart
          </Button>

          <Button
            component={RouterLink}
            href={paths.eCommerce.cart}
            size="large"
            color="primary"
            variant="contained"
            sx={{ width: { xs: 1, sm: 'auto' } }}
          >
            Buy now
          </Button>
        </Box>
      </Box>

      <Divider sx={{ borderStyle: 'dashed', my: 3 }} />

      <Box sx={{ gap: 3, display: 'flex', typography: 'subtitle2' }}>
        <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
          <Iconify icon="mingcute:add-line" /> Compare
        </Box>

        <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
          <Iconify icon="solar:heart-outline" /> Wishlist
        </Box>

        <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
          <Iconify icon="solar:share-outline" /> Share
        </Box>
      </Box>
    </Box>
  );
}

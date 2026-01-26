import type { IProductItemProps } from 'src/types/product';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fCurrency } from 'src/utils/format-number';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { NumberInput } from 'src/components/number-input';

// ----------------------------------------------------------------------

type Props = {
  isWishlist: boolean;
  product: IProductItemProps;
};

export function EcommerceCartItem({ product, isWishlist }: Props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Box
      sx={(theme) => ({
        py: 3,
        minWidth: 720,
        display: 'flex',
        alignItems: 'center',
        borderBottom: `solid 1px ${theme.vars.palette.divider}`,
      })}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Image
          alt={product.name}
          src={product.coverUrl}
          ratio="1/1"
          sx={{
            width: 80,
            height: 80,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
          }}
        />
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2">{product.name}</Typography>
          <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>
            Color: Grey space
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: 160 }}>
        <NumberInput
          value={quantity}
          onChange={(event, newValue) => setQuantity(newValue)}
          sx={{ width: 108 }}
        />
      </Box>

      <Box sx={{ width: 120, typography: 'subtitle2' }}> {fCurrency(product.price)} </Box>

      <IconButton aria-label="Delete">
        <Iconify icon="solar:trash-bin-minimalistic-outline" />
      </IconButton>

      {isWishlist && (
        <IconButton aria-label="Add">
          <Iconify icon="solar:cart-plus-outline" />
        </IconButton>
      )}
    </Box>
  );
}

import type { SelectChangeEvent } from '@mui/material/Select';
import type { IProductItemProps, IProductFiltersProps } from 'src/types/product';

import { useState, useCallback } from 'react';
import { useBoolean, useSetState } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { Iconify } from 'src/components/iconify';

import { EcommerceFilters } from '../ecommerce-filters';
import { EcommerceProductViewListItem } from '../product/item/ecommerce-product-view-list-item';
import { EcommerceProductViewGridItem } from '../product/item/ecommerce-product-view-grid-item';
import { EcommerceProductItemBestSellers } from '../product/item/ecommerce-product-item-best-sellers';

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: 'list', icon: <Iconify icon="carbon:list-boxes" /> },
  { value: 'grid', icon: <Iconify icon="carbon:grid" /> },
];

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

// ----------------------------------------------------------------------

type ViewProps = {
  products?: IProductItemProps[];
  bestSellers?: IProductItemProps[];
};

export function EcommerceProductsView({ products, bestSellers }: ViewProps) {
  const openMobile = useBoolean();

  const [sort, setSort] = useState('latest');

  const [viewMode, setViewMode] = useState('grid');

  const filters = useSetState<IProductFiltersProps>({
    brands: ['Apple'],
    category: '',
    rating: null,
    inStock: false,
    shipping: [],
    tags: [],
    price: [0, 0],
  });

  const handleChangeViewMode = useCallback(
    (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
      if (newAlignment !== null) {
        setViewMode(newAlignment);
      }
    },
    []
  );

  const handleChangeSort = useCallback((event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  }, []);

  const renderHead = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', py: 5 }}>
      <Typography variant="h3" sx={{ flexGrow: 1 }}>
        Catalog
      </Typography>

      <Button
        color="inherit"
        variant="contained"
        startIcon={<Iconify width={18} icon="solar:filter-outline" />}
        onClick={openMobile.onTrue}
        sx={{ display: { md: 'none' } }}
      >
        Filters
      </Button>
    </Box>
  );

  const renderListView = () => (
    <Box sx={{ gap: 4, display: 'flex', flexDirection: 'column' }}>
      {products?.map((product) => (
        <EcommerceProductViewListItem key={product.id} product={product} />
      ))}
    </Box>
  );

  const renderGridView = () => (
    <Box
      sx={{
        rowGap: 4,
        columnGap: 3,
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
      }}
    >
      {products?.map((product) => (
        <EcommerceProductViewGridItem key={product.id} product={product} />
      ))}
    </Box>
  );

  const renderListBestSellers = () => (
    <div>
      <Typography variant="h6">Best sellers</Typography>
      {bestSellers?.map((product) => (
        <EcommerceProductItemBestSellers key={product.id} product={product} sx={{ mt: 3 }} />
      ))}
    </div>
  );

  const renderToolbar = () => (
    <Box
      sx={{
        mb: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <ToggleButtonGroup
        exclusive
        value={viewMode}
        onChange={handleChangeViewMode}
        sx={{ borderColor: 'transparent' }}
      >
        {VIEW_OPTIONS.map((option) => (
          <ToggleButton key={option.value} value={option.value}>
            {option.icon}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <FormControl size="small" hiddenLabel sx={{ width: 120 }}>
        <Select value={sort} onChange={handleChangeSort} inputProps={{ id: `sort-select` }}>
          {SORT_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );

  const renderFillters = () => (
    <Box sx={{ flexShrink: 0, width: { md: 280 } }}>
      <EcommerceFilters
        filters={filters}
        open={openMobile.value}
        onClose={openMobile.onFalse}
        options={{
          shippings: ['Fast', 'Saving', 'Free'],
          brands: ['Apple', 'Samsung', 'Xiaomi', 'Honor'],
          tags: ['Books and media', 'Pet', 'Electronics', 'Food', 'Automotive and industrial'],
          categories: [
            'Apple iPhone',
            'Samsung Galaxy',
            'Nike Air Max',
            'Adidas Ultraboost',
            'Sony PlayStation',
          ],
          ratings: ['Up 4 stars', 'Up 3 stars', 'Up 2 stars'],
        }}
      />

      <Divider sx={{ my: 5, borderStyle: 'dashed' }} />

      {renderListBestSellers()}
    </Box>
  );

  return (
    <Container>
      {renderHead()}

      <Box
        sx={{
          mb: 10,
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
        }}
      >
        {renderFillters()}

        <Box sx={{ flex: '1 1 auto', minWidth: 0, pl: { md: 8 } }}>
          {renderToolbar()}
          {viewMode === 'grid' ? renderGridView() : renderListView()}

          <Pagination
            count={10}
            sx={{
              mt: { xs: 5, md: 10 },
              [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

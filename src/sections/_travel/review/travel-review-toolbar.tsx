import type { BoxProps } from '@mui/material/Box';
import type { SelectChangeEvent } from '@mui/material/Select';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { selectClasses } from '@mui/material/Select';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'popular', label: 'Popular' },
];

// ----------------------------------------------------------------------

type Props = BoxProps & {
  sort: string;
  totalReviews: number;
  onOpenReview: () => void;
  onChangeSort: (event: SelectChangeEvent) => void;
};

export function TravelReviewToolbar({
  sx,
  sort,
  totalReviews,
  onOpenReview,
  onChangeSort,
  ...other
}: Props) {
  return (
    <Box
      sx={[
        {
          gap: 5,
          mb: 5,
          display: 'flex',
          alignItems: { md: 'center' },
          flexDirection: { xs: 'column', md: 'row' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography component="h6" variant="h4" sx={{ width: 1 }}>
        {totalReviews} reviews
      </Typography>

      <Box
        sx={{
          gap: 2,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FormControl hiddenLabel sx={{ [`& .${selectClasses.select}`]: { py: 1.75 } }}>
          <Select value={sort} onChange={onChangeSort} inputProps={{ id: 'sort-select' }}>
            {SORT_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button size="large" variant="contained" color="inherit" onClick={onOpenReview}>
          Write a review
        </Button>
      </Box>
    </Box>
  );
}

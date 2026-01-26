import type { Theme, SxProps } from '@mui/material/styles';
import type { UseSetStateReturn } from 'minimal-shared/hooks';
import type { FormControlProps } from '@mui/material/FormControl';
import type { IJobFiltersProps } from 'src/types/job';

import { useState, useCallback } from 'react';
import { useBoolean } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';

import { fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';
import { CountrySelect } from 'src/components/country-select';

// ----------------------------------------------------------------------

type CareerFiltersProps = {
  sx?: SxProps<Theme>;
  filters: UseSetStateReturn<IJobFiltersProps>;
  options: {
    types: string[];
    levels: string[];
    keywords: string[];
    benefits: string[];
    categories: string[];
  };
};

export function CareerFilters({ filters, options, sx }: CareerFiltersProps) {
  const { state, setState, resetState } = filters;

  const openForm = useBoolean();

  const [openSalary, setOpenSalary] = useState<HTMLElement | null>(null);

  const handleOpenSalary = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setOpenSalary(event.currentTarget);
  }, []);

  const handleCloseSalary = useCallback(() => {
    setOpenSalary(null);
  }, []);

  const onSubmit = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(filters, null, 2));
    resetState();
  }, [filters, resetState]);

  const renderKeyword = () => (
    <Autocomplete
      sx={{ width: 1 }}
      options={options.keywords}
      value={state.keyword}
      onChange={(event, newValue: string | null) => setState({ keyword: newValue })}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          placeholder="Job title, keywords..."
          slotProps={{
            input: {
              ...params.InputProps,
              autoComplete: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="carbon:search" sx={{ color: 'text.disabled', ml: 0.5 }} />
                </InputAdornment>
              ),
            },
          }}
        />
      )}
    />
  );

  const renderLocation = () => (
    <CountrySelect
      fullWidth
      hiddenLabel
      placeholder="Location"
      value={state.location}
      onChange={(event, newValue: string | null) => setState({ location: newValue })}
    />
  );

  const renderCategories = () => (
    <Autocomplete
      sx={{ width: 1 }}
      options={options.categories}
      value={state.categories}
      onChange={(event, newValue: string | null) => setState({ categories: newValue })}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          placeholder="Categories"
          slotProps={{
            input: {
              ...params.InputProps,
              autoComplete: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="carbon:baggage-claim" sx={{ color: 'text.disabled', ml: 0.5 }} />
                </InputAdornment>
              ),
            },
          }}
        />
      )}
    />
  );

  const renderSalary = (size?: FormControlProps['size']) => (
    <>
      <FormControl
        fullWidth
        hiddenLabel
        size={size}
        onClick={handleOpenSalary}
        sx={{ maxWidth: { md: 180 } }}
      >
        <Select
          open={false}
          displayEmpty
          value=""
          inputProps={{ id: `salary-filter-select` }}
          renderValue={() => {
            const min = state.salary[0];
            const max = state.salary[1];

            if (min === 0 && max === 20000) {
              return (
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  Salary ranges
                </Typography>
              );
            }
            return (
              <Typography variant="subtitle2" component="span">{`${fCurrency(
                min
              )} - ${fCurrency(max)}`}</Typography>
            );
          }}
        />
      </FormControl>

      <Popover
        open={!!openSalary}
        onClose={handleCloseSalary}
        anchorEl={openSalary}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        slotProps={{
          paper: { sx: { pt: 3, pb: 1, px: 5, width: 1, maxWidth: 360, overflow: 'unset' } },
        }}
      >
        <Typography variant="overline" sx={{ mb: 8, display: 'block', color: 'text.disabled' }}>
          Value based on 1 month
        </Typography>

        <Slider
          marks
          step={1000}
          min={0}
          max={20000}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => `$${value}`}
          value={state.salary}
          onChange={(event: Event, newValue: number | number[]) =>
            setState({ salary: newValue as number[] })
          }
        />
      </Popover>
    </>
  );

  const renderDesktop = () => (
    <Box
      sx={[
        {
          gap: 2,
          flexDirection: 'column',
          display: { xs: 'none', md: 'flex' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
        {renderKeyword()}
        {renderCategories()}
        {renderLocation()}
        <Button size="large" variant="contained" color="primary" onClick={onSubmit}>
          <Iconify icon="carbon:search" />
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <FilterSelect
          size="small"
          name="type"
          label="Job type"
          filters={filters}
          options={options.types}
        />
        <FilterSelect
          size="small"
          name="level"
          label="All levels"
          filters={filters}
          options={options.levels}
        />
        {renderSalary('small')}
        <FilterSelect
          size="small"
          name="benefits"
          label="Benefits"
          filters={filters}
          options={options.benefits}
        />
      </Box>
    </Box>
  );

  const renderMobile = () => (
    <>
      <Box
        sx={[
          {
            textAlign: 'right',
            display: { md: 'none' },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="solar:filter-outline" />}
          onClick={openForm.onTrue}
        >
          Filters
        </Button>
      </Box>

      <Drawer
        anchor="right"
        open={openForm.value}
        onClose={openForm.onFalse}
        slotProps={{
          paper: {
            sx: {
              p: 3,
              gap: 2.5,
              width: 280,
              display: 'flex',
              flexDirection: 'column',
            },
          },
        }}
      >
        {renderKeyword()}
        {renderCategories()}
        {renderLocation()}
        <FilterSelect name="type" label="Job type" filters={filters} options={options.types} />
        <FilterSelect name="level" label="All levels" filters={filters} options={options.levels} />
        {renderSalary('medium')}
        <FilterSelect
          name="benefits"
          label="Benefits"
          filters={filters}
          options={options.benefits}
        />
        <Button
          size="large"
          variant="contained"
          startIcon={<Iconify icon="carbon:search" />}
          onClick={onSubmit}
        >
          Search
        </Button>
      </Drawer>
    </>
  );

  return (
    <>
      {renderDesktop()}
      {renderMobile()}
    </>
  );
}

// ----------------------------------------------------------------------

type FilterSelectProps = {
  label: string;
  options: string[];
  sx?: SxProps<Theme>;
  name: keyof IJobFiltersProps;
  size?: FormControlProps['size'];
  filters: UseSetStateReturn<IJobFiltersProps>;
};

export function FilterSelect({ sx, name, size, label, options, filters }: FilterSelectProps) {
  const { state, setField } = filters;

  const value = state[name];

  return (
    <FormControl
      fullWidth
      size={size}
      hiddenLabel
      sx={[
        {
          maxWidth: { md: 180 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Select
        multiple
        displayEmpty
        value={value}
        inputProps={{ id: `${name}-filter-select` }}
        onChange={(event) => {
          const newValue =
            typeof event.target.value === 'string'
              ? event.target.value.split(',')
              : event.target.value;

          setField(name, newValue);
        }}
        renderValue={(selected) => {
          if (Array.isArray(selected) && selected?.length) {
            return (
              <Typography variant="subtitle2" component="span">
                {selected.join(', ')}
              </Typography>
            );
          }
          return (
            <Typography variant="body2" sx={{ color: 'text.disabled' }}>
              {label}
            </Typography>
          );
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox
              size="small"
              checked={(state[name] as string[])?.includes(option)}
              sx={{ [`&.${checkboxClasses.root}`]: { p: 0, mr: 1 } }}
            />

            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

import type { IconButtonProps } from '@mui/material/IconButton';

import { varAlpha } from 'minimal-shared/utils';
import { useBoolean } from 'minimal-shared/hooks';

import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import InputBase, { inputBaseClasses } from '@mui/material/InputBase';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type SearchbarProps = IconButtonProps;

export function Searchbar({ sx, ...other }: SearchbarProps) {
  const { value: open, onFalse: onClose, onTrue: onOpen } = useBoolean();

  return (
    <ClickAwayListener onClickAway={onClose}>
      <div>
        <IconButton color="inherit" aria-label="Search button" onClick={onOpen} sx={sx} {...other}>
          <SvgIcon viewBox="0 0 32 32" sx={{ width: 22, height: 22 }}>
            <path
              fill="currentColor"
              d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
            />
          </SvgIcon>
        </IconButton>

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <SearchBarRoot>
            <InputBase
              autoFocus
              fullWidth
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify icon="carbon:search" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              }
              inputProps={{ id: 'search-input' }}
              sx={{
                [`& .${inputBaseClasses.input}`]: {
                  fontWeight: 'fontWeightSemiBold',
                },
              }}
            />
            <Button variant="contained" onClick={onClose}>
              Search
            </Button>
          </SearchBarRoot>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}

// ----------------------------------------------------------------------

const SearchBarRoot = styled('div')(({ theme }) => ({
  ...theme.mixins.bgBlur({ color: varAlpha(theme.vars.palette.background.defaultChannel, 0.8) }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
  boxShadow: theme.vars.customShadows.z8,
  height: 'var(--layout-header-mobile-height)',
  [theme.breakpoints.up('md')]: {
    height: 'var(--layout-header-desktop-height)',
  },
}));

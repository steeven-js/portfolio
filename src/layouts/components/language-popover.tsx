import type { IconButtonProps } from '@mui/material/IconButton';

import { useState, useCallback } from 'react';
import { usePopover } from 'minimal-shared/hooks';

import Popover from '@mui/material/Popover';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { FlagIcon } from 'src/components/flag-icon';

// ----------------------------------------------------------------------

export type LanguagePopoverProps = IconButtonProps & {
  data?: {
    value: string;
    label: string;
    countryCode: string;
  }[];
};

export function LanguagePopover({ data = [], sx, ...other }: LanguagePopoverProps) {
  const { open, onClose, onOpen, anchorEl } = usePopover();

  const [locale, setLocale] = useState<string>(data[0].value);

  const currentLang = data.find((lang) => lang.value === locale);

  const handleChangeLang = useCallback(
    (newLang: string) => {
      setLocale(newLang);
      onClose();
    },
    [onClose]
  );

  const renderButton = () => (
    <IconButton
      onClick={onOpen}
      sx={[
        {
          p: 0,
          width: 40,
          height: 40,
          ...(open && { bgcolor: 'action.selected' }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <FlagIcon code={currentLang?.countryCode} />
    </IconButton>
  );

  const renderMenuList = () => (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <MenuList sx={{ width: 160, minHeight: 72 }}>
        {data?.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang?.value}
            onClick={() => handleChangeLang(option.value)}
            sx={{ gap: 2 }}
          >
            <FlagIcon code={option.countryCode} />
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Popover>
  );

  return (
    <>
      {renderButton()}
      {renderMenuList()}
    </>
  );
}

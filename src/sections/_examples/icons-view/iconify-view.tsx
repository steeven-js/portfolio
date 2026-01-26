import type { BoxProps } from '@mui/material/Box';
import type { SnackbarCloseReason } from '@mui/material/Snackbar';
import type { IconifyName } from 'src/components/iconify';

import { useState, useCallback } from 'react';
import { useCopyToClipboard } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify, iconSets } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export function IconifyView() {
  const { copy, copiedText } = useCopyToClipboard();

  const [searchQuery, setSearchQuery] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopy = useCallback(
    (iconMarkup: string) => {
      if (iconMarkup) {
        copy(iconMarkup);
        setOpenSnackbar(true);
      }
    },
    [copy]
  );

  const handleCloseSnackbar = useCallback(
    (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    },
    []
  );

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const renderSnackbar = () => (
    <Snackbar
      open={openSnackbar}
      onClose={handleCloseSnackbar}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleCloseSnackbar} severity="success" sx={{ minWidth: 240 }}>
        {copiedText}
      </Alert>
    </Snackbar>
  );

  const renderHeader = () => (
    <Box sx={{ flex: '1 1 auto' }}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Iconify
      </Typography>

      <CustomBreadcrumbs
        links={[
          { name: 'Home', href: '/' },
          { name: 'Components', href: '/components' },
          { name: 'Icons', href: '/components/icons' },
          { name: 'Iconify' },
        ]}
      />

      <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
        Iconify icons used in this template.
      </Typography>
    </Box>
  );

  const renderSearch = () => (
    <TextField
      fullWidth
      hiddenLabel
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
          endAdornment: !!searchQuery && (
            <InputAdornment position="end">
              <IconButton edge="end" size="small" onClick={handleClearSearch}>
                <Iconify icon="mingcute:close-line" />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      sx={{ maxWidth: 280 }}
    />
  );

  return (
    <>
      {renderSnackbar()}

      <Container sx={{ pt: 3, pb: 10 }}>
        <Box
          sx={{
            mb: 5,
            gap: 3,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          {renderHeader()}
          {renderSearch()}
        </Box>

        <Grid container spacing={3}>
          {iconSets.map((iconSet) => {
            const hasLink = !['payments', 'socials', 'custom'].includes(iconSet.prefix);

            return (
              <Grid
                key={iconSet.prefix}
                size={{ xs: 12, sm: 6 }}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: 'background.neutral',
                }}
              >
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {iconSet.prefix}
                  </Typography>

                  {hasLink && (
                    <IconButton
                      href={`https://icon-sets.iconify.design/${iconSet.prefix}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Iconify width={18} icon="carbon:launch" />
                    </IconButton>
                  )}
                </Box>

                <Box sx={{ gap: 1, display: 'flex', flexWrap: 'wrap' }}>
                  {Object.keys(iconSet.icons).map((icon) => {
                    const iconNameWithPrefix = `${iconSet.prefix}:${icon}` as IconifyName;
                    const isMatch = searchQuery && iconNameWithPrefix.includes(searchQuery);

                    return (
                      <IconBox
                        key={iconNameWithPrefix}
                        iconName={iconNameWithPrefix}
                        onClick={() => handleCopy(iconNameWithPrefix)}
                        sx={{
                          ...(isMatch && {
                            color: 'primary.darker',
                            bgcolor: 'primary.lighter',
                          }),
                        }}
                      />
                    );
                  })}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

type IconBoxProps = BoxProps & {
  iconName: IconifyName;
};

function IconBox({ iconName, sx, ...other }: IconBoxProps) {
  return (
    <Tooltip title={iconName}>
      <Box
        sx={[
          (theme) => ({
            width: 48,
            height: 48,
            borderRadius: 1,
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            color: 'text.secondary',
            justifyContent: 'center',
            bgcolor: 'background.default',
            '&:hover': {
              color: 'text.primary',
              boxShadow: theme.vars.customShadows.z8,
            },
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Iconify icon={iconName} width={24} />
      </Box>
    </Tooltip>
  );
}

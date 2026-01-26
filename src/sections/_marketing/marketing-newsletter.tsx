import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { CONFIG } from 'src/global-config';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function MarketingNewsletter({ sx, ...other }: BoxProps) {
  const renderContent = () => (
    <Box
      sx={{
        gap: 3,
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        textAlign: { xs: 'center', md: 'left' },
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <SvgColor
        src={`${CONFIG.assetsDir}/assets/icons/duotone/ic-newsletter.svg`}
        sx={(theme) => ({
          width: 80,
          height: 80,
          background: `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
        })}
      />

      <div>
        <Typography variant="h4" component="h6">
          Sign up for newsletter
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
          Receive 50% discount on first project
        </Typography>
      </div>
    </Box>
  );

  const renderInput = () => (
    <TextField
      fullWidth
      hiddenLabel
      placeholder="Enter your email"
      sx={{ maxWidth: 466 }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <Button size="large" color="inherit" variant="contained">
                Sign up
              </Button>
            </InputAdornment>
          ),
          sx: { pr: '4px' },
        },
      }}
    />
  );

  return (
    <Box
      component="section"
      sx={[
        {
          py: 10,
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container
        sx={{
          gap: 3,
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {renderContent()}
        {renderInput()}
      </Container>
    </Box>
  );
}

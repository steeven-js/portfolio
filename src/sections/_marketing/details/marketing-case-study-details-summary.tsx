import type { BoxProps } from '@mui/material/Box';
import type { ICaseStudyProps } from 'src/types/case-study';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { fDate } from 'src/utils/format-time';

import { _socials } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & Partial<ICaseStudyProps>;

export function MarketingCaseStudyDetailsSummary({
  sx,
  title,
  website,
  category,
  createdAt,
  description,
  ...other
}: Props) {
  const renderSocials = () => (
    <Box sx={{ display: 'flex' }}>
      {_socials.map((social) => (
        <IconButton key={social.label}>
          {social.value === 'twitter' && <Iconify icon="socials:twitter" />}
          {social.value === 'facebook' && <Iconify icon="socials:facebook" />}
          {social.value === 'instagram' && <Iconify icon="socials:instagram" />}
          {social.value === 'linkedin' && <Iconify icon="socials:linkedin" />}
        </IconButton>
      ))}
    </Box>
  );

  const renderDivider = () => <Divider sx={{ my: 3, borderStyle: 'dashed' }} />;

  const renderItem = (label: string, value?: string | React.ReactNode) => (
    <Box sx={{ '&:not(:first-of-type)': { mt: 2 } }}>
      <Typography variant="overline" sx={{ mb: 1, display: 'block', color: 'text.disabled' }}>
        {label}
      </Typography>
      {typeof value === 'string' ? <Typography variant="body2">{value}</Typography> : value}
    </Box>
  );

  return (
    <Box
      sx={[
        {
          p: 5,
          display: 'flex',
          borderRadius: 2,
          flexDirection: 'column',
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Typography variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
        summary
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>

      <Typography variant="body2">{description}</Typography>

      {renderDivider()}

      {renderItem(
        'Website',
        <Link variant="body2" color="inherit">
          {website}
        </Link>
      )}

      {renderItem('Category', category)}

      {renderItem('Date', fDate(createdAt))}

      {renderDivider()}

      <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">Share:</Typography>
        {renderSocials()}
      </Box>
    </Box>
  );
}

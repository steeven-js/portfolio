import type { BoxProps } from '@mui/material/Box';
import type { ITourProps } from 'src/types/tour';
import type { IconifyName } from 'src/components/iconify';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { fDate, FORMAT_PATTERNS } from 'src/utils/format-time';

import { TOUR_SERVICE_OPTIONS } from 'src/_mock';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = BoxProps & Partial<ITourProps>;

export function TravelTourDetailsSummary({
  sx,
  program,
  location,
  duration,
  services,
  available,
  tourGuide,
  languages,
  highlights,
  description,
  ...other
}: Props) {
  const renderOverview = () => (
    <div>
      <Typography component="h6" variant="h5" sx={{ mb: 3 }}>
        Overview
      </Typography>

      <Box
        sx={{
          rowGap: 2.5,
          columnGap: 3,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
        }}
      >
        <OverviewItem
          icon="solar:calendar-mark-outline"
          label="Available"
          text={`${fDate(available?.start, FORMAT_PATTERNS.split.date)} - ${fDate(available?.end, FORMAT_PATTERNS.split.date)}`}
        />
        <OverviewItem
          icon="solar:user-rounded-outline"
          label="Contact name"
          text={tourGuide?.name}
        />
        <OverviewItem icon="carbon:location" label="Location" text={location} />
        <OverviewItem
          icon="solar:smartphone-outline"
          label="Contact phone"
          text={tourGuide?.phoneNumber}
        />
        <OverviewItem icon="solar:clock-circle-outline" label="Durations" text={duration} />
        <OverviewItem icon="carbon:translate" label="Languages" text={languages?.join(', ')} />
      </Box>
    </div>
  );

  const renderDescription = () => (
    <div>
      <Typography component="h6" variant="h5" sx={{ mb: 2 }}>
        Description
      </Typography>
      <Typography>{description}</Typography>
    </div>
  );

  const renderHighlights = () => (
    <div>
      <Typography component="h6" variant="h5" sx={{ mb: 2 }}>
        Highlights
      </Typography>
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc', lineHeight: 2 }}>
        {highlights?.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </Box>
    </div>
  );

  const renderSevices = () => (
    <div>
      <Typography component="h6" variant="h5" sx={{ mb: 2 }}>
        Services
      </Typography>
      <Box
        sx={{
          rowGap: 2,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }}
      >
        {TOUR_SERVICE_OPTIONS.map((service) => (
          <Box
            key={service.label}
            sx={{
              gap: 1,
              display: 'flex',
              alignItems: 'center',

              ...(services?.includes(service.label) && { color: 'text.disabled' }),
            }}
          >
            <Iconify
              icon="eva:checkmark-fill"
              sx={{
                color: 'primary.main',
                ...(services?.includes(service.label) && { color: 'text.disabled' }),
              }}
            />
            {service.label}
          </Box>
        ))}
      </Box>
    </div>
  );

  const renderProgram = () => (
    <div>
      <Typography component="h6" variant="h5" sx={{ mb: 2 }}>
        Program
      </Typography>

      <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
        {program?.map((item) => (
          <div key={item.label}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                color: 'primary.main',
              }}
            >
              <Box
                component="span"
                sx={{
                  mr: 1.5,
                  width: 12,
                  height: 2,
                  borderRadius: 1,
                  bgcolor: 'currentColor',
                }}
              />
              {item.label}
            </Typography>
            {item.text}
          </div>
        ))}
      </Box>
    </div>
  );

  return (
    <Box
      sx={[
        {
          gap: 5,
          display: 'flex',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {renderOverview()}

      <Divider sx={{ borderStyle: 'dashed' }} />

      {renderDescription()}
      {renderHighlights()}
      {renderSevices()}
      {renderProgram()}
    </Box>
  );
}

// ----------------------------------------------------------------------

type OverviewItemProp = {
  text?: string;
  label: string;
  icon: IconifyName;
};

function OverviewItem({ icon, label, text = '-' }: OverviewItemProp) {
  return (
    <Box sx={{ gap: 1.5, display: 'flex' }}>
      <Iconify width={24} icon={icon} />

      <div>
        <Typography variant="body2" sx={{ mb: 0.5, color: 'text.secondary' }}>
          {label}
        </Typography>
        <Typography>{text}</Typography>
      </div>
    </Box>
  );
}

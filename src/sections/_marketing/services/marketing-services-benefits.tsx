import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Online Media',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'primary',
  },
  {
    title: 'Design',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'success',
  },
  {
    title: 'Marketing',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'secondary',
  },
  {
    title: 'HR & recruiting',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'secondary',
  },
  {
    title: 'Management',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'success',
  },
  {
    title: 'Branding',
    description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
    iconColor: 'primary',
  },
];

// ----------------------------------------------------------------------

export function MarketingServicesBenefits({ sx, ...other }: BoxProps) {
  const renderTexts = () => (
    <>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Benefits achieved
      </Typography>
      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          opacity: 0.72,
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
      </Typography>
    </>
  );

  const renderContent = (items: typeof BENEFITS, reverse?: boolean) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 10 } }}>
      {items.map((benefit, index) => (
        <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse={reverse} />
      ))}
    </Box>
  );

  const renderImage = () => (
    <Box
      component="img"
      loading="lazy"
      alt="Benefits"
      src={`${CONFIG.assetsDir}/assets/illustrations/illustration-benefits.svg`}
      sx={{
        width: 360,
        height: 360,
        objectFit: 'cover',
        display: { xs: 'none', md: 'block' },
      }}
    />
  );

  return (
    <Box
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        {renderTexts()}

        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {renderContent(BENEFITS.slice(0, 3), true)}
          {renderImage()}
          {renderContent(BENEFITS.slice(-3))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type BenefitItemProps = BoxProps & {
  index: number;
  reverse?: boolean;
  benefit: {
    title: string;
    description: string;
    iconColor: string;
  };
};

function BenefitItem({ benefit, reverse, index, sx, ...other }: BenefitItemProps) {
  return (
    <Box
      sx={[
        {
          gap: 1,
          display: 'flex',
          flexDirection: { xs: 'row', md: reverse ? 'row-reverse' : 'row' },
          ...(reverse && {
            textAlign: { md: 'right' },
          }),
          ...(index === 1 && {
            pl: { md: 6 },
            ...(reverse && { pl: { md: 0 }, pr: { md: 6 } }),
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={(theme) => ({
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          backgroundImage: `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
          ...(benefit.iconColor === 'secondary' && {
            backgroundImage: `linear-gradient(to bottom, ${theme.vars.palette.secondary.light}, ${theme.vars.palette.secondary.main})`,
          }),
          ...(benefit.iconColor === 'success' && {
            backgroundImage: `linear-gradient(to bottom, ${theme.vars.palette.success.light}, ${theme.vars.palette.success.main})`,
          }),
        })}
      />

      <div>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {benefit.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {benefit.description}
        </Typography>
      </div>
    </Box>
  );
}

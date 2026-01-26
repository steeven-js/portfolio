import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/steeven-js', color: '#171515' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/steevenjacques/', color: '#0A66C2' },
  { name: 'Email', icon: 'mdi:email', url: 'mailto:jacques.steeven@gmail.com', color: '#EA4335' },
];

export function PortfolioContact({ sx, ...other }: BoxProps) {
  return (
    <Box
      id="contact"
      component="section"
      sx={[
        (theme) => ({
          py: { xs: 10, md: 15 },
          bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <MotionViewport sx={{ textAlign: 'center' }}>
          <m.div variants={variants}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Contact
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
              Travaillons ensemble
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto', mb: 5 }}>
              Vous avez un projet en tete ? Une idee a concretiser ? N&apos;hesitez pas a me
              contacter pour discuter de vos besoins.
            </Typography>
          </m.div>

          <m.div variants={variants}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="solar:letter-bold" />}
              href="mailto:jacques.steeven@gmail.com"
              sx={{ mb: 5 }}
            >
              Envoyer un email
            </Button>
          </m.div>

          <m.div variants={variants}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {SOCIAL_LINKS.map((link) => (
                <Box
                  key={link.name}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={(theme) => ({
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    color: 'text.primary',
                    border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                    transition: theme.transitions.create(['transform', 'background-color', 'border-color']),
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      bgcolor: link.color,
                      borderColor: link.color,
                      color: 'common.white',
                    },
                  })}
                >
                  <Iconify icon={link.icon} width={24} />
                </Box>
              ))}
            </Box>
          </m.div>
        </MotionViewport>
      </Container>
    </Box>
  );
}

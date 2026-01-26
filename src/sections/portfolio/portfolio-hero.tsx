import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

export function PortfolioHero({ sx, ...other }: BoxProps) {
  const renderTexts = () => (
    <>
      <m.div variants={variants}>
        <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
          Developpeur Full Stack
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography variant="h1">
          Steeven
          <Box
            component="span"
            sx={(theme) => ({
              ...theme.mixins.textGradient(
                `90deg, ${theme.vars.palette.primary.main} 20%, ${theme.vars.palette.secondary.main} 100%`
              ),
            })}
          >
            {` JACQUES`}
          </Box>
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography sx={{ maxWidth: 520, color: 'text.secondary', mt: 3 }}>
          Developpeur passione specialise dans la creation d&apos;applications web et mobiles
          modernes. Laravel, React, Swift, automatisation - je transforme vos idees en solutions
          numeriques performantes.
        </Typography>
      </m.div>
    </>
  );

  const renderTechStack = () => (
    <Box sx={{ mt: 5 }}>
      <m.div variants={variants}>
        <Typography variant="overline" sx={{ opacity: 0.48, mb: 2, display: 'block' }}>
          Technologies
        </Typography>
      </m.div>
      <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap' }}>
        {[
          { name: 'Laravel', icon: 'logos:laravel' },
          { name: 'React', icon: 'logos:react' },
          { name: 'TypeScript', icon: 'logos:typescript-icon' },
          { name: 'Swift', icon: 'logos:swift' },
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'n8n', icon: 'simple-icons:n8n' },
        ].map((tech) => (
          <m.div key={tech.name} variants={variants}>
            <Box
              sx={(theme) => ({
                px: 2,
                py: 1,
                gap: 1,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 1,
                bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
              })}
            >
              <Iconify icon={tech.icon} width={20} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {tech.name}
              </Typography>
            </Box>
          </m.div>
        ))}
      </Box>
    </Box>
  );

  const renderActions = () => (
    <Box sx={{ mt: 5, gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
      <m.div variants={variants}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          endIcon={<Iconify icon="carbon:arrow-down" />}
          href="#projects"
        >
          Voir mes projets
        </Button>
      </m.div>
      <m.div variants={variants}>
        <Button
          size="large"
          variant="outlined"
          color="inherit"
          endIcon={<Iconify icon="carbon:email" />}
          href="#contact"
        >
          Me contacter
        </Button>
      </m.div>
    </Box>
  );

  const renderImage = () => (
    <Box
      component={m.div}
      variants={varFade('inRight', { distance: 40 })}
      sx={{
        flex: '1 1 auto',
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        alt="Steeven Jacques"
        src={`${CONFIG.assetsDir}/assets/images/portrait/steeven-serious.png`}
        sx={{
          maxWidth: 420,
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
        }}
      />
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.9)})`,
              `url(${CONFIG.assetsDir}/assets/background/overlay-1.webp)`,
            ],
          }),
          py: 10,
          overflow: 'hidden',
          position: 'relative',
          [theme.breakpoints.up('md')]: {
            py: 15,
            minHeight: 760,
            height: '100vh',
            maxHeight: 1440,
            display: 'flex',
            alignItems: 'center',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 5, md: 8 },
        }}
      >
        <MotionViewport
          sx={{
            maxWidth: 580,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {renderTexts()}
          {renderTechStack()}
          {renderActions()}
        </MotionViewport>

        <MotionViewport>
          {renderImage()}
        </MotionViewport>
      </Container>
    </Box>
  );
}

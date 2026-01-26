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

const FLOATING_ICONS = [
  { icon: 'logos:laravel', size: 48, delay: 0 },
  { icon: 'logos:react', size: 44, delay: 0.4 },
  { icon: 'logos:typescript-icon', size: 40, delay: 0.8 },
  { icon: 'logos:swift', size: 42, delay: 1.2 },
  { icon: 'logos:nodejs-icon', size: 46, delay: 1.6 },
  { icon: 'logos:openai-icon', size: 50, delay: 2 },
  { icon: 'simple-icons:anthropic', size: 44, delay: 2.4 },
];

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
          { name: 'ChatGPT', icon: 'logos:openai-icon' },
          { name: 'Claude', icon: 'simple-icons:anthropic' },
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

  const renderCodeAnimation = () => (
    <Box
      component={m.div}
      variants={varFade('inRight', { distance: 40 })}
      sx={{
        flex: '0 0 auto',
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: { md: 420, lg: 480 },
        minHeight: 380,
        overflow: 'visible',
      }}
    >
      {/* Central glowing orb */}
      <Box
        sx={(theme) => ({
          width: 180,
          height: 180,
          borderRadius: '50%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `radial-gradient(circle, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.15)} 0%, transparent 70%)`,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            padding: '3px',
            background: `linear-gradient(135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.secondary.main})`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          },
        })}
      >
        <m.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', inset: -4 }}
        >
          <Box
            sx={(theme) => ({
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: `2px dashed ${varAlpha(theme.vars.palette.primary.mainChannel, 0.3)}`,
            })}
          />
        </m.div>

        <m.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Iconify
            icon="fluent:brain-circuit-24-filled"
            width={64}
            sx={(theme) => ({
              color: theme.vars.palette.primary.main,
              filter: `drop-shadow(0 0 20px ${varAlpha(theme.vars.palette.primary.mainChannel, 0.5)})`,
            })}
          />
        </m.div>
      </Box>

      {/* Floating tech icons */}
      {FLOATING_ICONS.map((item, index) => {
        const angle = (index / FLOATING_ICONS.length) * 360;
        const radius = 140;

        return (
          <m.div
            key={item.icon}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [0, 10, 0, -10, 0],
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              opacity: { delay: item.delay, duration: 0.5 },
              scale: { delay: item.delay, duration: 0.5 },
              x: { delay: item.delay + 0.5, duration: 4, repeat: Infinity, ease: 'easeInOut' },
              y: { delay: item.delay + 0.5, duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{
              position: 'absolute',
              left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px)`,
              top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`,
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          >
            <Box
              sx={(theme) => ({
                p: 1.5,
                borderRadius: 2,
                bgcolor: 'background.paper',
                boxShadow: theme.vars.customShadows.z16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              })}
            >
              <Iconify icon={item.icon} width={item.size} />
            </Box>
          </m.div>
        );
      })}

      {/* Animated code lines */}
      <Box
        component={m.div}
        animate={{
          x: [0, 8, 0, -8, 0],
          y: [0, -8, 0, 8, 0],
        }}
        transition={{
          x: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        sx={(theme) => ({
          position: 'absolute',
          top: '-5%',
          right: '-10%',
          zIndex: 0,
          p: 1.5,
          borderRadius: 1.5,
          bgcolor: varAlpha(theme.vars.palette.grey['100Channel'], 0.95),
          backdropFilter: 'blur(8px)',
          border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.3)}`,
          boxShadow: theme.vars.customShadows.z8,
          ...theme.applyStyles('dark', {
            bgcolor: varAlpha(theme.vars.palette.grey['900Channel'], 0.9),
            border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
          }),
        })}
      >
        <m.div
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Typography
            component="pre"
            sx={(theme) => ({
              fontFamily: '"Fira Code", "SF Mono", Consolas, monospace',
              fontSize: 10,
              lineHeight: 1.6,
              textAlign: 'left',
              m: 0,
              color: '#1e1e1e',
              '& .keyword': { color: '#8b5cf6' },
              '& .string': { color: '#16a34a' },
              '& .property': { color: '#2563eb' },
              '& .punctuation': { color: '#64748b' },
              '& .variable': { color: '#0f172a' },
              ...theme.applyStyles('dark', {
                color: '#e4e4e7',
                '& .keyword': { color: '#c084fc' },
                '& .string': { color: '#4ade80' },
                '& .property': { color: '#60a5fa' },
                '& .punctuation': { color: '#a1a1aa' },
                '& .variable': { color: '#f4f4f5' },
              }),
            })}
          >
            <span className="keyword">const</span> <span className="variable">developer</span> <span className="punctuation">=</span> {'{\n'}
            {'  '}<span className="property">name</span><span className="punctuation">:</span> <span className="string">&quot;Steeven&quot;</span><span className="punctuation">,</span>{'\n'}
            {'  '}<span className="property">stack</span><span className="punctuation">:</span> <span className="string">&quot;Full Stack&quot;</span><span className="punctuation">,</span>{'\n'}
            {'  '}<span className="property">passion</span><span className="punctuation">:</span> <span className="string">&quot;IA &amp; Code&quot;</span>{'\n'}
            {'}'}<span className="punctuation">;</span>
          </Typography>
        </m.div>
      </Box>

      <Box
        component={m.div}
        animate={{
          x: [0, -8, 0, 8, 0],
          y: [0, 8, 0, -8, 0],
        }}
        transition={{
          x: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
        }}
        sx={(theme) => ({
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          zIndex: 0,
          p: 1.5,
          borderRadius: 1.5,
          bgcolor: varAlpha(theme.vars.palette.grey['100Channel'], 0.95),
          backdropFilter: 'blur(8px)',
          border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.3)}`,
          boxShadow: theme.vars.customShadows.z8,
          ...theme.applyStyles('dark', {
            bgcolor: varAlpha(theme.vars.palette.grey['900Channel'], 0.9),
            border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
          }),
        })}
      >
        <m.div
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        >
          <Typography
            component="pre"
            sx={(theme) => ({
              fontFamily: '"Fira Code", "SF Mono", Consolas, monospace',
              fontSize: 10,
              lineHeight: 1.6,
              textAlign: 'left',
              m: 0,
              color: '#1e1e1e',
              '& .keyword': { color: '#db2777' },
              '& .function': { color: '#d97706' },
              '& .comment': { color: '#94a3b8' },
              '& .punctuation': { color: '#64748b' },
              ...theme.applyStyles('dark', {
                color: '#e4e4e7',
                '& .keyword': { color: '#f472b6' },
                '& .function': { color: '#fbbf24' },
                '& .comment': { color: '#71717a' },
                '& .punctuation': { color: '#a1a1aa' },
              }),
            })}
          >
            {/* prettier-ignore */}
            <span className="comment">{`${'//'}Transform ideas`}</span>{'\n'}
            <span className="keyword">async</span> <span className="function">build</span><span className="punctuation">(</span>idea<span className="punctuation">)</span> {'{\n'}
            {'  '}<span className="keyword">return</span> solution<span className="punctuation">;</span>{'\n'}
            {'}'}
          </Typography>
        </m.div>
      </Box>
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
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 5, md: 4 },
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
          {renderCodeAnimation()}
        </MotionViewport>
      </Container>
    </Box>
  );
}

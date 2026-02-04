import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

const SKILLS = [
  {
    title: 'Agents IA & Automatisation',
    description: 'Developpement d\'agents IA personnalises, chatbots RAG connectes aux bases de donnees et workflows d\'automatisation.',
    icon: 'solar:cpu-bolt-bold-duotone',
    skills: ['Claude', 'OpenAI', 'RAG', 'n8n', 'LangChain'],
  },
  {
    title: 'Developpement Backend',
    description: 'APIs robustes et performantes avec Laravel, gestion de bases de donnees et architecture scalable.',
    icon: 'solar:server-bold-duotone',
    skills: ['Laravel', 'PHP', 'MySQL', 'Supabase', 'REST API'],
  },
  {
    title: 'Developpement Frontend',
    description: 'Interfaces modernes et reactives avec React et TypeScript, UX/UI soignees.',
    icon: 'solar:code-bold-duotone',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'MUI', 'Inertia.js'],
  },
  {
    title: 'Developpement Mobile',
    description: 'Applications iOS natives avec SwiftUI, integration APIs et notifications push.',
    icon: 'solar:smartphone-bold-duotone',
    skills: ['Swift', 'SwiftUI', 'SwiftData', 'WidgetKit'],
  },
];

export function PortfolioAbout({ sx, ...other }: BoxProps) {
  const renderHeader = () => (
    <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
      <m.div variants={variants}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Competences
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
          Ce que je fais
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
          Developpeur Full Stack avec une expertise en creation d&apos;applications web, mobiles et
          solutions d&apos;automatisation. Je combine creativite et technique pour delivrer des
          produits de qualite.
        </Typography>
      </m.div>
    </Box>
  );

  const renderSkills = () => (
    <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
      {SKILLS.map((skill, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={skill.title} sx={{ display: 'flex' }}>
          <m.div variants={varFade('inUp', { distance: 24 })} style={{ width: '100%' }}>
            <SkillCard skill={skill} index={index} />
          </m.div>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      id="about"
      component="section"
      sx={[{ py: { xs: 10, md: 15 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <MotionViewport>
          {renderHeader()}
          {renderSkills()}
        </MotionViewport>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type SkillCardProps = {
  skill: (typeof SKILLS)[0];
  index: number;
};

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <Box
      sx={(theme) => ({
        p: 4,
        height: '100%',
        borderRadius: 2,
        textAlign: 'center',
        border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
        transition: theme.transitions.create(['transform', 'box-shadow', 'border-color']),
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-4px)',
          boxShadow: theme.vars.customShadows.z16,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          width: 64,
          height: 64,
          mx: 'auto',
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
        })}
      >
        <Iconify icon={skill.icon} width={32} sx={{ color: 'primary.main' }} />
      </Box>

      <Typography variant="h6" sx={{ mb: 1 }}>
        {skill.title}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        {skill.description}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0.5 }}>
        {skill.skills.map((s) => (
          <Box
            key={s}
            component="span"
            sx={(theme) => ({
              px: 1,
              py: 0.25,
              fontSize: '0.75rem',
              borderRadius: 0.5,
              color: 'text.secondary',
              bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            })}
          >
            {s}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

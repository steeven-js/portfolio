import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: string;
  color: string;
  githubUrl?: string;
  appStoreUrl?: string;
};

const PROJECTS: Project[] = [
  {
    id: 'madinia-mobile',
    title: 'Madinia Mobile App',
    subtitle: 'Application iOS de Formations IA',
    description:
      'Application native iOS pour une plateforme de formations en Intelligence Artificielle avec coach IA integre "Madi" pour des recommandations personnalisees.',
    technologies: ['SwiftUI', 'Swift', 'MVVM', 'SwiftData'],
    features: ['Catalogue formations', 'Coach IA Madi', 'Push notifications', 'Blog integre'],
    icon: 'solar:smartphone-bold-duotone',
    color: '#8E33FF',
    githubUrl: 'https://github.com/steeven-js/madiniamobileapp',
    appStoreUrl: 'https://apps.apple.com/fr/app/madin-ia/id6758285745',
  },
  {
    id: 'mysubguard',
    title: 'MySubGuard',
    subtitle: 'Gestion d\'Abonnements',
    description:
      'Application de suivi d\'abonnements avec scan intelligent de factures via IA (GPT-4 Vision). Zero acces aux donnees bancaires pour une confidentialite maximale.',
    technologies: ['Swift', 'React', 'Laravel', 'GPT-4 Vision'],
    features: ['Scan IA factures', 'Widget iOS', 'Rappels', 'Analytics anonymes'],
    icon: 'solar:wallet-bold-duotone',
    color: '#00B8D9',
    githubUrl: 'https://github.com/steeven-js/MySubguard',
    appStoreUrl: 'https://apps.apple.com/fr/app/mysubguard/id6758056915',
  },
  {
    id: 'ai-agents',
    title: 'Agents IA Personnalises',
    subtitle: 'Chatbots & Automatisation IA',
    description:
      'Developpement d\'agents IA sur mesure: chatbots RAG connectes aux bases de donnees, assistants relation client, analyse d\'insights et automatisation de processus metier.',
    technologies: ['Claude API', 'OpenAI', 'RAG', 'LangChain', 'n8n'],
    features: ['Chatbots RAG', 'Base de donnees securisee', 'Insights clients', 'Automatisation'],
    icon: 'solar:magic-stick-3-bold-duotone',
    color: '#7C3AED',
  },
  {
    id: 'madinia-dashboard',
    title: 'Madinia Dashboard',
    subtitle: 'CRM & Gestion Comptable',
    description:
      'Systeme complet de gestion commerciale et comptable. Gestion des devis, factures, avoirs, relances et suivi TVA avec dashboard analytique.',
    technologies: ['Laravel 12', 'Filament 4', 'Supabase', 'Tailwind CSS'],
    features: ['Devis & Factures', 'Gestion TVA', 'Relances automatiques', 'Dashboard comptable'],
    icon: 'solar:chart-bold-duotone',
    color: '#FA541C',
  },
  {
    id: 'n8n-workflows',
    title: 'n8n Workflows',
    subtitle: 'Automatisations Quotidiennes',
    description:
      'Collection de 6 workflows d\'automatisation pour simplifier le quotidien: rappels, meteo, backup, suivi de prix, resume quotidien et factures.',
    technologies: ['n8n', 'Telegram API', 'OpenWeatherMap', 'NewsAPI'],
    features: ['Rappels taches', 'Meteo quotidienne', 'Backup auto', 'Suivi prix'],
    icon: 'solar:refresh-bold-duotone',
    color: '#FFAB00',
  },
  {
    id: 'madinia-web',
    title: 'Madinia Web v1',
    subtitle: 'Plateforme de Formations',
    description:
      'Plateforme web complete de formations en ligne avec catalogue, blog, systeme de pre-inscription et API mobile. Integration systeme.io pour le CRM.',
    technologies: ['Laravel 12', 'React 19', 'Inertia.js', 'MUI'],
    features: ['Catalogue cours', 'Blog', 'API mobile', 'Multi-langues'],
    icon: 'solar:monitor-bold-duotone',
    color: '#22C55E',
  },
];

export function PortfolioProjects({ sx, ...other }: BoxProps) {
  const renderHeader = () => (
    <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
      <m.div variants={variants}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Portfolio
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
          Mes Projets
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
          Decouvrez une selection de mes realisations recentes, allant des applications web aux
          solutions mobiles et automatisations.
        </Typography>
      </m.div>
    </Box>
  );

  const renderProjects = () => (
    <Box
      sx={{
        display: 'grid',
        gap: 4,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        },
      }}
    >
      {PROJECTS.map((project, index) => (
        <m.div key={project.id} variants={varFade('inUp', { distance: 24 })}>
          <ProjectCard project={project} index={index} />
        </m.div>
      ))}
    </Box>
  );

  return (
    <Box
      id="projects"
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
        <MotionViewport>
          {renderHeader()}
          {renderProjects()}
        </MotionViewport>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      sx={(theme) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: theme.transitions.create(['transform', 'box-shadow']),
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.vars.customShadows.z24,
        },
      })}
    >
      <Box
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderBottom: (theme) => `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
        }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 2,
            bgcolor: alpha(project.color, 0.12),
          }}
        >
          <Iconify icon={project.icon} width={32} sx={{ color: project.color }} />
        </Box>
        <Box>
          <Typography variant="h6">{project.title}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {project.subtitle}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          {project.description}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="caption" sx={{ color: 'text.disabled', mb: 1, display: 'block' }}>
            Fonctionnalites
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {project.features.map((feature) => (
              <Chip
                key={feature}
                label={feature}
                size="small"
                variant="soft"
                sx={{ fontSize: '0.7rem' }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: 'auto' }}>
          <Typography variant="caption" sx={{ color: 'text.disabled', mb: 1, display: 'block' }}>
            Technologies
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{ fontSize: '0.7rem' }}
              />
            ))}
          </Box>
        </Box>

        {(project.githubUrl || project.appStoreUrl) && (
          <Box sx={{ display: 'flex', gap: 1, mt: 2, pt: 2, borderTop: (theme) => `1px dashed ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}` }}>
            {project.githubUrl && (
              <IconButton
                component={Link}
                href={project.githubUrl}
                target="_blank"
                rel="noopener"
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
              >
                <Iconify icon="mdi:github" width={22} />
              </IconButton>
            )}
            {project.appStoreUrl && (
              <IconButton
                component={Link}
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener"
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
              >
                <Iconify icon="mdi:apple" width={22} />
              </IconButton>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

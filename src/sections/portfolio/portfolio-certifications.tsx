import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import { varAlpha } from 'minimal-shared/utils';
import { m, AnimatePresence } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

type ColorKey = 'success' | 'info' | 'warning' | 'secondary' | 'error' | 'primary';

type Certification = {
  id: string;
  title: string;
  issuer: string;
  location?: string;
  date: string;
  period?: string;
  level?: string;
  category: 'diploma' | 'certification' | 'training' | 'experience' | 'title';
  icon: string;
  colorKey: ColorKey;
  details?: string[];
};

const CERTIFICATIONS: Certification[] = [
  // Tri par date decroissante (plus recent en premier)
  {
    id: 'cert-cyber',
    title: 'Certificat de competence en Cybersecurite',
    issuer: 'CNAM',
    location: 'IMFPA - Institut martiniquais de formation professionnelle, Schoelcher',
    date: '02 septembre 2025',
    period: '21/10/2024 - 21/03/2025',
    level: 'Niveau 6 (Bac+3/4)',
    category: 'certification',
    icon: 'solar:shield-check-bold-duotone',
    colorKey: 'info',
  },
  {
    id: 'diploma-cda',
    title: 'Concepteur Developpeur d\'Applications',
    issuer: 'Ministere du Travail',
    location: 'IMFPA - Institut martiniquais de formation professionnelle, Fort-de-France',
    date: '11 avril 2024',
    period: '06/03/2023 - 23/03/2024',
    level: 'Niveau 6 (Bac+3/4)',
    category: 'title',
    icon: 'solar:code-file-bold-duotone',
    colorKey: 'success',
  },
  {
    id: 'training-dwwm',
    title: 'Developpeur Web et Web Mobile',
    issuer: 'Ministere du Travail',
    location: 'IMFPA - Institut martiniquais de formation professionnelle, Fort-de-France',
    date: '20 janvier 2023',
    period: '30/03/2022 - 06/01/2023',
    level: 'Niveau 5 (Bac+2)',
    category: 'title',
    icon: 'solar:monitor-bold-duotone',
    colorKey: 'secondary',
  },
  {
    id: 'diploma-bts',
    title: 'BTS Hygiene-Proprete-Environnement',
    issuer: 'Education Nationale',
    location: 'Lycee professionnel Dumas Jean-Joseph, Fort-de-France',
    date: '08 juillet 2013',
    level: 'Niveau 5 (Bac+2)',
    category: 'diploma',
    icon: 'solar:diploma-bold-duotone',
    colorKey: 'warning',
  },
  {
    id: 'diploma-bac',
    title: 'Bac Technologique Sciences et Technologies de la Sante et du Social',
    issuer: 'Education Nationale',
    location: 'Lycée général et technologique Joseph Gaillard, Schoelcher',
    date: '07 juillet 2011',
    level: 'Niveau 4 (Bac)',
    category: 'diploma',
    icon: 'solar:square-academic-cap-bold-duotone',
    colorKey: 'primary',
  },
];

const EXPERIENCES: Certification[] = [
  // Tri chronologique du plus recent au plus ancien
  {
    id: 'exp-3',
    title: 'Technicien portabilite',
    issuer: 'Digicel',
    location: 'Martinique',
    date: 'En poste',
    period: '05/02/2026 - Present',
    category: 'experience',
    icon: 'solar:transmission-bold-duotone',
    colorKey: 'success',
    details: [
      'Traitement des demandes de portabilite entrantes et sortantes',
      'Suivi des dossiers et respect des delais reglementaires (ARCEP)',
      'Interface avec les operateurs via le GIP (Guichet Inter-operateurs)',
      'Resolution des anomalies et reclamations clients liees a la portabilite',
    ],
  },
  {
    id: 'exp-madin',
    title: 'CTO / Developpeur principal',
    issuer: 'Madin.IA',
    location: 'Fort-de-France, Martinique',
    date: 'En cours',
    period: '10/2024 - Present (Freelance)',
    category: 'experience',
    icon: 'solar:code-square-bold-duotone',
    colorKey: 'info',
    details: [
      'Pilotage de la strategie technique et des standards de developpement',
      'Conception, developpement et deploiement du site web Madin.IA',
      'Realisation d\'un dashboard de facturation avec automatisation',
      'Developpement d\'evolutions produit et maintenance applicative',
    ],
  },
  {
    id: 'exp-2',
    title: 'Agent logistique en lien avec la sterilisation',
    issuer: 'Clinique Sainte-Paul',
    location: 'Fort-de-France, Martinique',
    date: '1 an 8 mois',
    period: '01/12/2019 - 13/08/2021',
    category: 'experience',
    icon: 'solar:hospital-bold-duotone',
    colorKey: 'primary',
    details: [
      'Gravure et tracabilite des instruments ; creation et gestion des sets operatoires',
      'Gestion d\'inventaire et suivi complet du circuit des sets',
      'Informatisation du parc d\'instruments dans un logiciel de gestion du bloc',
      'Suivi informatique des pertes, casses et remplacements',
    ],
  },
  {
    id: 'exp-1',
    title: 'Agent de sterilisation',
    issuer: 'Clinique Sainte-Marie',
    location: 'Fort-de-France, Martinique',
    date: '6 ans 4 mois',
    period: '22/07/2013 - 30/11/2019',
    category: 'experience',
    icon: 'solar:hospital-bold-duotone',
    colorKey: 'error',
    details: [
      'Reception, tri et lavage des dispositifs medicaux',
      'Conditionnement et conduite des cycles de sterilisation (autoclaves)',
      'Controle qualite et tracabilite des operations',
      'Respect des protocoles d\'hygiene et des normes en vigueur',
    ],
  },
];

export function PortfolioCertifications({ sx, ...other }: BoxProps) {
  const renderHeader = () => (
    <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
      <m.div variants={variants}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Parcours
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
          Diplomes & Certifications
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
          Reconversion professionnelle reussie du secteur hospitalier vers le developpement
          informatique et la cybersecurite. Un parcours de formation continue de 2022 a 2025.
        </Typography>
      </m.div>
    </Box>
  );

  const renderCertifications = () => (
    <>
      <m.div variants={variants}>
        <Typography variant="h5" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Iconify icon="solar:diploma-verified-bold-duotone" width={28} sx={{ color: 'primary.main' }} />
          Diplomes & Certifications
        </Typography>
      </m.div>
      <Grid container spacing={3} sx={{ mb: 6, alignItems: 'stretch' }}>
        {CERTIFICATIONS.map((cert) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={cert.id} sx={{ display: 'flex' }}>
            <m.div variants={varFade('inUp', { distance: 24 })} style={{ width: '100%' }}>
              <CertificationCard certification={cert} />
            </m.div>
          </Grid>
        ))}
      </Grid>
    </>
  );

  const renderExperiences = () => (
    <>
      <m.div variants={variants}>
        <Typography variant="h5" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Iconify icon="solar:case-bold-duotone" width={28} sx={{ color: 'primary.main' }} />
          Experience Professionnelle
        </Typography>
      </m.div>
      <Grid container spacing={3}>
        {EXPERIENCES.map((exp) => (
          <Grid size={{ xs: 12, sm: 6 }} key={exp.id}>
            <m.div variants={varFade('inUp', { distance: 24 })}>
              <CertificationCard certification={exp} />
            </m.div>
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <Box
      id="certifications"
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
          {renderCertifications()}
          {renderExperiences()}
        </MotionViewport>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type CertificationCardProps = {
  certification: Certification;
};

function CertificationCard({ certification }: CertificationCardProps) {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const hasDetails = certification.details && certification.details.length > 0;

  const getColorChannel = (colorKey: ColorKey) => theme.vars.palette[colorKey].mainChannel;

  const getColorMain = (colorKey: ColorKey) => theme.vars.palette[colorKey].main;

  const getCategoryLabel = (category: Certification['category']) => {
    switch (category) {
      case 'diploma':
        return 'Diplome';
      case 'certification':
        return 'Certificat';
      case 'training':
        return 'Formation';
      case 'experience':
        return 'Experience';
      case 'title':
        return 'Titre professionnel';
      default:
        return category;
    }
  };

  const colorChannel = getColorChannel(certification.colorKey);
  const colorMain = getColorMain(certification.colorKey);

  const handleToggle = () => {
    if (hasDetails) {
      setExpanded(!expanded);
    }
  };

  return (
    <Box
      onClick={handleToggle}
      sx={(themeParam) => ({
        p: 3,
        height: '100%',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        border: `1px solid ${varAlpha(themeParam.vars.palette.grey['500Channel'], 0.12)}`,
        transition: themeParam.transitions.create(['transform', 'box-shadow', 'border-color']),
        cursor: hasDetails ? 'pointer' : 'default',
        '&:hover': {
          borderColor: colorMain,
          transform: hasDetails ? 'translateY(-4px)' : 'none',
          boxShadow: hasDetails ? themeParam.vars.customShadows.z16 : 'none',
        },
      })}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1.5,
            bgcolor: varAlpha(colorChannel, 0.12),
          }}
        >
          <Iconify icon={certification.icon} width={28} sx={{ color: colorMain }} />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
            <Chip
              label={getCategoryLabel(certification.category)}
              size="small"
              sx={{
                height: 22,
                fontSize: '0.7rem',
                fontWeight: 600,
                bgcolor: varAlpha(colorChannel, 0.12),
                color: colorMain,
              }}
            />
            {certification.level && (
              <Chip
                label={certification.level}
                size="small"
                variant="outlined"
                sx={{
                  height: 22,
                  fontSize: '0.65rem',
                  borderColor: varAlpha(colorChannel, 0.3),
                  color: 'text.secondary',
                }}
              />
            )}
          </Box>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
            {certification.title}
          </Typography>
        </Box>

        {hasDetails && (
          <IconButton
            size="small"
            sx={{
              ml: 'auto',
              transition: theme.transitions.create('transform'),
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <Iconify icon="solar:alt-arrow-down-bold-duotone" width={20} />
          </IconButton>
        )}
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}
        >
          <Iconify icon="solar:buildings-2-bold-duotone" width={16} sx={{ opacity: 0.7 }} />
          {certification.issuer}
        </Typography>

        {certification.location && (
          <Typography
            variant="caption"
            sx={{ color: 'text.disabled', display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}
          >
            <Iconify icon="solar:map-point-bold-duotone" width={14} sx={{ opacity: 0.7 }} />
            {certification.location}
          </Typography>
        )}

        {certification.period && (
          <Typography
            variant="caption"
            sx={{ color: 'text.disabled', display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <Iconify icon="solar:calendar-bold-duotone" width={14} sx={{ opacity: 0.7 }} />
            {certification.period}
          </Typography>
        )}
      </Box>

      <AnimatePresence>
        {expanded && hasDetails && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <Box
              sx={(themeParam) => ({
                mt: 2,
                pt: 2,
                borderTop: `1px dashed ${varAlpha(themeParam.vars.palette.grey['500Channel'], 0.2)}`,
              })}
            >
              {certification.details?.map((detail, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ color: 'text.secondary', mb: 0.5, '&:last-child': { mb: 0 } }}
                >
                  • {detail}
                </Typography>
              ))}
            </Box>
          </m.div>
        )}
      </AnimatePresence>

      <Box
        sx={(themeParam) => ({
          mt: 2,
          pt: 2,
          borderTop: `1px dashed ${varAlpha(themeParam.vars.palette.grey['500Channel'], 0.2)}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {certification.category === 'experience' ? 'Duree' : 'Obtenu le'}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: colorMain, fontWeight: 600 }}>
          {certification.date}
        </Typography>
      </Box>
    </Box>
  );
}

import type { Variants } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { useState } from 'react';
import { varAlpha } from 'minimal-shared/utils';
import { m, AnimatePresence } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const variants: Variants = varFade('inUp', { distance: 24 });

type Feature = {
  name: string;
  description: string;
  icon: string;
  details: string[];
};

type Service = {
  title: string;
  description: string;
  icon: string;
  features: Feature[];
};

const SERVICES: Service[] = [
  {
    title: 'Développement Web Full Stack',
    description:
      'Applications web modernes et performantes avec Laravel et React. APIs robustes, interfaces réactives et architecture scalable.',
    icon: 'solar:monitor-bold-duotone',
    features: [
      {
        name: 'Sites vitrines',
        description: 'Présentez votre activité avec un site moderne et professionnel',
        icon: 'solar:window-frame-bold-duotone',
        details: [
          'Design responsive adapté mobile, tablette et desktop',
          'Optimisation SEO pour un meilleur référencement Google',
          'Formulaire de contact et intégration réseaux sociaux',
          'Hébergement et nom de domaine inclus',
        ],
      },
      {
        name: 'Applications métier',
        description: 'Outils sur mesure pour gérer votre activité au quotidien',
        icon: 'solar:buildings-bold-duotone',
        details: [
          'Gestion de clients, devis et factures',
          'Suivi de projets et tâches',
          'Tableaux de bord personnalisés',
          'Export de données (PDF, Excel)',
        ],
      },
      {
        name: 'APIs REST',
        description: 'Connectez vos systèmes et applications entre eux',
        icon: 'solar:programming-bold-duotone',
        details: [
          'Architecture RESTful sécurisée',
          'Documentation Swagger/OpenAPI',
          'Authentification JWT ou OAuth2',
          'Versioning et rate limiting',
        ],
      },
      {
        name: 'Base de données',
        description: 'Stockage sécurisé et organisé de vos données',
        icon: 'solar:database-bold-duotone',
        details: [
          'Modélisation et optimisation des données',
          'Sauvegardes automatiques quotidiennes',
          'Migration depuis vos systèmes existants',
          'PostgreSQL, MySQL ou MongoDB selon vos besoins',
        ],
      },
    ],
  },
  {
    title: 'Développement Mobile iOS',
    description:
      'Applications iPhone et iPad natives en Swift. Expérience utilisateur fluide, performances optimales et intégration App Store.',
    icon: 'solar:iphone-bold-duotone',
    features: [
      {
        name: 'Apps natives',
        description: 'Applications rapides et fluides, conçues pour iOS',
        icon: 'solar:smartphone-bold-duotone',
        details: [
          'SwiftUI et UIKit pour une UI native',
          'Support offline et synchronisation',
          'Animations fluides 60fps',
          'Compatible iPhone et iPad',
        ],
      },
      {
        name: 'Widgets iOS',
        description: "Accès rapide aux infos depuis l'écran d'accueil",
        icon: 'solar:widget-bold-duotone',
        details: [
          'Widgets de différentes tailles (small, medium, large)',
          'Mise à jour en temps réel des données',
          "Personnalisation par l'utilisateur",
          'Live Activities pour iOS 16+',
        ],
      },
      {
        name: 'Notifications',
        description: 'Alertes en temps réel pour vos utilisateurs',
        icon: 'solar:bell-bold-duotone',
        details: [
          'Notifications push personnalisées',
          'Notifications programmées et récurrentes',
          'Actions rapides depuis la notification',
          'Segmentation des utilisateurs',
        ],
      },
      {
        name: 'Publication App Store',
        description: "Mise en ligne et visibilité sur l'App Store",
        icon: 'solar:cloud-upload-bold-duotone',
        details: [
          'Création du compte développeur Apple',
          'Préparation des screenshots et descriptions',
          'Soumission et suivi de la review Apple',
          'Mises à jour et maintenance post-lancement',
        ],
      },
    ],
  },
  {
    title: 'Automatisation & IA',
    description:
      "Optimisez vos processus avec des workflows automatisés et l'intelligence artificielle. Gagnez du temps sur les tâches répétitives.",
    icon: 'solar:cpu-bolt-bold-duotone',
    features: [
      {
        name: 'Workflows automatisés',
        description: "Vos tâches répétitives s'exécutent toutes seules",
        icon: 'solar:route-bold-duotone',
        details: [
          'Automatisation avec n8n, Make ou Zapier',
          'Déclencheurs personnalisés (horaires, événements)',
          'Connexion à vos outils existants',
          "Monitoring et alertes en cas d'erreur",
        ],
      },
      {
        name: 'Assistants IA',
        description: 'ChatGPT et Claude intégrés à vos outils',
        icon: 'solar:chat-round-dots-bold-duotone',
        details: [
          'Chatbots pour le support client',
          'Génération automatique de contenu',
          'Analyse et résumé de documents',
          'Réponses contextualisées à vos données',
        ],
      },
      {
        name: 'Emails automatiques',
        description: 'Réponses et suivis envoyés automatiquement',
        icon: 'solar:mailbox-bold-duotone',
        details: [
          "Séquences d'emails personnalisées",
          'Réponses automatiques intelligentes',
          'Relances et rappels programmés',
          'Templates dynamiques avec vos données',
        ],
      },
      {
        name: 'Connexions entre apps',
        description: 'Vos outils communiquent et se synchronisent',
        icon: 'solar:link-bold-duotone',
        details: [
          'Synchronisation CRM, comptabilité, e-commerce',
          'Webhooks et APIs personnalisées',
          'Transformation et mapping de données',
          'Historique et logs des synchronisations',
        ],
      },
    ],
  },
  {
    title: 'SaaS & Dashboards',
    description:
      "Plateformes SaaS complètes et tableaux de bord sur mesure. Gestion de données, analytics et interfaces d'administration.",
    icon: 'solar:chart-bold-duotone',
    features: [
      {
        name: 'Tableaux de bord',
        description: "Visualisez vos données clés en un coup d'œil",
        icon: 'solar:chart-square-bold-duotone',
        details: [
          'Widgets personnalisables (graphiques, KPIs)',
          'Filtres et périodes dynamiques',
          'Export PDF et partage par lien',
          'Rafraîchissement en temps réel',
        ],
      },
      {
        name: 'Gestion utilisateurs',
        description: 'Comptes, rôles et permissions pour votre équipe',
        icon: 'solar:users-group-rounded-bold-duotone',
        details: [
          'Inscription et connexion sécurisées',
          'Rôles et permissions granulaires',
          'Gestion des équipes et organisations',
          'Authentification 2FA et SSO',
        ],
      },
      {
        name: 'Analytics',
        description: 'Statistiques et rapports pour prendre les bonnes décisions',
        icon: 'solar:graph-up-bold-duotone',
        details: [
          'Suivi des métriques clés (KPIs)',
          'Rapports automatiques hebdomadaires/mensuels',
          'Comparaisons et tendances',
          'Alertes sur seuils personnalisés',
        ],
      },
      {
        name: 'Facturation',
        description: 'Paiements et abonnements intégrés à votre plateforme',
        icon: 'solar:card-bold-duotone',
        details: [
          'Intégration Stripe pour les paiements',
          'Gestion des abonnements et plans',
          'Factures automatiques conformes',
          'Portail client pour gérer son compte',
        ],
      },
    ],
  },
];

const CONTACT_INFO = {
  email: 'jacques.steeven@gmail.com',
  phone: '+596 696 30 76 31',
};

export function PortfolioServices({ sx, ...other }: BoxProps) {
  const renderHeader = () => (
    <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
      <m.div variants={variants}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Services
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
          Comment puis-je vous aider ?
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
          Fort de mon expérience sur des projets variés, je vous accompagne dans la réalisation de
          vos idées. Chaque projet est unique, discutons ensemble de vos besoins.
        </Typography>
      </m.div>
    </Box>
  );

  const renderServices = () => (
    <Grid container spacing={4} sx={{ mb: { xs: 6, md: 10 } }}>
      {SERVICES.map((service) => (
        <Grid size={{ xs: 12, sm: 6 }} key={service.title} sx={{ display: 'flex' }}>
          <m.div variants={varFade('inUp', { distance: 24 })} style={{ width: '100%' }}>
            <ServiceCard service={service} />
          </m.div>
        </Grid>
      ))}
    </Grid>
  );

  const renderContact = () => (
    <Box sx={{ textAlign: 'center' }}>
      <m.div variants={variants}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Intéressé ? Contactez-moi
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Typography sx={{ color: 'text.secondary', mb: 4, maxWidth: 480, mx: 'auto' }}>
          Décrivez-moi votre projet et je vous répondrai dans les plus brefs délais pour en
          discuter.
        </Typography>
      </m.div>

      <m.div variants={variants}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="solar:letter-bold" />}
            href={`mailto:${CONTACT_INFO.email}`}
          >
            {CONTACT_INFO.email}
          </Button>

          <Button
            size="large"
            variant="outlined"
            color="primary"
            startIcon={<Iconify icon="solar:phone-bold" />}
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
          >
            {CONTACT_INFO.phone}
          </Button>
        </Box>
      </m.div>
    </Box>
  );

  return (
    <Box
      id="services"
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
          {renderServices()}
          {renderContact()}
        </MotionViewport>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const handleToggle = (featureName: string) => {
    setExpandedFeature(expandedFeature === featureName ? null : featureName);
  };

  return (
    <Box
      sx={(theme) => ({
        p: 4,
        height: '100%',
        borderRadius: 2,
        bgcolor: 'background.paper',
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
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2,
          bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
        })}
      >
        <Iconify icon={service.icon} width={32} sx={{ color: 'primary.main' }} />
      </Box>

      <Typography variant="h5" sx={{ mb: 1.5 }}>
        {service.title}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        {service.description}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {service.features.map((feature) => {
          const isExpanded = expandedFeature === feature.name;

          return (
            <Box
              key={feature.name}
              sx={(theme) => ({
                borderRadius: 1.5,
                bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
                overflow: 'hidden',
                transition: theme.transitions.create(['background-color', 'box-shadow']),
                ...(isExpanded && {
                  bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.04),
                  boxShadow: `inset 0 0 0 1px ${varAlpha(theme.vars.palette.primary.mainChannel, 0.16)}`,
                }),
              })}
            >
              <Box
                onClick={() => handleToggle(feature.name)}
                sx={(theme) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 1.5,
                  cursor: 'pointer',
                  transition: theme.transitions.create(['background-color']),
                  '&:hover': {
                    bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
                  },
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: 36,
                    height: 36,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 1,
                    bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.12),
                  })}
                >
                  <Iconify icon={feature.icon} width={20} sx={{ color: 'primary.main' }} />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="subtitle2" sx={{ mb: 0.25 }}>
                    {feature.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.4 }}>
                    {feature.description}
                  </Typography>
                </Box>
                <Iconify
                  icon="solar:alt-arrow-down-bold"
                  width={20}
                  sx={{
                    color: 'text.secondary',
                    flexShrink: 0,
                    transition: 'transform 0.2s ease-in-out',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </Box>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <Box
                      sx={(theme) => ({
                        px: 2,
                        pb: 2,
                        pt: 0.5,
                        borderTop: `1px dashed ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
                      })}
                    >
                      {feature.details.map((detail, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1,
                            py: 0.75,
                          }}
                        >
                          <Iconify
                            icon="solar:check-circle-bold"
                            width={16}
                            sx={{ color: 'primary.main', mt: 0.25, flexShrink: 0 }}
                          />
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {detail}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </m.div>
                )}
              </AnimatePresence>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

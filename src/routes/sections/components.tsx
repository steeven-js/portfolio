import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Outlet } from 'react-router';

import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/components'));

const IconsPage = lazy(() => import('src/pages/components/icons'));
const IconsIconifyPage = lazy(() => import('src/pages/components/icons/iconify'));
const ImagePage = lazy(() => import('src/pages/components/image'));
const LabelPage = lazy(() => import('src/pages/components/label'));
const PlayerPage = lazy(() => import('src/pages/components/player'));
const AnimatePage = lazy(() => import('src/pages/components/animate'));
const ScrollbarPage = lazy(() => import('src/pages/components/scrollbar'));
const LightboxPage = lazy(() => import('src/pages/components/lightbox'));
const MarkdownPage = lazy(() => import('src/pages/components/markdown'));
const CarouselsPage = lazy(() => import('src/pages/components/carousel'));
const MegaMenuPage = lazy(() => import('src/pages/components/mega-menu'));
const UtilitiesPage = lazy(() => import('src/pages/components/utilities'));
const FormWizardPage = lazy(() => import('src/pages/components/form-wizard'));
const NavigationBarPage = lazy(() => import('src/pages/components/navigation-bar'));
const FormValidationPage = lazy(() => import('src/pages/components/form-validation'));
const ScrollProgressPage = lazy(() => import('src/pages/components/scroll-progress'));

// ----------------------------------------------------------------------

export const componentsRoutes: RouteObject[] = [
  {
    path: 'components',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { index: true, element: <IndexPage /> },
      { path: 'animate', element: <AnimatePage /> },
      { path: 'carousel', element: <CarouselsPage /> },
      { path: 'form-validation', element: <FormValidationPage /> },
      { path: 'form-wizard', element: <FormWizardPage /> },
      { path: 'icons', element: <IconsPage /> },
      { path: 'icons/iconify', element: <IconsIconifyPage /> },
      { path: 'image', element: <ImagePage /> },
      { path: 'label', element: <LabelPage /> },
      { path: 'lightbox', element: <LightboxPage /> },
      { path: 'markdown', element: <MarkdownPage /> },
      { path: 'mega-menu', element: <MegaMenuPage /> },
      { path: 'navigation-bar', element: <NavigationBarPage /> },
      { path: 'player', element: <PlayerPage /> },
      { path: 'scrollbar', element: <ScrollbarPage /> },
      { path: 'scroll-progress', element: <ScrollProgressPage /> },
      { path: 'utilities', element: <UtilitiesPage /> },
    ],
  },
];

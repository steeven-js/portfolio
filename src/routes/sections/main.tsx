import type { RouteObject } from 'react-router';

import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { MainLayout } from 'src/layouts/main';
import { SimpleLayout } from 'src/layouts/simple';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const Page404 = lazy(() => import('src/pages/error/404'));
const Page500 = lazy(() => import('src/pages/error/500'));
const SupportPage = lazy(() => import('src/pages/support'));
const PaymentPage = lazy(() => import('src/pages/payment'));
const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
const MaintenancePage = lazy(() => import('src/pages/maintenance'));
const PricingCardsPage = lazy(() => import('src/pages/pricing/cards'));
const PricingColumnsPage = lazy(() => import('src/pages/pricing/columns'));

// ----------------------------------------------------------------------

export const mainRoutes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: 'support',
        element: (
          <MainLayout>
            <SupportPage />
          </MainLayout>
        ),
      },
      {
        element: (
          <SimpleLayout>
            <Outlet />
          </SimpleLayout>
        ),
        children: [
          { path: 'payment', element: <PaymentPage /> },
          { path: 'pricing-cards', element: <PricingCardsPage /> },
          { path: 'pricing-columns', element: <PricingColumnsPage /> },
        ],
      },
      {
        element: (
          <SimpleLayout slotProps={{ content: { compact: true } }}>
            <Outlet />
          </SimpleLayout>
        ),
        children: [
          { path: 'coming-soon', element: <ComingSoonPage /> },
          { path: 'maintenance', element: <MaintenancePage /> },
        ],
      },
      {
        path: 'error',
        children: [
          { path: '500', element: <Page500 /> },
          { path: '404', element: <Page404 /> },
        ],
      },
    ],
  },
];

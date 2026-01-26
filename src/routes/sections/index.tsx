import type { RouteObject } from 'react-router';

import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { PortfolioLayout } from 'src/layouts/portfolio';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const PortfolioPage = lazy(() => import('src/pages/portfolio'));
const Page404 = lazy(() => import('src/pages/error/404'));

export const routesSection: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <PortfolioLayout>
            <PortfolioPage />
          </PortfolioLayout>
        ),
      },

      // No match
      { path: '*', element: <Page404 /> },
    ],
  },
];

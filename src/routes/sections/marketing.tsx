import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Outlet } from 'react-router';

import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

const PostsPage = lazy(() => import('src/pages/marketing/posts'));
const PostPage = lazy(() => import('src/pages/marketing/post'));
const AboutPage = lazy(() => import('src/pages/marketing/about'));
const ContactPage = lazy(() => import('src/pages/marketing/contact'));
const LandingPage = lazy(() => import('src/pages/marketing/landing'));
const ServicesPage = lazy(() => import('src/pages/marketing/services'));
const CaseStudyPage = lazy(() => import('src/pages/marketing/case-study'));
const CaseStudiesPage = lazy(() => import('src/pages/marketing/case-studies'));

// ----------------------------------------------------------------------

export const marketingRoutes: RouteObject[] = [
  {
    path: 'marketing',
    children: [
      {
        index: true,
        element: (
          <MainLayout
            slotProps={{
              header: {
                sx: { position: { md: 'fixed' } },
              },
            }}
          >
            <LandingPage />
          </MainLayout>
        ),
      },
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          { path: 'services', element: <ServicesPage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'contact', element: <ContactPage /> },
          {
            path: 'case-studies',
            children: [
              { index: true, element: <CaseStudiesPage /> },
              { path: ':id', element: <CaseStudyPage /> },
            ],
          },
          {
            path: 'posts',
            children: [
              { index: true, element: <PostsPage /> },
              { path: 'details', element: <PostPage /> },
            ],
          },
        ],
      },
    ],
  },
];

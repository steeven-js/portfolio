import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Outlet } from 'react-router';

import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

const LandingPage = lazy(() => import('src/pages/career/landing'));
const AboutPage = lazy(() => import('src/pages/career/about'));
const PostsPage = lazy(() => import('src/pages/career/posts'));
const ContactPage = lazy(() => import('src/pages/career/contact'));
const JobPage = lazy(() => import('src/pages/career/job'));
const JobsPage = lazy(() => import('src/pages/career/jobs'));
const PostPage = lazy(() => import('src/pages/career/post'));

// ----------------------------------------------------------------------

export const careerRoutes: RouteObject[] = [
  {
    path: 'career',
    children: [
      {
        index: true,
        element: (
          <MainLayout
            slotProps={{
              header: {
                sx: {
                  position: { md: 'fixed' },
                  color: { md: 'common.white' },
                },
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
          { path: 'about', element: <AboutPage /> },
          { path: 'contact', element: <ContactPage /> },
          {
            path: 'jobs',
            children: [
              { index: true, element: <JobsPage /> },
              { path: 'details', element: <JobPage /> },
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

import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Outlet } from 'react-router';

import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

const AboutPage = lazy(() => import('src/pages/e-learning/about'));
const PostsPage = lazy(() => import('src/pages/e-learning/posts'));
const ContactPage = lazy(() => import('src/pages/e-learning/contact'));
const CoursePage = lazy(() => import('src/pages/e-learning/course'));
const CoursesPage = lazy(() => import('src/pages/e-learning/courses'));
const LandingPage = lazy(() => import('src/pages/e-learning/landing'));
const PostPage = lazy(() => import('src/pages/e-learning/post'));

// ----------------------------------------------------------------------

export const eLearningRoutes: RouteObject[] = [
  {
    path: 'e-learning',
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
          { path: 'about', element: <AboutPage /> },
          { path: 'contact', element: <ContactPage /> },
          {
            path: 'courses',
            children: [
              { index: true, element: <CoursesPage /> },
              { path: 'details', element: <CoursePage /> },
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

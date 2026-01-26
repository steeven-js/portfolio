import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Outlet } from 'react-router';

import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

const PostsPage = lazy(() => import('src/pages/travel/posts'));
const PostPage = lazy(() => import('src/pages/travel/post'));
const TourPage = lazy(() => import('src/pages/travel/tour'));
const AboutPage = lazy(() => import('src/pages/travel/about'));
const ToursPage = lazy(() => import('src/pages/travel/tours'));
const ContactPage = lazy(() => import('src/pages/travel/contact'));
const LandingPage = lazy(() => import('src/pages/travel/landing'));
const CheckoutPage = lazy(() => import('src/pages/travel/checkout'));
const OrderCompletedPage = lazy(() => import('src/pages/travel/order-completed'));

// ----------------------------------------------------------------------

export const travelRoutes: RouteObject[] = [
  {
    path: 'travel',
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
          { path: 'checkout', element: <CheckoutPage /> },
          { path: 'order-completed', element: <OrderCompletedPage /> },
          {
            path: 'tours',
            children: [
              { index: true, element: <ToursPage /> },
              { path: 'details', element: <TourPage /> },
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

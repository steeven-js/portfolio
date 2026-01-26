import type { RouteObject } from 'react-router';

import { lazy } from 'react';

import { AuthSplitLayout } from 'src/layouts/auth-split';
import { AuthCenteredLayout } from 'src/layouts/auth-centered';
import { AuthIllustrationLayout } from 'src/layouts/auth-illustration';

// ----------------------------------------------------------------------

const SplitLayout = {
  SignInPage: lazy(() => import('src/pages/auth/split/sign-in')),
  SignUpPage: lazy(() => import('src/pages/auth/split/sign-up')),
};

const CenteredLayout = {
  SignInPage: lazy(() => import('src/pages/auth/centered/sign-in')),
  SignUpPage: lazy(() => import('src/pages/auth/centered/sign-up')),
};

const IllustrationLayout = {
  SignInPage: lazy(() => import('src/pages/auth/illustration/sign-in')),
  SignUpPage: lazy(() => import('src/pages/auth/illustration/sign-up')),
};

const VerifyPage = lazy(() => import('src/pages/auth/verify'));
const ResetPasswordPage = lazy(() => import('src/pages/auth/reset-password'));
const UpdatePasswordPage = lazy(() => import('src/pages/auth/update-password'));

// ----------------------------------------------------------------------

export const authRoutes: RouteObject[] = [
  {
    path: 'split',
    children: [
      {
        path: 'sign-in',
        element: (
          <AuthSplitLayout>
            <SplitLayout.SignInPage />
          </AuthSplitLayout>
        ),
      },
      {
        path: 'sign-up',
        element: (
          <AuthSplitLayout
            slotProps={{
              section: { title: `Manage The Job \n More Effectively` },
            }}
          >
            <SplitLayout.SignUpPage />
          </AuthSplitLayout>
        ),
      },
    ],
  },
  {
    path: 'centered',
    children: [
      {
        path: 'sign-in',
        element: (
          <AuthCenteredLayout>
            <CenteredLayout.SignInPage />
          </AuthCenteredLayout>
        ),
      },
      {
        path: 'sign-up',
        element: (
          <AuthCenteredLayout>
            <CenteredLayout.SignUpPage />
          </AuthCenteredLayout>
        ),
      },
    ],
  },
  {
    path: 'illustration',
    children: [
      {
        path: 'sign-in',
        element: (
          <AuthIllustrationLayout>
            <IllustrationLayout.SignInPage />
          </AuthIllustrationLayout>
        ),
      },
      {
        path: 'sign-up',
        element: (
          <AuthIllustrationLayout>
            <IllustrationLayout.SignUpPage />
          </AuthIllustrationLayout>
        ),
      },
    ],
  },
  {
    path: 'reset-password',
    element: (
      <AuthCenteredLayout>
        <ResetPasswordPage />
      </AuthCenteredLayout>
    ),
  },
  {
    path: 'update-password',
    element: (
      <AuthCenteredLayout>
        <UpdatePasswordPage />
      </AuthCenteredLayout>
    ),
  },
  {
    path: 'verify',
    element: (
      <AuthCenteredLayout>
        <VerifyPage />
      </AuthCenteredLayout>
    ),
  },
];

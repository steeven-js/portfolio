import type { RouteObject } from 'react-router';

import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { MainLayout } from 'src/layouts/main';

import { LoadingScreen } from 'src/components/loading-screen';

import { AccountLayout } from 'src/sections/_account/layout';
import { EcommerceLayout } from 'src/sections/_ecommerce/layout';

// ----------------------------------------------------------------------

const OrdersPage = lazy(() => import('src/pages/account/orders'));
const PaymentPage = lazy(() => import('src/pages/account/payment'));
const PersonalPage = lazy(() => import('src/pages/account/personal'));
const VouchersPage = lazy(() => import('src/pages/account/vouchers'));
const WishlistPage = lazy(() => import('src/pages/account/wishlist'));

// ----------------------------------------------------------------------

export const accountRoutes: RouteObject[] = [
  {
    path: 'account',
    element: (
      <MainLayout>
        <EcommerceLayout>
          <AccountLayout>
            <Suspense fallback={<LoadingScreen sx={{ height: 480 }} />}>
              <Outlet />
            </Suspense>
          </AccountLayout>
        </EcommerceLayout>
      </MainLayout>
    ),
    children: [
      { path: 'personal', element: <PersonalPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
      { path: 'vouchers', element: <VouchersPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'payment', element: <PaymentPage /> },
    ],
  },
];

import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Outlet } from 'react-router';

import { MainLayout } from 'src/layouts/main';

import { EcommerceLayout } from 'src/sections/_ecommerce/layout';

// ----------------------------------------------------------------------

const CartPage = lazy(() => import('src/pages/e-commerce/cart'));
const ComparePage = lazy(() => import('src/pages/e-commerce/compare'));
const LandingPage = lazy(() => import('src/pages/e-commerce/landing'));
const ProductPage = lazy(() => import('src/pages/e-commerce/product'));
const CheckoutPage = lazy(() => import('src/pages/e-commerce/checkout'));
const ProductsPage = lazy(() => import('src/pages/e-commerce/products'));
const WishlistPage = lazy(() => import('src/pages/e-commerce/wishlist'));
const OrderCompletedPage = lazy(() => import('src/pages/e-commerce/order-completed'));

// ----------------------------------------------------------------------

export const eCommerceRoutes: RouteObject[] = [
  {
    path: 'e-commerce',
    element: (
      <MainLayout>
        <EcommerceLayout>
          <Outlet />
        </EcommerceLayout>
      </MainLayout>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'order-completed', element: <OrderCompletedPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
      { path: 'compare', element: <ComparePage /> },
      {
        path: 'products',
        children: [
          { index: true, element: <ProductsPage /> },
          { path: 'details', element: <ProductPage /> },
        ],
      },
    ],
  },
];

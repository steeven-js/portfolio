import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  {
    title: 'Personal',
    path: paths.account.personal,
    icon: <Iconify icon="solar:user-rounded-outline" />,
  },
  {
    title: 'Wishlist',
    path: paths.account.wishlist,
    icon: <Iconify icon="solar:heart-outline" />,
  },
  {
    title: 'Vouchers',
    path: paths.account.vouchers,
    icon: <Iconify icon="carbon:cut-out" />,
  },
  {
    title: 'Orders',
    path: paths.account.orders,
    icon: <Iconify icon="solar:cart-3-outline" />,
  },
  {
    title: 'Payment',
    path: paths.account.payment,
    icon: <Iconify icon="solar:card-outline" />,
  },
];

import type { NavBasicProps } from 'src/components/nav-basic';
import type { NavSectionProps } from 'src/components/nav-section';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const NAV_BASIC_ITEMS: NavBasicProps['data'] = [
  {
    title: 'Home',
    path: '#',
    icon: <Iconify icon="solar:home-angle-linear" />,
  },
  {
    title: 'Page',
    path: '/components',
    caption: 'The standard Lorem Ipsum passage, used since the 1500s.',
    icon: <Iconify icon="carbon:chart-average" />,
    info: <Label color="info">+2</Label>,
    children: [
      {
        title: 'What is Lorem Ipsum?',
        path: '#',
        icon: <Iconify icon="carbon:blog" />,
        info: '+3',
        children: [
          { title: 'Page 1.1', path: '#' },
          { title: 'Page 1.2', path: '#', disabled: true },
        ],
      },
      {
        title: 'Page 2',
        path: '/components',
        icon: <Iconify icon="solar:users-group-rounded-linear" />,
        caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        children: [
          { title: 'Page 2.1', path: '#' },
          { title: 'Page 2.2', path: '#' },
          {
            title: 'Page 2.3',
            path: '/components/navigation-bar',
            children: [
              { title: 'Page 2.3.1', path: '#' },
              { title: 'Page 2.3.2', path: '/components/navigation-bar' },
              { title: 'Page 2.3.3', path: '#' },
            ],
          },
        ],
      },
      {
        title: 'Page 3',
        path: '#',
        icon: <Iconify icon="solar:mailbox-linear" />,
      },
    ],
  },
  {
    title: 'Blog',
    path: '#',
    icon: <Iconify icon="solar:album-bold" />,
    children: [
      {
        title: 'Post 1',
        path: '#',
        icon: <Iconify icon="solar:cup-star-linear" />,
        caption: 'This is the caption',
        info: '+3',
      },
      {
        title: 'Post 2',
        path: '#',
        icon: <Iconify icon="solar:calendar-date-linear" />,
      },
      {
        title: 'Post 3',
        path: '#',
        icon: <Iconify icon="solar:mailbox-linear" />,
      },
    ],
  },
  {
    title: 'Contact',
    path: '#',
    icon: <Iconify icon="solar:clapperboard-edit-linear" />,
    disabled: true,
  },
  {
    title: 'External',
    path: 'https://www.google.com/',
    icon: <Iconify icon="solar:cpu-bolt-linear" />,
  },
];

// ----------------------------------------------------------------------

/**
 * Input nav data is an array of navigation section items used to define the structure and content of a navigation bar.
 * Each section contains a subheader and an array of items, which can include nested children items.
 *
 * Each item can have the following properties:
 * - `title`: The title of the navigation item.
 * - `path`: The URL path the item links to.
 * - `icon`: An optional icon component to display alongside the title.
 * - `info`: Optional additional information to display, such as a label.
 * - `allowedRoles`: An optional array of roles that are allowed to see the item.
 * - `caption`: An optional caption to display below the title.
 * - `children`: An optional array of nested navigation items.
 * - `disabled`: An optional boolean to disable the item.
 */

/**
 * Permissions can be set for each item by using the `allowedRoles` property.
 * - If `allowedRoles` is not set (default), all roles can see the item.
 * - If `allowedRoles` is an empty array `[]`, no one can see the item.
 * - If `allowedRoles` contains specific roles, only those roles can see the item.
 *
 * Examples:
 * - `allowedRoles: ['user']` - only users with the 'user' role can see this item.
 * - `allowedRoles: ['admin']` - only users with the 'admin' role can see this item.
 * - `allowedRoles: ['admin', 'manager']` - only users with the 'admin' or 'manager' roles can see this item.
 *
 * Combine with the `checkPermissions` prop to build conditional expressions.
 * Example usage can be found in: src/sections/_examples/navigation-bar-view/nav-vertical.{jsx | tsx}
 */

export const NAV_SECTION_ITEMS: NavSectionProps['data'] = [
  {
    subheader: 'Marketing',
    items: [
      {
        title: 'Landing',
        path: '#',
        icon: <Iconify icon="solar:home-angle-linear" />,
        info: <Label color="error">+2 </Label>,
      },
      {
        title: 'Services',
        path: '#',
        icon: <Iconify icon="carbon:chart-average" />,
        allowedRoles: ['admin'],
        caption: 'Only admin can see this item.',
      },
      {
        title: 'Blog',
        path: '#',
        icon: <Iconify icon="carbon:blog" />,
        info: <Label color="info">+3 </Label>,
        allowedRoles: ['admin', 'manager'],
        caption: 'Only admin / manager can see this item.',
        children: [
          {
            title: 'Item 1',
            path: '#',
            caption: 'Display caption',
            info: '+2',
          },
          { title: 'Item 2', path: '#' },
        ],
      },
    ],
  },
  {
    subheader: 'Travel',
    items: [
      {
        title: 'About',
        path: '#',
        icon: <Iconify icon="solar:users-group-rounded-linear" />,
        info: '+4',
      },
      {
        title: 'Contact',
        path: '#',
        icon: <Iconify icon="solar:phone-calling-linear" />,
        disabled: true,
      },
      {
        title: 'Level',
        path: '/components',
        icon: <Iconify icon="solar:hamburger-menu-linear" />,
        children: [
          {
            title: 'Level 2a',
            path: '/components',
            icon: <Iconify icon="solar:chat-round-call-linear" />,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            children: [
              { title: 'Level 3a', path: '#' },
              {
                title: 'Level 3b',
                path: '/components/navigation-bar',
                children: [
                  { title: 'Level 4a', path: '#', disabled: true },
                  { title: 'Level 4b', path: '/components/navigation-bar' },
                ],
              },
              { title: 'Level 3c', path: '#' },
            ],
          },
          {
            title: 'Level 2b',
            path: '#',
            icon: <Iconify icon="solar:mailbox-linear" />,
          },
          {
            title: 'Level 2c',
            path: '#',
            icon: <Iconify icon="solar:calendar-date-linear" />,
          },
        ],
      },
      {
        title: 'More',
        path: '#',
        icon: <Iconify icon="solar:menu-dots-bold" />,
      },
    ],
  },
];

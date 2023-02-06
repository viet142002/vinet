import { Home, Notification, Profile, Message } from '~/Pages';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/notification',
    component: Notification,
  },
  {
    path: '/profile',
    component: Profile,
    layout: 'OnlyFooterLayout',
  },
  {
    path: '/message',
    component: Message,
    layout: 'OnlyFooterLayout',
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

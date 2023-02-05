import Home from '~/Pages/Home';
import Notifycation from '~/Pages/Notification';
import Profile from '~/Pages/Profile';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/notifycation',
    component: Notifycation,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

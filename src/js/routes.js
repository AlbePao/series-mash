import HomePage from '../pages/HomePage.js';
import EpisodesPage from '../pages/EpisodesPage.js';
import MyShowsPage from '../pages/MyShowsPage.js';
import ProfilePage from '../pages/ProfilePage.js';

const routes = [
  {
    path: '/home/',
    component: HomePage,
  },
  {
    path: '/episodes/',
    component: EpisodesPage,
  },
  {
    path: '/my-shows/',
    component: MyShowsPage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
];

export default routes;

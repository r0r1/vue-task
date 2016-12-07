import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Setting from './components/settings/Setting';
// User
import User from './components/users/User';
import UserList from './components/users/UserList';
import UserNew from './components/users/UserNew';

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/users',
    component: User,
    children: [
      {
        path: '/list',
        component: UserList,
      },
      {
        path: '/new',
        component: UserNew,
      },
    ],
  },
  {
    path: '/settings',
    component: Setting,
  },
];

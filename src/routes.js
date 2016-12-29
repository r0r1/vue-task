import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Setting from './components/settings/Setting';
// User
import User from './components/users/User';
import UserList from './components/users/UserList';
import UserNew from './components/users/UserNew';
// Task
import Task from './components/tasks/Task';
import TaskList from './components/tasks/TaskList';
import TaskNew from './components/tasks/TaskNew';

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { auth: true },
  },
  {
    path: '/users',
    component: User,
    meta: { auth: true },
    children: [
      {
        path: 'list',
        component: UserList,
        meta: { auth: true },
      },
      {
        path: 'new',
        component: UserNew,
        meta: { auth: true },
      },
    ],
  },
  {
    path: '/tasks',
    component: Task,
    meta: { auth: true },
    children: [
      {
        path: 'list',
        component: TaskList,
        meta: { auth: true },
      },
      {
        path: 'new',
        component: TaskNew,
        meta: { auth: true },
      },
    ],
  },
  {
    path: '/settings',
    component: Setting,
    meta: { auth: true },
  },
];

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
    path: '/',
    component: Dashboard,
  },
  {
    path: '/users',
    component: User,
    children: [
      {
        path: 'list',
        component: UserList,
      },
      {
        path: 'new',
        component: UserNew,
      },
    ],
  },
  {
    path: '/tasks',
    component: Task,
    children: [
      {
        path: 'list',
        component: TaskList,
      },
      {
        path: 'new',
        component: TaskNew,
      },
    ],
  },
  {
    path: '/settings',
    component: Setting,
  },
];

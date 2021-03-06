import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Setting from './components/settings/Setting';
// User
import User from './components/users/User';
import UserList from './components/users/UserList';
import UserNew from './components/users/UserNew';
// Task
import Task from './components/tasks/Task';
import TaskList from './components/tasks/TaskList';
import TaskDetail from './components/tasks/TaskDetail';
import TaskNew from './components/tasks/TaskNew';
import TaskEdit from './components/tasks/TaskEdit';

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/',
    component: Dashboard,
    meta: { auth: true },
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
      {
        path: 'edit/:id',
        name: 'edit_task',
        component: TaskEdit,
        meta: { auth: true },
      },
      {
        path: ':id',
        name: 'detail_task',
        component: TaskDetail,
        meta: { auth: true },
      },
      {
        path: 'delete/:id',
        name: 'delete_task',
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

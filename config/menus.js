export default [
  {
    name: 'Dashboard',
    link: '/',
    icon: 'fa fa-home',
  },
  {
    name: 'Users',
    link: '/users',
    icon: 'fa fa-user',
    child: [
    {
      name: 'New',
      link: '/users/new',
      icon: 'fa fa-circle-o',
    },
    {
      name: 'Lists',
      link: '/users/list',
      icon: 'fa fa-circle-o'
    }
    ]
  },
  {
    name: 'Tasks',
    link: '/tasks',
    icon: 'fa fa-tasks',
    child: [
    {
      name: 'New',
      link: '/tasks/new',
      icon: 'fa fa-circle-o',
    },
    {
      name: 'Lists',
      link: '/tasks/list',
      icon: 'fa fa-circle-o'
    }
    ]
  },
  {
    name: 'Setting',
    link: '/settings',
    icon: 'fa fa-cogs',
  }
]
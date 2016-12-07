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
      link: '/user/new',
      icon: 'fa fa-circle-o',
    },
    {
      name: 'Lists',
      link: '/user/list',
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
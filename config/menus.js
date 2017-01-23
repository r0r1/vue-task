export default [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: 'fa fa-home',
  },
  {
    name: 'Tags',
    link: '/tags',
    icon: 'fa fa-tag',
    child: [
    {
      name: 'New',
      link: '/tags/new',
      icon: 'fa fa-circle-o',
    },
    {
      name: 'Lists',
      link: '/tags/list',
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
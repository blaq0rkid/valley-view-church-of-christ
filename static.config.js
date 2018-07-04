import axios from 'axios'


export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Welcome',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/resources',
        component: 'src/containers/Resources',
      },
      {
        path: '/visit',
        component: 'src/containers/Visit',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}

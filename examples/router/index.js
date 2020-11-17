import Vue from 'vue'
import Router from 'vue-router'
import Example1 from '../pages/example-1/example-1.vue';
import Example2 from '../pages/example-2/example-2.vue';
import Example3 from '../pages/example-3/example-3.vue';
import Example4 from '../pages/example-4/example-4.vue';
import Example5 from '../pages/example-5/example-5.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Example1'
    },
    {
      path: '/Example1',
      component: Example1
    },
    {
      path: '/Example2',
      component: Example2
    },
    {
      path: '/Example3',
      component: Example3
    },
    {
      path: '/Example4',
      component: Example4
    },
    {
      path: '/Example5',
      component: Example5
    }
  ]
})

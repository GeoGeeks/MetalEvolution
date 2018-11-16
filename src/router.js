import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Metal from './components/Metal.vue'

Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
  },
    {
      path:'/Metal',
      name: 'Metal',
      component: Metal
    }
  ]
})

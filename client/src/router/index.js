import Vue from 'vue'
import Router from 'vue-router';

const HomePage = () => import(`../components/HomePage.vue`)
const About = () => import(`../components/about.vue`)
const Cate1 = () => import(`../components/category1.vue`)
const Cate2 = () => import(`../components/category2.vue`)
const Contact = () => import(`../components/contact.vue`)
const ourProduct = () => import(`../components/ourproduct.vue`)
const PDP = () => import(`../components/pdp.vue`)
const admin = () => import(`../components/Admin/login-page.vue`)
const slideBar = () => import(`../components/Admin/Slide-Bar.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/category1',
      name: 'Cate1',
      component: Cate1
    },
    {
      path: '/category2',
      name: 'Cate2',
      component: Cate2
    }, {
      path: '/contactus',
      name: 'contactus',
      component: Contact
    }, {
      path: '/ourproduct',
      name: 'Our Product',
      component: ourProduct
    }, {
      path: '/pdp',
      name: 'PDP',
      component: PDP
    }, {
      path: '/admin',
      name: 'Admin',
      component: admin
    }, {
      path: '/index',
      name: 'index',
      component: slideBar
    }
  ]
})

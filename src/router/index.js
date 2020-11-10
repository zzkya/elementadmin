import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateArticle from '../views/CreateArticle.vue'
import ListArticle from '../views/ListArticle.vue'
import EditArticle from '../views/EditArticle.vue'

Vue.use(VueRouter)

export default new VueRouter({
  
  routes: [
  {
    path: '/',
    name: 'Home',
    redirect:'/articles/index',
  },
  {
    path: '/articles/index',
    name: 'list-article',
    component: ListArticle
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component: CreateArticle
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-article',
    component: EditArticle
  }
]
}) 

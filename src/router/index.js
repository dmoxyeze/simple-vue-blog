import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
//import Home from '../views/Home.vue'
import Home from '../components/home/Home'
import Post from '../components/post/Post'
import CreatePost from '../components/post/CreatePost'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

Vue.use(VueRouter)

const routes = [
    {
      path: "*",
      redirect: "/"
    },
    { 
      path: '/',
      name: 'home',
      component: Home 
    },
    //{ path: '/about', name: 'about', component: About },
    //{ path: '/contactus', name: 'contact', component: ContactUs },

    //post routes
    { 
      path: '/posts', 
      name: 'posts', 
      component: Post 
    },
    { 
      path: '/create-post', 
      name: 'create-post', 
      component: CreatePost,
      meta: {
        requiresAuth: true
      } 
    },
    //{ path: '/viewpost/:post_id', name: 'viewpost', component: ViewPost },
    //{ path: '/category', name: 'category', component: Category },
    //{ path: '/category/:slug', name: 'categoryposts', component: CategoryPosts },
    

    // auth routes
    { 
      path: '/login', 
      name: 'login', 
      component: Login 
    },
    { 
      path : '/register' , 
      name: 'register', 
      component: Register 
    }, 

]
//const router = new VueRouter({ mode: 'history' ,  routes  })
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser
  //console.log(`current user is ${currentUser.uid}`)
  if (requiresAuth && !currentUser) {
    next('/login')
  }else if (requiresAuth && currentUser) {
    next()
  }else{
    next()
  }
});
export default router

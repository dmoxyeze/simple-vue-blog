<template>
  <v-app>
    <nav-bar v-if="!currentUser" class="pb-4"/>
    <admin-header v-if="currentUser" class="pb-4"/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/includes/Header'
import AdminHeader from './components/includes/AdminHeader'
//import Carousel from './components/home/Carousel'
//import Post from './components/post/Post'

export default {
  name: 'App',

  components: {
    'nav-bar': Header,
    'admin-header': AdminHeader
   // 'carousel': Carousel,
    //'posts': Post
  },

  data: () => ({
    //
    
  }),
  computed: {
    ...mapState(['currentUser','count'])
  }
};
</script>

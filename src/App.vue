<template>
  <v-app>
    <nav-bar class="pb-4"/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Header from './components/includes/Header'
//import Carousel from './components/home/Carousel'
//import Post from './components/post/Post'

export default {
  name: 'App',

  components: {
    'nav-bar': Header,
   // 'carousel': Carousel,
    //'posts': Post
  },

  data: () => ({
    //
    
  }),
};
</script>

<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand :to="{ name:'home' }">Blog</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                User
              </template>
              <b-dropdown-item :to="{ name: 'login' }">Login</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'register' }">Sign Up</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown toggle-class="text-decoration-none" no-caret right>
              <template v-slot:button-content>
                <b-icon-bell-fill style="color: #FFF;"></b-icon-bell-fill>
                <span v-if="hiddenPosts.length" class="badge badge-warning">{{ hiddenPosts.length }}</span>
              </template>
                  <b-dropdown-item @click="showNewPosts" v-if="hiddenPosts.length" href="#">You have {{ hiddenPosts.length }} new <span v-if="hiddenPosts.length > 1">posts</span><span v-else>post</span></b-dropdown-item>
                  <b-dropdown-item v-else href="#">No new posts</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>
<script>
const fb =  require("../../firebase/firebaseConfig")
import { mapState } from 'vuex'
export default {
   name: 'Header',
   methods: {
      showNewPosts() {
        let updatedPostArray = this.hiddenPosts.concat(this.posts)
        //clear the hidden post array
        this.$store.commit('setHiddenPosts', null)
        this.$store.commit('setPosts', updatedPostArray)

      },
    },
    computed: {
      ...mapState(['hiddenPosts'])
    } 
}
</script>
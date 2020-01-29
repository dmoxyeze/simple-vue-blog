<template>
        <div class="container">
            <b-jumbotron>
                <template v-slot:header>Blog</template>

                <template v-slot:lead>
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
                featured content or information.
                </template>

                <hr class="my-4">

                <p>
                It uses utility classes for typography and spacing to space content out within the larger
                container.
                </p>

                <b-button variant="primary" :to="{ name: 'posts' }" class="text-white">Explore</b-button>
            </b-jumbotron>
            <recent-posts></recent-posts>
        </div>
</template>
<script>
import Post from '../post/Post'
import { mapState } from 'vuex'
export default {
    name: 'Home',
    components: {
        'recent-posts': Post
    },
    data: () => {
        return {

        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        }
    },
    computed: {
        ...mapState(['currentUser','count'])
    }
}
</script>
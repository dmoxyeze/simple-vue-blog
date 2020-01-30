<template>
    <div class="container">
        
        <div class="row" v-if="posts.length">
            <div class="col-md-6" v-for="post in posts" :key="post.id">
                <b-card
                    :title="post.title"
                    :img-src=" post.image "
                    img-alt="Image"
                    img-top
                    tag="article"
                    style=""
                    class="mb-2"
                >
                    <b-card-text>
                    {{ post.content | trimLength  }}
                    </b-card-text>
                    <div class="card-footer">
                        {{ post.createdOn | formatDate }}
                    </div>

                    <b-button href="#" variant="primary" class="text-white stretched-link">read</b-button>
                </b-card>
            </div>
        </div>
        <div class="mt-3">
            <h6 class="text-center">Center alignment</h6>
            <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'
export default {
    name: 'Post',
    data: function (){
        return{
            rows: 100,
            currentPage: 1
        }
    },
    filters: {
        formatDate(val) {
        if (!val) { return '-' }
        let date = val.toDate(),
        dt = moment(date).fromNow(),
        x = dt.charAt(0).toUpperCase() + 
           dt.slice(1); 
        return x
    },
    trimLength(val) {
        if (val.length < 200) {
            return val
        }
        return `${val.substring(0, 200)}...`
    }
    },
    computed: {
        ...mapState(['currentUser', 'userProfile','posts'])
    }
}
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // This rule allows anyone on the internet to view, edit, and delete
    // all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // your app will lose access to your Firestore database
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2020, 2, 27);
    }
  }
}

*/
</script>
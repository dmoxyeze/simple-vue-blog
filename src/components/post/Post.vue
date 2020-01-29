<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <b-card
                    title="Post Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style=""
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary" class="text-white stretched-link">read</b-button>
                </b-card>
            </div>
            <div class="col-md-6">
                <b-card
                    title="Post Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style=""
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary" class="text-white stretched-link">read</b-button>
                </b-card>
            </div>
            <div class="col-md-6">
                <b-card
                    title="Post Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style=""
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary" class="text-white stretched-link">Go somewhere</b-button>
                </b-card>
            </div>
            <div class="col-md-6">
                <b-card
                    title="Post Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style=""
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary" class="text-white stretched-link">Go somewhere</b-button>
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
export default {
    name: 'Post',
    data: function (){
        return{
            rows: 100,
            currentPage: 1
        }
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
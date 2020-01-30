<template>
    <div class="container">
        <section id="forms" class="text-center mt-5">
            <!--<h5 class="my-5">Elegant forms </h5>-->
            <!--Grid row-->
            <div class="row mt-5 text-left justify-content-md-center">

                <!--Grid column-->
                <div class="col-lg-6 col-md-5 mt-5">

                    <!--Section: Live preview-->
                    <section class="form-dark">

                        <!--Form without header-->
                        <div class="card card-image" style="background-image: url('')">
                            <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">

                                <!--Header-->
                                <div class="text-center">
                                    <h3 class="text-dark mb-5 mt-4 font-weight-bold">
                                        <strong>Make</strong>
                                        <a class="blue-text font-weight-bold">
                                            <strong> Post</strong>
                                        </a>
                                    </h3>
                                </div>
                                <form @submit.prevent id="post-form" enctype="multipart/form-data">
                                    <!--Body-->
                                    <h6 class="text-danger text-center">{{ message }}</h6>
                                    <div class="md-form">
                                        <input type="text" id="post-title" class="form-control white-text" placeholder="post title" name="post_title" v-model="post_title">
                                        <label for="post-title" class="white-text">Post Title</label>
                                    </div>

                                    <div class="md-form pb-3">
                                        <input type="file" id="post-image" class="form-control white-text" name="image" ref="post_image" @change="onChangeFileUpload">
                                        <label for="post-image" class="white-text">Post Image</label>
                                    </div>
                                    <div class="md-form pb-3">
                                        <textarea name="post-text" id="post-text" class="form-control" v-model="post_text"></textarea>
                                        <label for="post-text" class="white-text">Post Text</label>
                                    </div>

                                    <!--Grid row-->
                                    <div class="row d-flex align-items-center mb-4">

                                        <!--Grid column-->
                                        <div class="text-center mb-3 col-md-12">
                                            <button @click='createPost' class="btn btn-primary btn-block btn-rounded z-depth-1 waves-effect waves-light" name="submit">Submit</button>
                                        </div>
                                        <!--Grid column-->
                                    </div>
                            </form>

                            </div>
                        </div>
                        <!--/Form without header-->

                    </section>
                    <!--Section: Live preview-->
                </div>
                <!--Grid column-->

            </div>
            <!--Grid row-->
        </section>
    </div>
</template>
<script>
import { mapState } from 'vuex'
const fb = require("../../firebase/firebaseConfig")
import axios from 'axios'
export default {
    name: 'CreatePost',
    data() {
        return {
            post_title: "",
            post_text: "",
            post_image: "",
            message: ""
        }
    },
    methods: {
        onChangeFileUpload(){
            const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"],
            file = this.$refs.post_image.files[0];
            this.post_image = file;
            if (!allowedTypes.includes(file.type)) {
                this.message = "You selected the wrong file type!!"
            }
            if (file.size > 5000000) {
                this.message = "The image size should not exceed 5mb"
            }
            //console.log(`image is ${this.post_image.name}`);
      },

      createPost() {
      //alert("here");
      //var formData = new FormData();
        var image = this.post_image;
        let insertRef
        fb.postsCollection.add({
                createdOn: new Date(),
                title: this.post_title,
                content: this.post_text,
                image: "",
                userId: this.currentUser.uid,
                userName: this.userProfile.name,
                comments: 0
            }).then(ref => {
                this.post_text = '';
                this.post_title = '';
                this.post_image = '';
                console.log("Document written with ID: ", ref.id);
                insertRef = ref.id;
            }).catch(err => {
                console.log(err)
            })
      //formData.append('title', this.post_title);
      //formData.append('post', this.post_text);
      //formData.append('image', this.post_image);
        
        var nameArray = image.name.split("."),
        extension = nameArray[nameArray.length - 1],
        new_file_name = Date.now() + "." + extension;
        // Create file metadata including the content type
        var metadata = {
        contentType: 'image/jpeg',
        size: image.size,
        name: new_file_name
        };
        //points to the root reference
        var storageRef = fb.storage().ref();
        //points to images
        //var imagesRef = storageRef.child('uploads')
        //var spaceRef = imagesRef.child(new_file_name)
        //full path to file
        //var path = spaceRef.fullPath
        // Upload file and metadata to the object 'images/mountains.jpg'
        //var uploadTask = spaceRef.put(image, metadata);
        var uploadTask = storageRef.child('uploads/' + new_file_name).put(image, metadata);
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(fb.storage.TaskEvent.STATE_CHANGED,function(snapshot){
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case fb.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case fb.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
        }, function(error) {

        }, function(){
            var imageUrl
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL); 
                var docRef = fb.postsCollection.doc(insertRef);
                docRef.update({
                    image : downloadURL
                });           
            });
            console.log("yes")
      }
      )
    },
    },
    computed: {
        ...mapState(['currentUser','userProfile'])
    }
}
</script>
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
                                <form @submit.prevent="createPost" id="post-form" enctype="multipart/form-data">
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
                                            <button type="submit" class="btn btn-primary btn-block btn-rounded z-depth-1 waves-effect waves-light" name="login">Submit</button>
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
            console.log(`image is ${this.post_image.name}`);
      },

      async createPost() {
      //alert("here");
      var formData = new FormData();
      formData.append('title', this.post_title);
      formData.append('post', this.post_text);
      formData.append('image', this.post_image);
        try{
            await axios.post('http://localhost:4000/api/createpost', formData);
        }
        catch(error) {
            console.log(error);
            this.message = error.response.data.error
        }
      }
    },
}
</script>
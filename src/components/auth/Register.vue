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
                                        <strong>SIGN</strong>
                                        <a class="blue-text font-weight-bold">
                                            <strong> UP</strong>
                                        </a>
                                    </h3>
                                    <h6 class="text-danger" v-if="errorMessage">{{ errorMessage }}</h6>
                                </div>
                                <form @submit.prevent>
                                    <!--Body-->
                                    <div class="md-form">
                                        <input v-model.trim="name" type="text" id="Form-name" class="form-control white-text" placeholder="Your Full Name" name="name">
                                        <label for="Form-name" class="white-text">Your Name</label>
                                    </div>
                                    <div class="md-form">
                                        <input v-model.trim="phone" type="text" id="Form-phone" class="form-control white-text" placeholder="Your Phone Number" name="phone">
                                        <label for="Form-phone" class="white-text">Your Phone Number</label>
                                    </div>
                                    <div class="md-form">
                                        <input v-model.trim="email" type="text" id="Form-email5" class="form-control white-text" placeholder="Your Email" name="email">
                                        <label for="Form-email5" class="white-text">Your email</label>
                                    </div>

                                    <div class="md-form">
                                          <input v-model.trim='password' type="password" class="form-control" id="inputPassword" placeholder="Password">
                                          <label for="inputPassword" class="">Password</label>
                                    </div>
                                    <transition name="fade">
                                        <div  v-if="loading" class="d-flex justify-content-center">
                                          <div class="spinner-border mb-3 text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                          </div>
                                        </div>
                                    </transition>

                                    <!--Grid row-->
                                    <div class="row d-flex align-items-center mb-4">

                                        <!--Grid column-->
                                        <div class="text-center mb-3 col-md-12">
                                            <button @click='signup' class="btn btn-primary btn-block btn-rounded z-depth-1 waves-effect waves-light" name="login">Sign Up</button>
                                        </div>
                                        <!--Grid column-->
                                    </div>
                            </form>
                                <div class="row d-flex">
                                <!--Grid row-->
                                    <div class="col-md-6 col-xs-12">
                                        <p class="font-small white-text d-flex justify-content-start">
                                            <a href="" class="blue-text ml-1 font-weight-bold"> Forgot Password</a>
                                        </p>
                                    </div>
                                    <!--Grid column-->
                                    <div class="col-md-6 col-xs-12">
                                        <p class="font-small white-text d-flex justify-content-end">
                                            <router-link :to="{ name: 'login' }" class="blue-text ml-1 font-weight-bold">Registered? Sign IN</router-link>
                                        </p>
                                    </div>
                                <!--Grid column-->
                                </div>

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
const fb = require('../../firebase/firebaseConfig')
export default {
    name: 'Register',
    data: () => {
        return {
            name: "",
            email: "",
            password: "",
            phone: "",
            loading: false,
            errorMessage: ""
        }
    },
    methods: {
        signup() {
            this.loading = true;
            fb.auth.createUserWithEmailAndPassword(this.email, this.password).then(user => {
                console.log(user.user)

                this.$store.commit('setCurrentUser', user.user)

                // create user obj
                fb.usersCollection.doc(user.user.uid).set({
                    name: this.name,
                    phone: this.phone
                }).then(() => {
                    this.$store.dispatch('fetchUserProfile')
                    this.$router.push('/create-post')
                }).catch(err => {
                    console.log(err)
                })
            }).catch(error => {
                this.loading = false;
                console.log(error.code)
                this.errorMessage = error.message;
            })
        }
    }
}
</script>
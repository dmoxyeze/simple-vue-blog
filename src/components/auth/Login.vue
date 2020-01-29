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
                                            <strong> IN</strong>
                                        </a>
                                    </h3>
                                    <h6 class="text-danger" v-if="errorMessage">{{ errorMessage }}</h6>
                                </div>
                                <form @submit.prevent>
                                    <!--Body-->
                                    <div class="md-form">
                                        <input v-model.trim="loginForm.email" type="text" id="Form-email5" class="form-control white-text" placeholder="Your Email" name="email">
                                        <label for="Form-email5" class="white-text">Your email</label>
                                    </div>

                                    <div class="md-form pb-3">
                                        <input v-model.trim="loginForm.password" type="password" id="Form-pass5" class="form-control white-text" name="password">
                                        <label for="Form-pass5" class="white-text">Your password</label>
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
                                            <button @click="login" class="btn btn-primary btn-block btn-rounded z-depth-1 waves-effect waves-light" name="login">Sign in</button>
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
                                            <router-link :to="{ name: 'register' }" class='blue-text ml-1 font-weight-bold'>Not Registered? Sign Up </router-link>
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
import { mapState } from 'vuex'
export default {
    name: 'Login',
    data: () => {
        return {
            loginForm:{
                email: "",
                password: ""
            },
            loading: false,
            errorMessage: ""
        }
    },
    methods: {
        login() {
            this.loading = true;
            fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
                console.log(`current user's ID is ${user.user.uid}`)
                this.$store.commit('setCurrentUser', user.user)
                this.$store.dispatch('fetchUserProfile')
                this.$router.push('/create-post')
            }).catch(error => {
                this.loading = false;
                console.log(error)
                this.errorMessage = error.message;
            });
        },
    },
    computed: {
        ...mapState({
            person: state => state.userProfile
        })
    }
}
</script>
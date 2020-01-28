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
                                </div>
                                <form action="" method="post">
                                    <!--Body-->
                                    <div class="md-form">
                                        <input type="text" id="Form-email5" class="form-control white-text" placeholder="Your Email" name="email">
                                        <label for="Form-email5" class="white-text">Your email</label>
                                    </div>

                                    <div class="md-form pb-3">
                                        <input type="password" id="Form-pass5" class="form-control white-text" name="password">
                                        <label for="Form-pass5" class="white-text">Your password</label>
                                    </div>

                                    <!--Grid row-->
                                    <div class="row d-flex align-items-center mb-4">

                                        <!--Grid column-->
                                        <div class="text-center mb-3 col-md-12">
                                            <button type="submit" class="btn btn-primary btn-block btn-rounded z-depth-1 waves-effect waves-light" name="login">Sign Up</button>
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
                                            <a :to="{ name: 'login' }" class="blue-text ml-1 font-weight-bold"> Registered? Sign IN</a>
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
export default {
    name: 'Register'
}
</script>
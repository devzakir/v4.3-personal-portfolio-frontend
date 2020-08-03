<template>
    <section class="section">
        <div class="container">
            <!-- <div @click="showLogin" v-if="!auth.loggedIn && !showLoginForm" class="p-3 px-4 rounded mb-3 bg-danger border text-white">
                If you have an account already. Click here to login.
            </div>
            <div class="row mb-5" v-if="!auth.loggedIn && showLoginForm">
                <div class="col-6 offset-3">
                    <login />
                </div>
            </div> -->
            <div class="alert alert-primary mb-5">
                <strong>IMPORTANT</strong>
                <hr>
                নিচের BILLING DETAILS সেকশনে আপনার নাম, মোবাইল নম্বর, ইমেইল এড্রেস এবং পাসওয়ার্ড (প্রযোজ্য ক্ষেত্রে) সঠিকভাবে প্রদান করুন। তারপর পেইজের একদম নিচে PLACE ORDER বাটনে ক্লিক করে পরবর্তী পেইজে নির্দেশনা অনুযায়ী পেমেন্ট সম্পন্ন করুন। ফ্রি কোর্সের ক্ষেত্রে পে করতে হবে না; সেক্ষেত্রে BILLING DETAILS পূরণের পর PLACE ORDER বাটনে ক্লিক করলেই আপনার একাউন্টে কোর্স যুক্ত হয়ে যাবে।
                যেকোনো প্রশ্ন বা দরকারে আমাদের ইমেইল করুন - info@zakirhossen.com এই এড্রেসে।
            </div>

            <form action="" @submit.prevent="purchase">
                <div class="row">
                    <div class="col-6" v-if="!auth.loggedIn">
                        <div class="card">
                            <b-tabs pills lazy card start content-class="mt-3">
                                <b-tab title="Registration" active>
                                    <form @submit.prevent="register">
                                        <div class="form-group">
                                            <label for=""> Full Name </label>
                                            <input type="text" v-model="registerForm.name" :class="{ 'is-invalid': registerForm.errors.has('name') }" class="form-control" name="name" placeholder="enter name">
                                            <has-error :form="registerForm" field="name"></has-error>
                                        </div>
                                        <div class="form-group">
                                            <label for=""> Your Email </label>
                                            <input type="email" v-model="registerForm.email" :class="{ 'is-invalid': registerForm.errors.has('email') }" class="form-control" name="email" placeholder="enter email">
                                            <has-error :form="registerForm" field="email"></has-error>
                                        </div>
                                        <div class="form-group">
                                            <label for=""> Your Password </label>
                                            <input type="password" v-model="registerForm.password" :class="{ 'is-invalid': registerForm.errors.has('password') }" class="form-control" name="password" placeholder="enter password">
                                            <has-error :form="registerForm" field="password"></has-error>
                                        </div>
                                        <div class="form-group pt-3 d-flex justify-content-lg-between align-items-center">
                                            <button class="btn btn-success px-5" type="submit">Register Now</button>
                                        </div>
                                    </form>
                                </b-tab>
                                <b-tab title="Account Login">
                                    <form @submit.prevent="login">
                                        <div class="form-group">
                                            <label for=""> User Email </label>
                                            <input type="email" v-model="loginForm.email" :class="{ 'is-invalid': loginForm.errors.has('email') }" class="form-control" name="email" placeholder="enter email">
                                            <has-error :form="loginForm" field="email"></has-error>
                                        </div>
                                        <div class="form-group">
                                            <label for=""> User Password </label>
                                            <input type="password" v-model="loginForm.password" :class="{ 'is-invalid': loginForm.errors.has('password') }" class="form-control" name="password" placeholder="enter password">
                                            <has-error :form="loginForm" field="password"></has-error>
                                        </div>
                                        <div class="form-group pt-3 d-flex justify-content-lg-between align-items-center">
                                            <button class="btn btn-success px-5" type="submit">Login Now</button>
                                        </div>
                                    </form>
                                </b-tab>
                            </b-tabs>
                        </div>
                        <!-- <div class="card">
                            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                                <h5 class="mb-0">Account Information</h5>
                                <a href="#" @click="showLoginForm" class="btn btn-light">Login Here</a>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for=""> Name </label>
                                    <input type="text" v-model="account.name" :class="{ 'is-invalid': account.errors.has('name') }" class="form-control" name="" placeholder="name">
                                    <has-error :form="account" field="name"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for=""> Email </label>
                                    <input type="email" v-model="account.email" :class="{ 'is-invalid': account.errors.has('email') }" class="form-control" name="email" placeholder="email">
                                    <has-error :form="account" field="email"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for=""> Phone </label>
                                    <input type="text" v-model="account.phone" :class="{ 'is-invalid': account.errors.has('phone') }" class="form-control" name="phone" placeholder="phone">
                                    <has-error :form="account" field="phone"></has-error>
                                </div>
                                <div class="form-group" v-if="!auth.loggedIn">
                                    <label for=""> Password </label>
                                    <input type="password" v-model="account.password" :class="{ 'is-invalid': account.errors.has('password') }" class="form-control" name="password" placeholder="password">
                                    <has-error :form="account" field="password"></has-error>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div :class="auth.loggedIn ? 'col-12' : 'col-6'">
                        <div class="row">
                            <div :class="auth.loggedIn ? 'col-12 col-lg-6 col-md-6' : 'col-12'">
                                <div class="card mb-3">
                                    <div class="card-header bg-primary text-white">
                                        Order Summery
                                    </div>
                                    <div class="card-body">
                                        <table class="table table-borderless">
                                            <tbody>
                                                <tr v-for="item in cartItems" :key="item.id">
                                                    <td class="p-0"> {{ item.product.title }} </td>
                                                    <td class="p-0 text-right"> ৳{{ item.product.price }} </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div :class="auth.loggedIn ? 'col-12 col-lg-6 col-md-6' : 'col-12'">
                                <div class="card mb-3">
                                    <div class="card-header bg-primary text-white">
                                        Payment Gateway
                                    </div>
                                    <div class="card-body d-flex justify-content-between">
                                        <div class="form-group mb-0 d-flex align-items-center">
                                            <input type="radio" class="mr-2" name="payment" id="payment" checked>
                                            <label for="payment" style="max-width: 100px">
                                                <img src="~static/images/bkash.png" class="img-fluid" alt="">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="checkout mt-4">
                    <div class="form-group mb-2">
                        <div class="custom-control custom-checkbox" >
                            <input type="checkbox" v-model="aggree" class="mr-2 custom-control-input" id="aggree">
                            <label class="custom-control-label" for="aggree">
                                I have read and agree to the website
                                <nuxt-link :to="{name: 'terms-and-condition'}">terms and conditions *</nuxt-link>
                            </label>
                        </div>
                        <!-- <input type="checkbox" v-model="accept" class="mr-2" name="accept" id="accept">
                        <label for="accept">
                            I have read and agree to the website
                            <nuxt-link :to="{name: 'terms-and-condition'}">terms and conditions *</nuxt-link>
                        </label> -->
                    </div>
                    <button :disabled="!auth.loggedIn || !aggree" type="submit" class="btn btn-success w-100 py-3 rounded text-uppercase">Place Order</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import Login from '@/components/auth/Login'

export default {
    head() {
        return {
            title: 'Zakir Hossen Personal Portfolio',
            meta: [
                // { hid: 'description', name: 'description', content: 'A passionate Web Developer from Dhaka, Bangladesh. I prefer to learn consistently to expand my knowledge. I am working with Laravel, Vue.js & Nuxt.js.' },
                // { hid: 'og:type', property: 'og:type', content: "website" },
                // { hid: 'og:title', name: 'og:title', content: 'A passionate Web Developer from Dhaka, Bangladesh. I prefer to learn consistently to expand my knowledge. I am working with Laravel, Vue.js & Nuxt.js.' },
                // { hid: 'og:description', name: 'og:description', content: 'A passionate Web Developer from Dhaka, Bangladesh. I prefer to learn consistently to expand my knowledge. I am working with Laravel, Vue.js & Nuxt.js.' },
                // { hid: 'og:image', property: 'og:image', content: "/images/product.jpg" },
            ],
            link: [
                { rel: 'stylesheet', href: 'https://rawgit.com/lykmapipo/themify-icons/master/css/themify-icons.css' }
            ],
        }
    },
    components: {
        'login': Login,
    },
    data(){
        return {
            showLoginForm: false,
            aggree: false,
            // account: this.$vform({
            //     name: '',
            //     email: '',
            //     phone: '',
            //     accept: false,
            //     payment: '',
            //     course_id: null,
            // }),
            loginForm: this.$vform({
                email: '',
                password: '',
            }),
            registerForm: this.$vform({
                name: '',
                email: '',
                password: '',
            }),
            purchased: true,
        }
    },
    methods: {
        async purchase(){
            try {
                let { data } = await this.$axios.post(process.env.API_URL + '/purchase', { course_id: this.cartItems[0].product.id });

                this.$toast.success("Success! Course Purchased Successfully!");
            } catch (error) {
                console.log(error);
            }
        },
        async login(){
            try {
                let { data } = await this.loginForm.post( process.env.API_URL + '/auth/login');
                let token = data.token;
                await this.$auth.setUserToken(token);

                this.$toast.success("Success! Login Successful!");
            } catch (error) {
                console.log(error);
            }
        },
        async register(){
            try {
                let { data } = await this.registerForm.post(process.env.API_URL + '/auth/register');
                let token = data.token;
                await this.$auth.setUserToken(token);

                this.$toast.success("Success! Registration Successful!");
            } catch (error) {
                console.log(error);
            }
        },
        showLogin(){
            this.showLoginForm = true;

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    },
    mounted(){

    },
    computed: {
        auth(){
            var auth = this.$store.state.auth;
            // if(auth.loggedIn){
            //     this.account.name = auth.user.name;
            //     this.account.email = auth.user.email;
            //     this.account.phone = auth.user.phone;
            // }

            return auth;
        },
        cartItems(){
            return this.$store.getters['cart/getCartProducts'];
        }
    }
}
</script>

<style>
    .stepTitle {
        margin-top: 10px;
    }
    .wizard-icon-circle.checked{
        background-color: #245cd1;
        color: white;
    }
</style>
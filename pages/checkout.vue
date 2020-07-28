<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form-wizard @on-complete="onComplete" @on-error="handleErrorMessage" :start-index="startIndex" title="Processing your order" subtitle="Follow the steps to complete your order." color="#245cd1" finishButtonText="Complete Purchase">
                        <div class="row">
                            <div class="col-12 col-lg-6 offset-lg-3">
                                <div v-if="errorMsg" class="alert alert-danger">{{errorMsg}}</div>
                            </div>
                        </div>
                        <tab-content class="my-5" title="Account Info" icon="ti-user" :before-change="validateAuthentication">
                            <div class="row my-5">
                                <div class="col-6 offset-3">
                                    <div v-if="authentication">
                                        <div class="alert alert-success">You are logged in. You can go to the next step.</div>
                                    </div>
                                    <login v-else />
                                </div>
                            </div>
                        </tab-content>
                        <tab-content class="my-5" title="Billing Info" icon="ti-location-pin" :before-change="validateBilling">
                            <!-- <div class="row" v-if="bilingForm">
                                <div class="col-6 off">
                                    <div>
                                        <div class="alert alert-success">You are logged in. You can go to the next step.</div>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="row">
                                <div class="col-8"> -->
                                    <div class="card">
                                        <div class="card-header bg-primary text-white">
                                            Billing Information
                                        </div>
                                        <div class="card-body">
                                            <form action="">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label for=""> Name </label>
                                                            <input type="text" class="form-control" name="" placeholder="name">
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label for=""> Email </label>
                                                            <input type="text" class="form-control" name="" placeholder="email">
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label for=""> Phone </label>
                                                            <input type="text" class="form-control" name="" placeholder="phone">
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label for=""> Address </label>
                                                            <input type="text" class="form-control" name="" placeholder="address">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <button class="btn btn-primary">Save Billing Info</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                <!-- </div>
                                <div class="col-4">
                                    <div class="card">
                                        <div class="card-header bg-primary text-white">
                                            Cart Overview
                                        </div>
                                        <div class="card-body">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis accusamus consequuntur aperiam, fugiat odio corporis itaque placeat ex debitis dolorem, quis iure maxime. Quam delectus aperiam labore, deleniti molestias odio.
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </tab-content>
                        <tab-content class="my-5" title="Payment Info" icon="ti-money" :before-change="validatePaymentInfo">
                            <div class="card">
                                <div class="card-header bg-primary text-white">
                                    Payment Information
                                </div>
                                <div class="card-body">
                                    <form action="">
                                        <div class="row">
                                            <div class="col-6 offset-3">
                                                <div class="alert alert-success mb-4">
                                                    <p style="font-size: 18px" class="mb-2">Send course fee on this Bkash Number</p>
                                                    <h4>Personal Bkash Number - 016 25 00 00 00</h4>
                                                </div>
                                            </div>
                                            <div class="col-6 offset-3">
                                                <div class="form-group">
                                                    <label for=""> Bkash TrxID </label>
                                                    <input type="text" class="form-control" name="trxid" placeholder="trxid">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </tab-content>
                    </form-wizard>
                </div>
            </div>
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
            errorMsg: null,
            authentication: false,
            bilingForm: true,
            paymentForm: true,
            startIndex: 0,
        }
    },
    methods: {
        handleErrorMessage: function(errorMsg){
            this.errorMsg = errorMsg
        },
        onComplete: function(){
            alert('Yay. Done!');
        },
        validateAuthentication(){
            // console.log('validate authentication');
            if(!this.authentication){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // resolve(true)
                        reject('Login to your account before accessing the billing information');
                    }, 1000)
                })
            }else {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(true)
                    }, 1000)
                })
            }
        },
        validateBilling(){
            // console.log('validate billing');
            if(!this.bilingForm){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                            // resolve(true)
                        reject('complete the billing section before accessing the payment information');
                    }, 1000)
                })
            }else {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(true)
                    }, 1000)
                })
            }
        },
        validatePaymentInfo(){
            // console.log('validate payment info');
            if(!this.paymentForm){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // resolve(true)
                        reject('Fill up the payment information to complete your purchase');
                    }, 1000)
                })
            }else {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(true)
                    }, 1000)
                })
            }
        },
    },
    created(){
        if(this.$auth.loggedIn){
            this.startIndex = 1;
            this.authentication = true;
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
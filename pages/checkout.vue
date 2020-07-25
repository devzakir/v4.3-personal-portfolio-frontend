<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form-wizard @on-complete="onComplete" @on-error="handleErrorMessage" title="Processing your order" subtitle="Follow the steps to complete your order." color="#245cd1" finishButtonText="Complete Purchase">
                        <div class="row">
                            <div class="col-12 col-lg-6 offset-lg-3">
                                <div v-if="errorMsg" class="alert alert-danger">{{errorMsg}}</div>
                            </div>
                        </div>
                        <tab-content title="Account Info" icon="ti-user" :before-change="validateAuthentication">
                                My first tab content
                        </tab-content>
                        <tab-content title="Billing Info" icon="ti-location-pin" :before-change="validateBilling">
                            <div class="row">
                                <div class="col-8">
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
                                                            <input type="text" class="form-control" name="" placeholder="Hello World">
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label for=""> Email </label>
                                                            <input type="text" class="form-control" name="" placeholder="Hello World">
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label for=""> Phone </label>
                                                            <input type="text" class="form-control" name="" placeholder="Hello World">
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label for=""> Address </label>
                                                            <input type="text" class="form-control" name="" placeholder="Hello World">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <button class="btn btn-primary w-100">Purchase Course</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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
                            </div>
                        </tab-content>
                        <tab-content title="Payment Info" icon="ti-money" :before-change="validatePaymentInfo">

                        </tab-content>
                    </form-wizard>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
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
    data(){
        return {
            errorMsg: null,
            authentication: true,
            bilingForm: true,
            paymentForm: true,
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
<template>
    <div class="bg-light">
        <div class="container">
            <div class="row align-items-center" style="min-height: 80vh;">
                <div class="col-lg-6 offset-lg-3">
                    <div class="bg-white p-5 shadow rounded">
                        <h3 class="text-center">Login to your account</h3>
                        <form action="" class="p-5">
                            <div class="alert alert-danger" v-if="loginForm.errors.has('account')">
                                {{ loginForm.errors.errors.account[0] }}
                            </div>
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
                                    <button class="btn btn-success px-5" type="submit">Submit</button>
                                    <nuxt-link :to="{name: 'register'}" class="mt-0 text-secondary">Create an account</nuxt-link>
                                </div>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    auth: 'guest',
    head: {
        title: 'Login',
        meta: [
            // { hid: 'description', name: 'description', content: 'Home page description' }
        ],
        script: [
            // { src: '/head.js' },
        ]
    },
    data(){
        return {
            loginForm: this.$vform({
                email: '',
                password: '',
            }),
        }
    },
    methods: {
        async login(){
            try {
                let { data } = await this.loginForm.post( process.env.API_URL + '/auth/login');
                let token = data.token;

                this.$auth.loginWith('local', {data: this.loginForm });
                // await this.$auth.setUserToken(token);
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {

    },
    mounted(){

    }
}
</script>

<style>

</style>
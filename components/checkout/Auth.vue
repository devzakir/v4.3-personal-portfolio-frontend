<template>
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
</template>

<script>
export default {
    data(){
        return {
            loginForm: this.$vform({
                email: '',
                password: '',
            }),

            registerForm: this.$vform({
                name: '',
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
        },
        async register(){
            try {
                let { data } = await this.registerForm.post(process.env.API_URL + '/auth/register');
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>

<style>

</style>

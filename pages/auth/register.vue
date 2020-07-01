<template>
    <div>
        <div class="container">
            <div class="row align-items-center" style="min-height: 70vh;">
                <div class="col-lg-4 offset-lg-4" >
                    <div class="card">
                        <div class="card-header">
                            Create a new account
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="register">
                                <div class="form-group">
                                    <label for=""> Full Name </label>
                                    <input type="text" v-model="registerForm.name" :class="{ 'is-invalid': registerForm.errors.has('name') }" class="form-control" name="name" placeholder="enter name">
                                    <has-error :form="registerForm" field="name"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for=""> User Email </label>
                                    <input type="email" v-model="registerForm.email" :class="{ 'is-invalid': registerForm.errors.has('email') }" class="form-control" name="email" placeholder="enter email">
                                    <has-error :form="registerForm" field="email"></has-error>
                                </div>
                                <div class="form-group">
                                    <label for=""> User Password </label>
                                    <input type="password" v-model="registerForm.password" :class="{ 'is-invalid': registerForm.errors.has('password') }" class="form-control" name="password" placeholder="enter password">
                                    <has-error :form="registerForm" field="password"></has-error>
                                </div>
                                <div class="form-group text-center">
                                    <button class="btn btn-success" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <nuxt-link :to="{name: 'auth-login'}" class="">Have an account? Access here.</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            registerForm: this.$vform({
                name: '',
                email: '',
                password: '',
            }),
        }
    },
    methods: {
        async register(){
            await this.$axios.post('/login');
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
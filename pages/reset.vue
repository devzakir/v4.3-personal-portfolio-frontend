<template>
    <div>
        <div class="container">
            <div class="row align-items-center" style="min-height: 70vh;">
                <div class="col-lg-4 offset-lg-4" >
                    <div class="card">
                        <div class="card-header">
                            Login
                        </div>
                        <div class="card-body">
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
                                <div class="form-group text-center">
                                    <button class="btn btn-success" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Password Reset',
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
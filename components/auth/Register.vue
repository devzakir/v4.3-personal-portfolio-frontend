<template>
    <div class="bg-white p-5 shadow rounded">
        <h3 class="text-center">Get a free account</h3>
        <form @submit.prevent="register" class="p-5">
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
                <button class="btn btn-success px-5" type="submit">Submit</button>
                <nuxt-link :to="{name: 'login'}" class="mt-0 text-secondary">Login here</nuxt-link>
            </div>
        </form>
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
            try {
                let { data } = await this.registerForm.post(process.env.API_URL + '/auth/register');
                let token = data.token;
                await this.$auth.setUserToken(token);

                if(this.$route.name == 'register'){
                    this.$toast.success("Success! Registration Successful!");
                    this.$router.push({ name: 'account' });
                };
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>

<style>

</style>
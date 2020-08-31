<template>
    <div class="card">
        <div class="card-header bg-primary text-white">
            Settings
        </div>
        <div class="card-body">
            <form action="" method="post" @submit.prevent="updateUser()">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="">Enter your name</label>
                            <input type="text" class="form-control" placeholder="name" v-model="user.name" :class="{ 'is-invalid': user.errors.has('name') }">
                            <has-error :form="user" field="name"></has-error>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="">Enter your email</label>
                            <input type="text" class="form-control" placeholder="email" v-model="user.email" :class="{ 'is-invalid': user.errors.has('email') }">
                            <has-error :form="user" field="email"></has-error>
                        </div>
                    </div>
                    <div class="col-12 mt-4">
                        <h5 class="text-secondary">Update Password</h5>
                        <hr>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="">New password</label>
                            <input type="password" name="new_password" class="form-control" placeholder="new password" v-model="user.new_password" :class="{ 'is-invalid': user.errors.has('new_password') }">
                            <has-error :form="user" field="new_password"></has-error>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="form-group">
                            <label for="">Confirm password</label>
                            <input type="password" name="confirm_password" class="form-control" placeholder="confirm password" v-model="user.confirm_password" :class="{ 'is-invalid': user.errors.has('confirm_password') }">
                            <has-error :form="user" field="confirm_password"></has-error>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success">Update Profile</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    scrollToTop: true,
    head: {
        title: 'Settings Page',
        meta: [
            // { hid: 'description', name: 'description', content: 'Home page description' }
        ],
        script: [
            // { src: '/head.js' },
        ]
    },
    data(){
        return {
            user: this.$vform({
                name: '',
                email: '',
                password: '',
                confirm_password: '',
            }),
        }
    },
    methods: {
        async loadUser(){
            try {
                let { data } = await this.$axios.get(process.env.API_URL+'/auth/me');
                console.log(data);
                this.user.name = data.name;
                this.user.email = data.email;
            } catch (error) {
                console.log(error);
            }
        },
        async updateUser(){
            try {
                let { data }  = await this.$axios.get(process.env.API_URL+'/auth/update');
                console.log(data);

                await this.$auth.fetchUser();
                this.$toast.success('Profile updated successfully');
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted(){
        this.loadUser();
    }
}
</script>

<style>

</style>
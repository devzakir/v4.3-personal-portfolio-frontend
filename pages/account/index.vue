<template>
    <div>
        <div class="card">
            <div class="card-header bg-primary text-white">
                Dashboard
            </div>
            <div class="card-body text-center">
                <h5>Welcome {{ auth.user.name }}!</h5>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-4">
                <div class="px-4 py-3 rounded bg-primary text-white">
                    <h5>0</h5>
                    <p>Courses</p>
                </div>
            </div>
            <div class="col-4">
                <div class="px-4 py-3 rounded bg-success text-white">
                    <h5>0</h5>
                    <p>Lesson Completed</p>
                </div>
            </div>
            <div class="col-4">
                <div class="px-4 py-3 rounded bg-danger text-white">
                    <h5>0</h5>
                    <p>Affiliate Income</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    scrollToTop: true,
    head: {
        title: 'Courses',
        meta: [
            // { hid: 'description', name: 'description', content: 'Home page description' }
        ],
        script: [
            // { src: '/head.js' },
        ]
    },
    data(){
        return {

        }
    },
    methods: {

    },
    computed: {
        auth(){
            return this.$store.state.auth;
        }
    },
    mounted(){

    }
}
</script>

<style>

</style>
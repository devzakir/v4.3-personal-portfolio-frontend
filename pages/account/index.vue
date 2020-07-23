<template>
    <div class="card">
        <div class="card-header bg-primary text-white">
            Dashboard
        </div>
        <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veniam quo ut. Nesciunt libero quidem aspernatur, ipsa veritatis asperiores laboriosam error, unde, optio sequi illo explicabo aliquam delectus architecto ea?
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
        console.log(this.$auth.user);
    }
}
</script>

<style>

</style>
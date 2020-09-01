<template>
    <div class="bg-light">
        <div class="container">
            <div class="row align-items-center" style="min-height: 80vh;">
                <div class="col-lg-6 offset-lg-3">
                    <register />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Register from '@/components/auth/Register';

export default {
    middleware: 'guest',
    head: {
        title: 'Register Page',
        meta: [
            // { hid: 'description', name: 'description', content: 'Home page description' }
        ],
        script: [
            // { src: '/head.js' },
        ]
    },
    components: {
        'register': Register,
    },
    data(){
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    mounted(){

    }
}
</script>

<style>

</style>
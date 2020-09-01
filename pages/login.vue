<template>
    <div class="bg-light">
        <div class="container">
            <div class="row align-items-center" style="min-height: 80vh;">
                <div class="col-lg-6 offset-lg-3">
                    <login />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Login from '@/components/auth/Login'

export default {
    middleware: 'guest',
    head: {
        title: 'Login',
        meta: [
            // { hid: 'description', name: 'description', content: 'Home page description' }
        ],
        script: [
            // { src: '/head.js' },
        ]
    },
    components: {
        'login': Login,
    },
    data(){
        return {

        }
    },
    mounted(){

    }
}
</script>

<style>

</style>
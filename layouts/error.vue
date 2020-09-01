<template>
    <div class="bg-light">
        <div class="container">
            <div class="row align-items-center" style="min-height: 60vh;">
                <div class="col-lg-8 offset-lg-2 text-center">
                    <h3>{{ error.message }}</h3>
                    <div class="buttons">
                        <nuxt-link class="btn btn-primary" :to="{name: 'index'}">Go Home</nuxt-link>
                        <nuxt-link class="btn btn-primary" :to="{name: 'index'}">Access your account</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error'],
}
</script>

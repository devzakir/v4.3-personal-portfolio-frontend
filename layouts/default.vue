<template>
    <div>
        <siteHeader/>
        <nuxt />
        <siteFooter/>
    </div>
</template>

<script>
import siteHeader from '~/components/Header';
import siteFooter from '~/components/Footer';

export default {
    components: {
        siteHeader,
        siteFooter
    }
}
</script>

<style lang="scss">
    @import '~/assets/scss/main.scss';
</style>

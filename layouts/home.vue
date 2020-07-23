<template>
    <div>
        <nuxt />
        <siteFooter/>
    </div>
</template>

<script>
import siteFooter from '~/components/Footer';

export default {
    components: {
        siteFooter
    }
}
</script>

<style lang="scss">
    @import '~/assets/scss/main.scss';
</style>

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
    },
    mounted(){
        let items = JSON.parse(localStorage.getItem('cartProducts'));
        this.$store.commit('cart/SET_CART_PRODUCTS', items);
    }
}
</script>

<style lang="scss">
    @import '~/assets/scss/main.scss';

    .Vue-Toastification__progress-bar {
        opacity: 1 !important;
    }
</style>

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
        if(items.length > 1){
            this.$store.dispatch('cart/setCartProducts', []);
        }else {
            this.$store.dispatch('cart/setCartProducts', items);
        }
    }
}
</script>

<style lang="scss">
    @import '~/assets/scss/main.scss';

    .Vue-Toastification__progress-bar {
        opacity: 1 !important;
    }
</style>

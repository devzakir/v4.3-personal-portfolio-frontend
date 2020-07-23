<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12 heading">
                    <h2> Free Products </h2>
                    <p>Grab websites for free</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4" v-for="product in products" :key="product.id">
                    <product :product="product" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Product from '@/components/product/Product'
export default {
    components: {
        'product': Product,
    },
    data(){
        return {
            products: [],
            next_page: '',
        }
    },
    async asyncData({ $axios }) {
        try {
            const data = await $axios.$get(process.env.API_URL+'/products');
            return { products: data.data, next_page: data.next_page_url }
        }catch(e){
            console.log('error');
        }
    },
    methods: {
    },
    computed(){

    },
    mounted(){

    }
}
</script>

<style>

</style>

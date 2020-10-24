<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12 heading">
                    <h2> Free Templates </h2>
                    <p>Grab websites for free</p>
                </div>
            </div>
            <div class="row" v-if="products.length">
                <div class="col-12 col-md-6 col-lg-4" v-for="product in products" :key="product.id">
                    <product :product="product" />
                </div>
            </div>
            <div class="row" v-else-if="!products.length && apiCallLoaded">
                <div class="col-12 py-4 text-center">
                    <h5 class="mb-3">No products found</h5>
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-12">
                    <h5 class="text-center">Loading ...</h5>
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
            apiCallLoaded: false,
        }
    },
    async asyncData({ $axios }) {
        try {
            const data = await $axios.$get(process.env.API_URL+'/products');
            return { products: data.data, next_page: data.next_page_url, apiCallLoaded: true }
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

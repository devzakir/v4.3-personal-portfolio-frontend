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
                    <div class="box">
                        <div class="image">
                            <img :src="updateImage(product.image)" alt="" class="img-fluid">
                        </div>
                        <div class="info">
                            <div class="title">
                                <nuxt-link :to="{name: 'product-slug', params: {slug: product.slug }}">{{ product.title }}</nuxt-link>
                            </div>
                            <div class="info-footer">
                                <div class="category">
                                    <p>{{ product.category_name }}</p>
                                </div>
                                <div class="hightlight">
                                    <p>{{ product.price }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {},
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
            updateImage(image){
                if(image){
                    return this.$store.getters.updateImageURL(image);
                }
                console.log(updatedImage);
                return updatedImage;
            },
        },
        computed(){

        },
        mounted(){

        }
    }
</script>

<style>

</style>

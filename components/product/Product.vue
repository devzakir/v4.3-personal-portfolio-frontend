<template>
    <div class="box">
        <div class="image">
            <img :src="fixImage(product.image)" alt="" class="img-fluid">
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
                    <p v-if="product.price > 0">{{ product.price }}</p>
                    <p v-else>Free</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['product'],
    methods: {
        fixImage(image){
            if(image){
                return this.$store.getters.fixImageURL(image);
            }
        },
    }
}
</script>

<style>

</style>
<template>
    <div class="box">
        <div class="image">
            <img :src="updateImage(course.image)" alt="" class="img-fluid">
        </div>
        <div class="info">
            <div class="title">
                <nuxt-link :to="{name: 'course-slug', params: {slug: course.slug}}">{{ course.title }}.</nuxt-link>
            </div>
            <div class="info-footer">
                <div class="category">
                    <p class="text-secondary">{{ course.category.name }}</p>
                </div>
                <div class="hightlight">
                    <p class="coming-soon bg-secondary" v-if="course.coming_soon">Coming Soon</p>
                    <p class="price bg-success" v-else> {{ price(course) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['course'],
    methods: {
        updateImage(image){
            return this.$store.getters.updateImageURL(image);
        },
        price(course){
            let price = course.sale_price ? course.sale_price : course.price;
            if(price > 0){
                return '৳ ' + price;
            }else {
                return 'Free';
            }
        }
    }
}
</script>

<style>
.box {
    height: max-content;
}
</style>
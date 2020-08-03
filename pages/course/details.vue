<template>
    <div>
        <breadcrumb name="Course" :slug="course.slug" :title="course.title"/>
        <section class="single-product bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <div class="product-image bg-white">
                            <img :src="updateImage(course.image)" alt="" class="img-fluid">
                        </div>
                        <div class="mt-5">
                            <h3> Description </h3>
                        </div>
                        <div class="description mt-0 bg-white" v-html="course.description">

                        </div>
                        <div class="mt-5" v-if="course.sections && course.sections.length">
                            <h3> Course Module </h3>
                            <module-dropdown v-for="section in course.sections" :key="section.id" :section="section" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="template-box bg-white">
                            <a href="#" class="demo"> <font-awesome-icon :icon="['far', 'eye']" /> Course Overview</a>
                            <button class="btn btn-secondary" type="button" v-if="course.coming_soon">Coming Soon</button>
                            <a href="#" v-else @click.prevent="enrollNow()" class="download">
                                 <font-awesome-icon :icon="['fas', 'cart-plus']" /> Enroll Now
                            </a>
                        </div>
                        <div class="sidebar-box bg-white" v-if="Object.keys(course).length">
                            <h3>Course Summery</h3>
                            <div class="content">
                                <table>
                                    <tr>
                                        <td> Course Category </td>
                                        <td> {{ course.category.name }} </td>
                                    </tr>
                                    <tr>
                                        <td> Total Lessons </td>
                                        <td> {{ course.user_id }} </td>
                                    </tr>
                                    <tr>
                                        <td> Hours of Video </td>
                                        <td> 420+ </td>
                                    </tr>
                                    <tr>
                                        <td> Projects </td>
                                        <td> 12+ </td>
                                    </tr>
                                    <tr>
                                        <td> Downloadable </td>
                                        <td> {{ course.updated_at }} </td>
                                    </tr>
                                    <tr>
                                        <td> License </td>
                                        <td> GNU GPL 2 </td>
                                    </tr>
                                    <tr>
                                        <td> Tags </td>
                                        <td> GNU GPL 2 </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ModuleDropdown from '@/components/course/ModuleDropdown'
import Breadcrumb from '~/components/Breadcrumb';

export default {
    components: {
        'breadcrumb': Breadcrumb,
        'module-dropdown': ModuleDropdown
    },
    async asyncData({$axios, params}){
        let { data } = await $axios.get(process.env.API_URL+'/course/'+params.slug);

        return { course: data }
    },
    data(){
        return {
            course: {},
            // category_id: 2,
            // coming_soon: 0,
            // created_at: "2020-07-23 12:48:59",
            // description: "asdfasdfasfdasdf",
            // id: 1,
            // image: "storage/portfolio/1595508539_.jpeg",
            // price: 1000,
            // sale_price: 8000,
            // slug: "complete-web-design-course-beginner-to-advance-updated",
            // title: "Complete Web Design Course (Beginner to Advance) - updated",
            // updated_at: "2020-07-23 12:48:59",
            // user_id: 1,
            // video: "https://www.youtube.com/watch?v=S6WdBIvVxfg",
        }
    },
    methods: {
        price(value){
            if(value > 0){
                return value;
            }else {
                return 'Free';
            }
        },
        updateImage(image){
            return this.$store.getters.updateImageURL(image);
        },
        enrollNow(){
            // let items = JSON.parse(localStorage.getItem('cartProducts'));
            // this.$store.commit('cart/SET_CART_PRODUCTS', items);

            this.$store.commit('cart/SET_CART_PRODUCTS', []);

            let item = this.course;
            let product = {
                id: item.id,
                title: item.title,
                slug: item.slug,
                price: item.sale_price || item.price,
                image: item.image,
            }
            this.$store.dispatch('cart/addToCart', {
                product: product,
                quantity: 1
            });

            this.$toast.success("I'm a toast!");
            this.$router.push({name: 'checkout'});
        }
    },
    computed: {

    },
    mounted() {

    },
}
</script>

<style>

</style>
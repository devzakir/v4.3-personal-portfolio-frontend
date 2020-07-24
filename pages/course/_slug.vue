<template>
    <div>
        <breadcrumb name="Course" :slug="course.slug" :title="course.title"/>
        <section class="single-product">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <div class="product-image">
                            <img :src="updateImage(course.image)" alt="" class="img-fluid">
                        </div>
                        <div class="description" v-html="course.description">

                        </div>
                    </div>
                    <div class="col-4">
                        <div class="template-box">
                            <a href="#" class="demo"> <font-awesome-icon :icon="['far', 'eye']" /> Course Overview</a>
                            <a href="#" @click.prevent="enrollNow()" class="download">
                                 <font-awesome-icon :icon="['fas', 'cart-plus']" /> Enroll Now
                            </a>
                        </div>
                        <div class="sidebar-box">
                            <h3>Course Summery</h3>
                            <div class="content">
                                <table>
                                    <tr>
                                        <td> Level  </td>
                                        <td> {{ course.category.name }} </td>
                                    </tr>
                                    <tr>
                                        <td> Lessons  </td>
                                        <td> {{ course.user_id }} </td>
                                    </tr>
                                    <tr>
                                        <td> Hours of Video </td>
                                        <td> 420+ </td>
                                    </tr>
                                    <tr>
                                        <td> Projects  </td>
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
import Breadcrumb from '~/components/Breadcrumb';

export default {
    components: {
        'breadcrumb': Breadcrumb
    },
    async asyncData({$axios, params}){
        let { data } = await $axios.get(process.env.API_URL+'/course/'+params.slug);

        return { course: data }
    },
    data(){
        return {
            course: {},
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
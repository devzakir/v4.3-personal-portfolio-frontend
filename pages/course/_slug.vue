<template>
    <div>
        <div class="course-intro bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <h2 class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p class="text-load">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero error cumque perferendis, voluptatum aperiam consequatur labore ab quam sed explicabo nobis perspiciatis officia cupiditate sunt reiciendis, veniam excepturi provident.</p>
                    </div>
                    <div class="col-4 text-right">
                        <h2 class="text-success mb-4">৳ 2000</h2>
                        <a href="#" @click.prevent="enrollNow" class="btn btn-primary py-3 px-5 text-uppercase">Enroll Now</a>
                    </div>
                </div>
                <div class="row mt-4 align-content-stretch">
                    <div class="col-6">
                        <div class="core-metrics rounded shadow-sm bg-white p-3 h-100">
                            <ul class="mb-0">
                                <li class="d-flex align-items-center">
                                    <div class="icon mr-3 text-success"><font-awesome-icon :icon="['fas', 'user-friends']" /> </div>
                                    <div class="content">
                                        <strong> Enrollment: </strong>
                                        <span> 400 Students </span>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <!-- <div class="icon mr-3"><font-awesome-icon :icon="['fas', 'user-clock']" /> </div> -->
                                    <div class="icon mr-3 text-primary"><font-awesome-icon :icon="['fas', 'clock']" /> </div>
                                    <div class="content">
                                        <strong> Duration: </strong>
                                        <span> 120 Hours </span>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="icon mr-3 text-danger"><font-awesome-icon :icon="['fas', 'play-circle']" /> </div>
                                    <div class="content">
                                        <strong> Videos: </strong>
                                        <span> 40 Videos</span>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="icon mr-3 text-info"><font-awesome-icon :icon="['fas', 'lightbulb']" /> </div>
                                    <div class="content">
                                        <strong> Projects: </strong>
                                        <span> 15+ </span>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="icon mr-3 text-warning"><font-awesome-icon :icon="['fas', 'signal']" /> </div>
                                    <div class="content">
                                        <strong> Level: </strong>
                                        <span> Begineer </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="intro-video d-flex">
                            <iframe src="https://player.vimeo.com/video/432220749" width="100%" height="320" frameborder="0" controls allow="autoplay; fullscreen" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="course-description">
            <div class="container">
                <div class="row">
                    <div class="col-8" id="courseContent">
                        <div class="description bg-white p-5 shadow rounded">
                            <div class="content-block mb-5">
                                <h3 class="mb-3">Course Description</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum error corrupti culpa necessitatibus quod. Inventore sint facere sunt quibusdam aliquid, architecto ex? Unde cumque in tempora! Reprehenderit enim laboriosam sunt?</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta aspernatur laboriosam excepturi esse voluptatum ipsum neque aliquid minus aut odit cumque necessitatibus ducimus voluptatem laudantium corporis aliquam, deleniti eaque soluta.</p>
                            </div>
                            <div class="content-block mb-5">
                                <h3>What you will learn?</h3>
                                <ul>
                                    <li>
                                        Lorem ipsum dolor sit amet.
                                    </li>
                                    <li>
                                        Cumque perferendis porro ullam aperiam.
                                    </li>
                                    <li>
                                        Fugiat eveniet ad quidem et.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-white p-5 mt-5 shadow rounded"  v-if="course.sections && course.sections.length">
                            <h3 class="mb-3"> Course Module </h3>
                            <module-dropdown v-for="section in course.sections" :key="section.id" :section="section" :course="course" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="box h-auto py-4 px-4 bg-primary shadow rounded text-white">
                            <h4 class="mb-3 pb-3 border-bottom">This course includes:</h4>
                            <ul class="list-unstyled">
                                <li class="mb-3">
                                    <font-awesome-icon :icon="['fas', 'check-circle']" class="mr-2" />
                                    <span>7 hours on-demand video 7 hours on-demand video</span>
                                </li>
                                <li class="mb-3">
                                    <font-awesome-icon :icon="['fas', 'check-circle']" class="mr-2" />
                                    <span>6 articles</span>
                                </li>
                                <li class="mb-3">
                                    <font-awesome-icon :icon="['fas', 'check-circle']" class="mr-2" />
                                    <span>2 downloadable resources</span>
                                </li>
                                <li class="mb-3">
                                    <font-awesome-icon :icon="['fas', 'check-circle']" class="mr-2" />
                                    <span>Full lifetime access</span>
                                </li>
                                <li class="mb-3">
                                    <font-awesome-icon :icon="['fas', 'check-circle']" class="mr-2" />
                                    <span>Access on mobile and TV</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModuleDropdown from '@/components/course/ModuleDropdown'
import Breadcrumb from '~/components/Breadcrumb';
export default {
    components: {
        'breadcrumb': Breadcrumb,
        'module-dropdown': ModuleDropdown,
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
                product,
                quantity: 1
            });

            this.$toast.success("Course added to cart!");
            this.$router.push({name: 'checkout'});
        }
    },
    computed: {

    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped>
.course-intro {
    padding: 70px 0 220px;
}
.core-metrics {
    ul{
        height: 100%;
        width: 100%;
        align-items: stretch;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        li {
            border-bottom: 1px solid #eee;
            padding: 10px 20px;
            height: 100%;
            .icon {
                width: 50px;
                text-align: center;
                svg, i {
                    font-size: 25px;
                }
            }
            &:last-child {
                border: 0;
            }
        }
    }
}

.course-description {

    .container {
        transform: translateY(-150px);
    }
    .content-block {
        p {
            margin-bottom: 10px;
            font-size: 16px;
            // line-height: 24px;
        }
        ul {
            padding-left: 20px;
            li {
                list-style: disc;
                margin-bottom: 5px;
            }
        }
    }
    .sticky-features {
        position: relative;
        & > .box {
            position: absolute;
            top: 0;
            left: 0;
        }
    }

}

</style>
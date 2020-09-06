<template>
    <div>
        <div class="course-intro bg-light">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-8">
                        <div class="mb-md-3 mb-3 mb-lg-0">
                            <h2 class="title">{{ course.title }}</h2>
                            <p class="text-load">{{ course.short_description }}</p>
                        </div>
                    </div>
                    <div v-if="!purchase" class="col-12 col-md-4 text-md-right">
                        <h2 class="text-success mb-4">{{ price() }}</h2>
                        <a href="#" @click.prevent="enrollNow" class="btn btn-primary py-3 px-5 text-uppercase">Enroll Now</a>
                    </div>
                    <div v-else class="col-12 col-md-4 text-md-right">
                        <nuxt-link :to="{ name: 'watch-course', params:{ course: course.slug } }" class="btn btn-success py-3 px-5 text-uppercase">Go to Course</nuxt-link>
                    </div>
                </div>
                <div class="row mt-4 align-content-stretch">
                    <div class="col-12 col-md-12 col-lg-6">
                        <div class="core-metrics rounded shadow-sm bg-white p-3 h-100">
                            <ul class="mb-0">
                                <li class="d-flex align-items-center">
                                    <div class="icon mr-3 text-success"><font-awesome-icon :icon="['fas', 'user-friends']" /> </div>
                                    <div class="content">
                                        <strong> Enrollment: </strong>
                                        <span> {{ course.enrollment }} Students </span>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <!-- <div class="icon mr-3"><font-awesome-icon :icon="['fas', 'user-clock']" /> </div> -->
                                    <div class="icon mr-3 text-primary"><font-awesome-icon :icon="['fas', 'clock']" /> </div>
                                    <div class="content">
                                        <strong> Duration: </strong>
                                        <span> {{ course.duration }} Hours </span>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="icon mr-3 text-danger"><font-awesome-icon :icon="['fas', 'play-circle']" /> </div>
                                    <div class="content">
                                        <strong> Videos: </strong>
                                        <span> {{ course.videos }} Videos</span>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="icon mr-3 text-info"><font-awesome-icon :icon="['fas', 'lightbulb']" /> </div>
                                    <div class="content">
                                        <strong> Projects: </strong>
                                        <span> {{ course.projects }}+ </span>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="icon mr-3 text-warning"><font-awesome-icon :icon="['fas', 'signal']" /> </div>
                                    <div class="content">
                                        <strong> Level: </strong>
                                        <span> {{ course.level }} </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-6">
                        <div class="intro-video d-flex mt-md-5 mt-3 mt-lg-0" v-html="course.video">
                            <iframe src="https://player.vimeo.com/video/432220749" width="100%" height="320" frameborder="0" controls allow="autoplay; fullscreen" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="course-description">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8 col-md-12" id="courseContent">
                        <div class="description bg-white p-5 shadow rounded">
                            <div class="content-block">
                                <h3 class="mb-3">Course Description</h3>
                                <div class="content-block" v-html="course.description"></div>
                            </div>
                        </div>
                        <div class="bg-white p-md-5 py-4 px-4 mt-5 shadow rounded mb-md-0 mb-3"  v-if="course.sections && course.sections.length">
                            <h3 class="mb-3"> Course Module </h3>
                            <module-dropdown v-for="section in course.sections" :key="section.id" :section="section" :course="course" />
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 col-md-12">
                        <div class="box h-auto py-4 px-4 bg-primary shadow rounded text-white">
                            <h4 class="mb-3 pb-3 border-bottom">This course includes:</h4>
                            <div class="content-block highlight" v-html="course.highlight"></div>
                            <ul class="list-unstyled">
                                <li class="mb-3">
                                    <font-awesome-icon :icon="['fas', 'check-circle']" class="mr-2" />
                                    <span>7 hours on-demand video 7 hours on-demand video</span>
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

        return { course: data['course'], purchase: data['purchase'] }
    },
    data(){
        return {
            course: {},
            purchase: false,
        }
    },
    methods: {
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
        },

        price(){
            let price = this.course.sale_price ? this.course.sale_price : this.course.price;
            return '৳ ' + price;
        }
    },
    computed: {

    },
    mounted() {
        this.$nextTick(function () {
            console.log('hello');
        });
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
.content-block.highlight {
    li {
        margin-bottom: 15px;
    }
}
</style>
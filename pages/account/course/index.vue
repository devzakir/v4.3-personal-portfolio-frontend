<template>
    <div>
        <div class="card mb-4">
            <div class="card-header bg-primary text-white">
                Courses
            </div>
        </div>
        <div class="row" v-if="courses.length">
            <div class="col-lg-6 col-md-6 col-12" v-for="order in courses" :key="order.id">
                <div class="box mb-4">
                    <div class="image">
                        <img v-if="order.course.image" :src="updateImage(order.course.image)" alt="" class="img-fluid">
                        <img v-else src="~static/images/about.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="info">
                        <div class="title">
                            <nuxt-link :to="{ name: 'course-slug', params: { slug: order.course.slug } }"> {{ order.course.title }} </nuxt-link>
                        </div>
                        <div v-if="order.payment_status == 1" class=" mt-2">
                            <nuxt-link :to="{ name: 'watch-course', params:{ course: order.course.slug } }" class="btn btn-primary">Watch Course</nuxt-link>
                        </div>
                        <div v-if="order.payment_status == 4" class="d-flex justify-content-between align-items-center mt-2">
                            <div class="badge badge-warning my-2">Payment Pending</div>
                            <nuxt-link :to="{ name: 'account-course-slug', params: { slug: order.course.slug } }" class="btn btn-primary">Submit Payment Info</nuxt-link>
                        </div>
                        <div v-if="order.payment_status == 3" class="d-flex justify-content-between align-items-center mt-2">
                            <div class="badge badge-info my-2">Payment Processing</div>
                            <nuxt-link :to="{ name: 'account-course-slug', params: { slug: order.course.slug } }" class="btn btn-primary">Submit Payment Again</nuxt-link>
                        </div>
                        <div v-if="order.payment_status == 2" class="d-flex justify-content-between align-items-center mt-2">
                            <div class="badge badge-danger my-2">Payment Info Rejected</div>
                            <nuxt-link :to="{ name: 'account-course-slug', params: { slug: order.course.slug } }" class="btn btn-primary">Submit Payment Info</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-12 py-4 text-center">
                <h5 class="mb-3">No course found</h5>
                <nuxt-link :to="{ name: 'course' }" class="btn btn-primary px-4 py-2">
                    Browse Course
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    scrollToTop: true,
    head: {
        title: 'Courses',
        meta: [
            // { hid: 'description', name: 'description', content: 'Home page description' }
        ],
        script: [
            // { src: '/head.js' },
        ]
    },
    data(){
        return {
            courses: [],
        }
    },
    methods: {
        async loadCourses(){
            let { data } = await this.$axios.get(process.env.API_URL+'/auth/courses');
            this.courses = data;
        },

        updateImage(image){
            return this.$store.getters.updateImageURL(image);
        },
    },
    mounted(){
        this.$nextTick(() => {
            this.loadCourses();
        });
    }
}
</script>

<style>

</style>
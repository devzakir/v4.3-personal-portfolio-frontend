<template>
    <div>
        <div class="card mb-4">
            <div class="card-header bg-primary text-white">
                Courses
            </div>
        </div>
        <div class="row" v-if="courses.length">
            <div class="col-6" v-for="order in courses" :key="order.id">
                <div class="box mb-4">
                    <div class="image">
                        <img :src="updateImage(order.course.image)" alt="" class="img-fluid">
                        <!-- <img src="~static/images/about.jpg" alt="" class="img-fluid"> -->
                    </div>
                    <div class="info">
                        <div class="title">
                            <a href="#"> {{ order.course.title }} </a>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <nuxt-link :to="{ name: 'watch-course-lesson', params:{ course: order.course.slug, lesson: 'lesson'} }" class="btn btn-primary mt-2">Watch Course</nuxt-link>
                            <div v-if="order.payment_status == 4" class="badge badge-warning">Pending</div>
                            <div v-if="order.payment_status == 3" class="badge badge-info">Processing</div>
                            <div v-if="order.payment_status == 2" class="badge badge-danger">Rejected</div>
                            <div v-if="order.payment_status == 1" class="badge badge-success">Approved</div>
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
        this.loadCourses();
    }
}
</script>

<style>

</style>
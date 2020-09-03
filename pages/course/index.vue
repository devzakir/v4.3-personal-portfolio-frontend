<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12 heading">
                    <h2> Our Courses </h2>
                    <p>Grab websites for free</p>
                </div>
            </div>
            <div class="row" v-if="courses.length">
                <div class="col-12 col-md-6 col-lg-4" v-for="course in courses" :key="course.id">
                    <course :course="course" />
                </div>
            </div>
            <div class="row" v-else>
                <div class="col-12 py-4 text-center">
                    <h5 class="mb-3">No course found</h5>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Course from '@/components/course/Course';

export default {
    components: {
        'course': Course,
    },
    data() {
        return {
            courses: [],
            next_page_url: '',
        }
    },
    methods: {
        loadCategories(){
            this.$axios.get(process.env.API_URL+'/courses').then(response => {
                this.courses = response.data.data;
                this.courses.next_page_url = response.data.next_page_url;
            });
        },
    },
    computed: {

    },
    mounted() {
        this.$nextTick(() => {
            this.loadCategories();
        });
    }
  }
</script>

<style>

</style>

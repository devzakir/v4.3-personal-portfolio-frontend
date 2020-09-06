<template>
    <div>
        <div style="min-height: 100vh; width: 100%" class="d-flex justify-content-center align-items-center">
            <h5>Redirecting</h5>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'lesson',
    middleware: 'auth',
    async asyncData({$axios, params, error}){
        await $axios.get(process.env.API_URL+'/course/access/'+params.course).then((res) => {})
        .catch((e) => {
            error({ statusCode: 404, message: 'You do not have permission to access this course.' })
        })
    },
    methods: {
        async courseProgress(){
            try {
                let courseSlug = this.$route.params.course;
                let { data } = await this.$axios.get(process.env.API_URL+'/course/progress/'+ courseSlug);

                this.$router.push({ name: 'watch-course-lesson', params:{ course: courseSlug, lesson: data.slug }});
            } catch (error) {
                console.log(error);
            }
        },
    },
    computed: {
        auth(){
            return this.$store.state.auth;
        },
    },
    mounted(){
        this.$nextTick(() => {
            this.courseProgress();
        });
    }
}
</script>

<style lang="scss" scoped>
    header .logo {
        max-width: 40px;
        margin-right: 10px;
    }
</style>
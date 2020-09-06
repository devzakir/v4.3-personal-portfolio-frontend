<template>
    <div>
        <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar" v-if="course">
            <nuxt-link :to="{name: 'index'}" class="logo d-flex align-items-center navbar-brand mr-0 mr-md-2">
                <img src="~static/images/logo-white.png" alt="" class="img-fluid">
            </nuxt-link>
            <div class="navbar-nav-scroll ml-2">
                <ul class="navbar-nav bd-navbar-nav flex-row">
                    <li class="nav-item active">
                        <nuxt-link class="nav-link" :to="{name: 'course-slug', params: {slug: course.slug }}" >{{ course.title }}</nuxt-link>
                    </li>
                </ul>
            </div>
            <ul class="navbar-nav ml-md-auto">
                <li class="nav-item" v-if="!auth.loggedIn">
                    <nuxt-link :to="{ name: 'login' }" class="btn btn-warning d-none d-lg-inline-block text-dark ml-auto mb-3 mb-md-0 ml-md-3">
                        <font-awesome-icon  class="mr-2" :icon="['fas', 'user']" />
                        Login
                    </nuxt-link>
                </li>
                <li class="nav-item" v-else>
                    <nuxt-link :to="{name: 'account'}" class="btn btn-warning d-none d-lg-inline-block text-dark ml-auto mb-3 mb-md-0 ml-md-3">
                        <font-awesome-icon  class="mr-2" :icon="['fas', 'user']" />
                        {{ auth.user.name }}
                    </nuxt-link>
                </li>
            </ul>
        </header>
        <div class="container-fluid" v-if="course">
            <div class="row">
                <div class="col-md-3 col-12 col-lg-3 d-md-block bg-light sidebar collapse show py-3">
                    <h4 class="mb-3 text-secondary">Course Module</h4>
                    <module-dropdown v-for="section in course.sections" :key="section.id" :section_id="lesson.section_id" :section="section" :course="course" />
                </div>
                <div class="col-md-9 col-12 ml-sm-auto col-lg-9 px-md-4">
                    <div class="p-4">
                        <div class="course-video" v-html="lesson.video"></div>
                    </div>
                    <div class="mt-4 p-4">
                        <div>
                            <h3>Description</h3>
                            <hr>
                            <div class="content" v-html="lesson.description"> </div>
                        </div>
                        <div class="mt-5">
                            <h3> Comments </h3>
                            <Disqus shortname='zakirhossen' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModuleDropdown from '@/components/course/ModuleDropdown'
import { Disqus } from 'vue-disqus'

export default {
    layout: 'lesson',
    middleware: 'auth',
    components: {
        'module-dropdown': ModuleDropdown,
        Disqus
    },
    data(){
        return {
            lesson: {},
        }
    },
    async asyncData({$axios, params, error}){
        await $axios.get(process.env.API_URL+'/course/access/'+params.course).then((res) => {})
        .catch((e) => {
            error({ statusCode: 404, message: 'You do not have permission to access this course.' })
        })
    },
    methods: {
        async loadCourse(){
            try {
                let { data } = await this.$axios.get(process.env.API_URL+'/course/'+ this.$route.params.course);
                this.$store.dispatch('course/ADD_COURSE', data['course']);
            } catch (error) {
                console.log(error);
            }
        },

        async loadLesson(){
            let { data } = await this.$axios.get(process.env.API_URL+'/watch/'+ this.$route.params.course+'/'+this.$route.params.lesson);
            this.lesson = data;
        }
    },
    computed: {
        auth(){
            return this.$store.state.auth;
        },
        course(){
            let slug = this.$route.params.course;
            return this.$store.getters['course/getCourse'](slug);
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.loadLesson();

            if(this.course && !Object.keys(this.course).length){
                this.loadCourse();
            }
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

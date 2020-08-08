<template>
    <div>
        <header class="navbar navbar-expand navbar-dark bg-primary flex-column flex-md-row bd-navbar">
            <nuxt-link :to="{name: 'index'}" class="logo d-flex align-items-center navbar-brand mr-0 mr-md-2">
                <img src="~static/images/logo.png" alt="" class="img-fluid">
            </nuxt-link>
            <div class="navbar-nav-scroll ml-2">
                <ul class="navbar-nav bd-navbar-nav flex-row">
                    <li class="nav-item active">
                        <nuxt-link class="nav-link" :to="{name: 'course-slug', params: {slug: 'course-name-here' }}" >Course Name Goes Here</nuxt-link>
                    </li>
                </ul>
            </div>
            <ul class="navbar-nav ml-md-auto">
                <li class="nav-item" v-if="!auth.loggedIn">
                    <nuxt-link :to="{name: 'login'}" class="btn btn-warning d-none d-lg-inline-block text-dark ml-auto mb-3 mb-md-0 ml-md-3">
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
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-lg-3 d-md-block bg-light sidebar collapse py-3">
                    <h4 class="mb-3 text-secondary">Course Module</h4>
                    <module-dropdown v-for="section in course.sections" :key="section.id" :section="section" :course="course" />
                </div>
                <div class="col-md-9 ml-sm-auto col-lg-9 px-md-4">
                    <nuxt-child :course="course"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModuleDropdown from '@/components/course/ModuleDropdown'
export default {
    layout: 'lesson',
    // middleware: 'auth',
    components: {
        'module-dropdown': ModuleDropdown
    },
    data(){
        return {
            course: {
                sections: {}
            },
        }
    },
    methods: {
        async loadCourse(){
            try {
                let { data } = await this.$axios.get(process.env.API_URL+'/course/'+ this.$route.params.course);
                this.course = data;
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {
        auth(){
            return this.$store.state.auth;
        }
    },
    mounted(){
        this.loadCourse();
        console.log(this.$route);
    }
}
</script>

<style lang="scss" scoped>
    header .logo {
        max-width: 40px;
        margin-right: 10px;
    }
</style>
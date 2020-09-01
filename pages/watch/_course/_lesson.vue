<template>
    <div>
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
</template>

<script>
import ModuleDropdown from '@/components/course/ModuleDropdown'
import { Disqus } from 'vue-disqus'

export default {
    props: ['course'],
    layout: 'lesson',
    components: {
        'module-dropdown': ModuleDropdown,
        Disqus
    },
    data(){
        return {
            lesson: {},
        }
    },
    methods: {
        async loadLesson(){
            let { data } = await this.$axios.get(process.env.API_URL+'/watch/'+ this.$route.params.course+'/'+this.$route.params.lesson);
            this.lesson = data;
        }
    },
    computed: {
        auth(){
            return this.$store.state.auth;
        }
    },
    mounted(){
        this.loadLesson();
    }
}
</script>

<style lang="scss" scoped>
    header .logo {
        max-width: 40px;
        margin-right: 10px;
    }
</style>
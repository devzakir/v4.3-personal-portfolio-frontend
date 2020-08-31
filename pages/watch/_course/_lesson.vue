<template>
    <div>
        <div class="p-4">
            <iframe src="https://player.vimeo.com/video/447622518" width="100%" height="580" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <div class="mt-4 p-4">
            <div>
                <h3 class="mb-4">{{ lesson.title }}</h3>
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
            console.log(data);
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
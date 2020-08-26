<template>
    <div>
        <div class="p-4">
            <iframe src="https://player.vimeo.com/video/447622518" width="100%" height="580" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <div class="mt-4 p-4">
            <div>
                <h3>{{ lesson.title }}</h3>
                <h3>Description</h3>
                <hr>
                <div class="content" v-html="lesson.description">

                </div>
            </div>
            <div class="mt-5">
                <h3> Comments </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deleniti, iusto debitis neque beatae dolor. Eum quisquam officia delectus. Veniam laudantium et inventore! Vitae deleniti maiores inventore molestiae quaerat voluptatum.</p>
            </div>
        </div>
    </div>
</template>

<script>
import ModuleDropdown from '@/components/course/ModuleDropdown'
export default {
    props: ['course'],
    layout: 'lesson',
    components: {
        'module-dropdown': ModuleDropdown
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
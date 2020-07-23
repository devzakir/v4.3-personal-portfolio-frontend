<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12 heading">
                    <h2> Our Courses </h2>
                    <p>Grab websites for free</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4" v-for="course in courses" :key="course.id">
                    <div class="box">
                        <div class="image">
                            <img :src="updateImage(course.image)" alt="" class="img-fluid">
                        </div>
                        <div class="info">
                            <div class="title">
                                <nuxt-link :to="{name: 'course-slug', params: {slug: course.slug}}">{{ course.title }}.</nuxt-link>
                            </div>
                            <div class="info-footer">
                                <div class="category">
                                    <p>{{ course.category.name }}</p>
                                </div>
                                <div class="hightlight">
                                    <p>{{ price(course.price) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    components: {},
    data() {
        return {
            courses: [],
            next_page_url: '',
        }
    },
    methods: {
        loadCategories(){
            this.$axios.get(process.env.API_URL+'/courses').then(response => {
                console.log(response.data);
                this.courses = response.data.data;
                this.courses.next_page_url = response.data.next_page_url;
            });
        },
        price(value){
            if(value > 0){
                return value;
            }else {
                return 'Free';
            }
        },
        updateImage(image){
            return this.$store.getters.updateImageURL(image);
        }
    },
    computed: {

    },
    mounted() {
        this.loadCategories();
    }
  }
</script>

<style>

</style>

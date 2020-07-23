<template>
    <div>
        <div class="card mb-4">
            <div class="card-header bg-primary text-white">
                Courses
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="box mb-3">
                    <div class="image">
                        <!-- <img :src="updateImage(course.image)" alt="" class="img-fluid"> -->
                        <img src="~static/images/about.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="info">
                        <div class="title">
                            <!-- <nuxt-link :to="{name: 'course-slug', params: {slug: course.slug}}">{{ course.title }}.</nuxt-link> -->
                            <a href="#"> Course Title Goes Here </a>
                        </div>
                        <!-- <div class="info-footer">
                            <div class="category">
                                <p>Course Category</p>
                            </div>
                            <div class="hightlight">
                                <p>FREE</p>
                            </div>
                        </div> -->
                        <nuxt-link :to="{name: 'account-course-slug', params:{ slug: 'hello' } }" class="btn btn-primary mt-2">Watch Course</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    scrollToTop: true,

}
</script>

<style>

</style>
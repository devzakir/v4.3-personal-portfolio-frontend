<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-12 heading">
                    <h2> Read Blog </h2>
                    <p>Grab websites for free</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="~/static/images/portfolio1.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="info">
                            <div class="title">
                                <nuxt-link :to="{name: 'blog-slug', params: {slug: 'blog-single'} }">Lorem ipsum dolor sit amet.</nuxt-link>
                            </div>
                            <div class="info-footer">
                                <div class="category">
                                    <p>Category</p>
                                </div>
                                <div class="hightlight">
                                    <p>Free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="~/static/images/portfolio1.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="info">
                            <div class="title">
                                <nuxt-link :to="{name: 'blog-slug', params: {slug: 'blog-single'} }">Lorem ipsum dolor sit amet.</nuxt-link>
                            </div>
                            <div class="info-footer">
                                <div class="category">
                                    <p>Category</p>
                                </div>
                                <div class="hightlight">
                                    <p>Free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="box">
                        <div class="image">
                            <img src="~/static/images/portfolio1.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="info">
                            <div class="title">
                                <nuxt-link :to="{name: 'blog-slug', params: {slug: 'blog-single'} }">Lorem ipsum dolor sit amet.</nuxt-link>
                            </div>
                            <div class="info-footer">
                                <div class="category">
                                    <p>Category</p>
                                </div>
                                <div class="hightlight">
                                    <p>Free</p>
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
    components: {}
  }
</script>

<style>

</style>

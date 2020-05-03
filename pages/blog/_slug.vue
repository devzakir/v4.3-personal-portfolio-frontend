<template>
    <div>
        <breadcrumb name="Blog" slug="blog-single"/>
        <section class="single-product">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <div class="product-image">
                            <img src="~/static/images/banner.png" alt="" class="img-fluid">
                        </div>
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam a nulla voluptatem, illum sint quis nihil temporibus aut necessitatibus perspiciatis aspernatur quos sed provident, harum laudantium cumque nisi maxime est!</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="template-box">
                            <a href="#" class="demo"> <font-awesome-icon :icon="['far', 'eye']" /> Demo</a>
                            <a href="" class="download"> <font-awesome-icon :icon="['fas', 'cloud-download-alt']" />  Downloads</a>
                        </div>
                        <div class="sidebar-box">
                            <h3>Template Summery</h3>
                            <div class="content">
                                <table>
                                    <tr>
                                        <td> Category </td>
                                        <td> Version </td>
                                    </tr>
                                    <tr>
                                        <td> Version </td>
                                        <td> Version </td>
                                    </tr>
                                    <tr>
                                        <td> Layout </td>
                                        <td> Responsive </td>
                                    </tr>
                                    <tr>
                                        <td> Created </td>
                                        <td> Responsive </td>
                                    </tr>
                                    <tr>
                                        <td> Last Updated </td>
                                        <td> Responsive </td>
                                    </tr>
                                    <tr>
                                        <td> License </td>
                                        <td> GNU GPL 2 </td>
                                    </tr>
                                    <tr>
                                        <td> Tags </td>
                                        <td> GNU GPL 2 </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb';

export default {
    components: {
        'breadcrumb': Breadcrumb
    }
}
</script>

<style>

</style>
<template>
    <div>
        <breadcrumb name="Product Details" :slug="product.slug" :title="product.title"/>
        <section class="single-product">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <div class="product-image">
                            <img :src="updateImage(product.image)" alt="" class="img-fluid">
                        </div>
                        <div class="description">
                            <p> {{ product.description }}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="template-box">
                            <a target="_blank" :href="product.link" class="demo"> <font-awesome-icon :icon="['far', 'eye']" /> Demo</a>
                            <a target="_blank" :href="product.download_link" class="download"> <font-awesome-icon :icon="['fas', 'cloud-download-alt']" />  Downloads</a>
                        </div>
                        <div class="sidebar-box">
                            <h3>Template Summery</h3>
                            <div class="content">
                                <table>
                                    <tr>
                                        <td> Category </td>
                                        <td> {{ product.category_name }} </td>
                                    </tr>
                                    <tr>
                                        <td> Version </td>
                                        <td> {{ product.version }} </td>
                                    </tr>
                                    <tr>
                                        <td> Layout </td>
                                        <td> {{ product.layout }} </td>
                                    </tr>
                                    <tr>
                                        <td> Last Updated </td>
                                        <td> Responsive </td>
                                    </tr>
                                    <tr>
                                        <td> License </td>
                                        <td> {{ product.license }} </td>
                                    </tr>
                                    <tr>
                                        <td> Created </td>
                                        <td> {{ product.created_at }} </td>
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
    },
    async asyncData({ $axios, params}){
        let { data } = await $axios.get(process.env.API_URL+'/product/'+params.slug);

        return { product: data }
    },
    data(){
        return {
            product: {},
        }
    },
    methods: {
        updateImage(image){
            return this.$store.getters.updateImageURL(image);
        }
    },
    computed: {

    },
    mounted(){

    }
}
</script>

<style>

</style>
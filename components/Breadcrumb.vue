<template>
    <section class="breadcrum">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="heading">
                        <h2>{{ title }}</h2>
                        <div class="index">
                            <router-link :to="{ name: 'index'}">Home</router-link> <font-awesome-icon :icon="['fas', 'chevron-right']" />
                            <router-link :to="{ name: 'product-slug', params: {slug: slug }}"> {{ name }} </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['name', 'slug', 'title'],
}
</script>

<style>

</style>
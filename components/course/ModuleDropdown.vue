<template>
    <div class="card mb-2">
        <a href="#" @click.prevent="active = !active" class="card-header d-flex align-items-center justify-content-between">
            <p class="mb-0 text-dark">Course Introduction</p>
            <div class="badge badge-primary">
                <font-awesome-icon v-if="active" :icon="['fas', 'minus']" />
                <font-awesome-icon v-else :icon="['fas', 'plus']" />
            </div>
        </a>
        <div class="card-body py-2" v-if="active">
            <ul class="nav flex-column">
                <li class="nav-item d-flex align-items-center">
                    <!-- <font-awesome-icon class="text-secondary" :icon="['far', 'check-square']" /> -->
                    <font-awesome-icon class="text-success" :icon="['fas', 'check-square']" />
                    <a class="nav-link active" href="#">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel
                    </a>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <font-awesome-icon class="text-secondary" :icon="['far', 'check-square']" />
                    <a class="nav-link active" href="#">
                        Dashboard
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['section'],
    data() {
        return {
            active: false
        }
    }
}
</script>

<style>

</style>
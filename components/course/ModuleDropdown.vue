<template>
    <div class="card mb-2 shadow-sm">
        <a href="#" @click.prevent="active = !active" :class="active ? 'bg-primary' : 'bg-white'" class="card-header d-flex align-items-center justify-content-between" >
            <p class="mb-0" :class="active ? 'text-white' : 'text-dark'">{{ section.name }}</p>
            <div class="badge" :class="active ? 'bg-white' : 'badge-primary'">
                <font-awesome-icon v-if="active" :icon="['fas', 'minus']" />
                <font-awesome-icon v-else :icon="['fas', 'plus']" />
            </div>
        </a>
        <div class="card-body py-2" v-if="active">
            <ul class="nav flex-column" v-if="section.videos">
                <li v-for="video in section.videos" :key="video.id" class="nav-item d-flex py-2">
                    <font-awesome-icon class="text-secondary mt-1" :icon="['far', 'check-square']" />
                    <nuxt-link v-if="!video.coming_soon" :to="{ name: 'watch-course-lesson', params:{course: course.slug, lesson: video.slug }}"
                        class="nav-link module-menu d-block w-100 py-0 px-3">
                        {{ video.title }}  <span class="badge badge-success">Time - {{ video.video_time }}</span>
                    </nuxt-link>
                    <a v-else href="javascript:void(0)" class="nav-link module-menu d-block w-100 py-0 px-3">
                        {{ video.title }}<span class="badge badge-warning ml-1">Coming Soon</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        section: {
            type: Object,
            required: true
        },
        course: {
            type: Object,
            required: true
        },
        section_id: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            active: false,
        };
    },
    mounted(){
        this.$nextTick(() => {
            if(this.section_id){
                if(this.section_id == this.section.id){
                    this.active = true;
                }
            }
        });
    },
    // watch: {
    //     section_id: {
    //         handler: function(newValue) {

    //         console.log('section id')
    //         console.log(newValue);
    //         console.log('section_id')
    //         console.log(section_id);

    //             if(newValue == this.section.id){
    //                 this.active = true;
    //             }
    //         },
    //         deep: true
    //     }
    // }
};
</script>

<style scoped>
    a.module-menu.active {
        color: black;
    }
</style>
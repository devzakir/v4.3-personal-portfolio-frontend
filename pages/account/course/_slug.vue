<template>
    <div>
        <payment-form :course_id="course.id"/>
    </div>
</template>

<script>
import PaymentForm from '@/components/course/PaymentForm'
export default {
    components: {
        'payment-form': PaymentForm,
    },
    data(){
        return {
            course: {},
        }
    },
    async asyncData({$axios, params}){
        let { data } = await $axios.get(process.env.API_URL+'/course/'+params.slug);

        return { course: data }
    },
}
</script>

<style>

</style>
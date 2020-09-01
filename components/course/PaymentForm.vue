<template>
    <div class="card">
        <div class="card-header bg-primary text-white">
            Fill up the Payment Information to get access to the course
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 offset-3">
                    <form action="">
                        <form @submit.prevent="unlockCourse()">
                            <div class="form-group">
                                <label for="">Enter Bkash Number</label>
                                <input type="text" class="form-control" name="bkash-number" placeholder="Enter Bkash Sender Number" v-model="paymentForm.sender" :class="{ 'is-invalid': paymentForm.errors.has('sender') }">
                                <has-error :form="paymentForm" field="sender"></has-error>
                            </div>
                            <div class="form-group">
                                <label for="">Transaction TrxID</label>
                                <input type="text" class="form-control" name="trxid" placeholder="Enter TrxID" v-model="paymentForm.trxid" :class="{ 'is-invalid': paymentForm.errors.has('trxid') }">
                                <has-error :form="paymentForm" field="trxid"></has-error>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-success font-weight-bold text-uppercase py-3 w-100">Unlock Course</button>
                            </div>
                        </form>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['course_id'],
    data(){
        return {
            paymentForm: this.$vform({
                course_id: null,
                sender: null,
                trxid: null,
            }),
        }
    },
    methods: {
        async unlockCourse(){
            try {
                await this.paymentForm.post(process.env.API_URL+'/unlock-course');

                this.$toast.success("Success! Your payment is under processing");
                this.$toast.success("Success! You can access your course when it is approved");
                this.$router.push({ name: 'account-course'});
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.paymentForm.course_id = this.course_id;
    }
}
</script>

<style>

</style>
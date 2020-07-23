<template>
    <div class="card">
        <div class="card-header bg-primary text-white">
            Settings
        </div>
        <div class="card-body">
            <form action="" method="post">
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Enter your name</label>
                            <input type="text" class="form-control" placeholder="name">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Enter your email</label>
                            <input type="text" class="form-control" placeholder="email">
                        </div>
                    </div>
                    <div class="col-12 mt-4">
                        <h5 class="text-secondary">Update Password</h5>
                        <hr>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">New password</label>
                            <input type="password" name="new_password" class="form-control" placeholder="new password">
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="">Confirm password</label>
                            <input type="password" name="confirm_password" class="form-control" placeholder="confirm password">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success">Update Profile</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    scrollToTop: true,
    head: {
        title: 'Settings Page',
        meta: [
            // { hid: 'description', name: 'description', content: 'Home page description' }
        ],
        script: [
            // { src: '/head.js' },
        ]
    },
}
</script>

<style>

</style>
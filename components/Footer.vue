<template>
    <div>
        <section class="sub-footer">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3 item">
                        <h5>Links</h5>
                        <ul>
                            <li><nuxt-link :to="{ name: 'index' }" href="#">Home</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'course' }">Courses</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'product' }" href="#">Products</nuxt-link></li>
                            <li><nuxt-link :to="{ name: 'account' }">Account</nuxt-link></li>
                            <!-- <li><nuxt-link :to="{ name: 'resource' }" href="#">Resources</nuxt-link></li> -->
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 item">
                        <h5>Hire Me</h5>
                        <ul>
                            <li><a href="https://www.fiverr.com/zakir18">Fiverr Profile</a></li>
                            <li><a href="https://www.upwork.com/freelancers/~014e565b3a8183bd74">Upwork Profile</a></li>
                            <li><a href="#">Freelancer Profile</a></li>
                            <li><a href="#">Contact Me</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 item">
                        <h5>Follow Me</h5>
                        <ul>
                            <li v-if="setting.facebook"><a :href="setting.facebook" target="_blank"> Facebook </a></li>
                            <li v-if="setting.linkedin"><a :href="setting.linkedin" target="_blank"> LinkedIn </a></li>
                            <li v-if="setting.github"><a :href="setting.github" target="_blank"> Github </a></li>
                            <li v-if="setting.skype"><a :href="setting.skype" target="_blank"> Skype </a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 item">
                        <h5>Resource</h5>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">My Resource</a></li>
                            <li><a href="#">Useful Links</a></li>
                            <li><a href="#">Free Tools</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="footer-text text-center">
                            <p class="mb-0"> Design & Developed with 🧡 by <nuxt-link :to="{name: 'index'}"> Zakir Hossen</nuxt-link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    computed: {
        setting(){
            return this.$store.getters.getSetting;
        }
    },
}
</script>

<style>

</style>
<template>
    <header class="active">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="menu-part d-flex align-items-center">
                        <nuxt-link :to="{name: 'index'}" class="logo d-flex align-items-center">
                            <img src="~static/images/logo.svg" alt="" class="img-fluid">
                        </nuxt-link>
                        <ul class="mobile-nav">
                            <li><nuxt-link :to="{name: 'index'}"> Home </nuxt-link></li>
                            <li><nuxt-link :to="{name: 'product'}"> Products </nuxt-link></li>
                            <li><nuxt-link :to="{name: 'course'}"> Courses </nuxt-link></li>
                            <li><nuxt-link :to="{name: 'resource'}"> Resources </nuxt-link></li>
                            <li><nuxt-link :to="{name: 'blog'}"> Blog </nuxt-link></li>
                        </ul>
                        <ul class="right ml-auto">
                            <li v-if="setting.facebook"><a :href="setting.facebook" target="_blank"> <font-awesome-icon :icon="['fab', 'facebook-f']" /> </a></li>
                            <li v-if="setting.linkedin"><a :href="setting.linkedin" target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin-in']" /> </a></li>
                            <li v-if="setting.github"><a :href="setting.github" target="_blank"> <font-awesome-icon :icon="['fab', 'github']" /> </a></li>
                            <li v-if="setting.skype"><a :href="setting.skype" target="_blank"> <font-awesome-icon :icon="['fab', 'skype']" /> </a></li>
                            <li v-if="setting.stackoverflow"><a :href="setting.stackoverflow" target="_blank"> <font-awesome-icon :icon="['fab', 'stack-overflow']" /> </a></li>
                            <li v-if="setting.quora"><a :href="setting.quora" target="_blank"> <font-awesome-icon :icon="['fab', 'quora']" /> </a></li>
                            <li><a href="#" class="hire-me" data-toggle="modal" data-target="#hireMe"> Hire Me </a></li>
                        </ul>
                        <div class="menu-toggle">
                            <i class="fas fa-bars"></i>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="hireMe" tabindex="-1" role="dialog" aria-labelledby="hireMeTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="hireMeTitle">Hire Me </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="name">Your name</label>
                        <input type="text" class="form-control" name="name" placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <label for="email">Your email</label>
                        <input type="text" class="form-control" name="email" placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="budget">What is your budget?</label>
                        <select name="budget" class="form-control">
                            <option value="">Select your budget</option>
                            <option value="">Below $100</option>
                            <option value="">$200 to $400 </option>
                            <option value="">$500 to $700 </option>
                            <option value="">$800 to $1000 </option>
                            <option value="">$1000 to $1500 </option>
                            <option value="">$1500+ </option>
                        </select>
                    </div>                    
                    <div class="form-group">
                        <label for="email">Your social</label>
                        <input type="text" class="form-control" name="email" placeholder="Skype/Telegram/Whatsapp/Viber">
                    </div>
                    <div class="form-group">
                        <label for="message">Your message</label>
                        <textarea name="message" rows="4" class="form-control" placeholder="Enter your message"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"> Send Offer </button>
                </div>
            </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return {
            setting: [],
        }
    },
    methods: {
        async loadSetting(){
            const data = await this.$axios.$get(process.env.API_URL+'/setting');
            this.setting = data;
        }
    },
    mounted(){
        this.loadSetting();
    }
}
</script>

<style lang="scss">
    // @import '../assets/scss/layout/_header.scss';
    // @import '~/assets/scss/layout/header';
</style>
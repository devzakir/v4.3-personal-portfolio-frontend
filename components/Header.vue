<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="menu-part d-flex align-items-center">
                        <nuxt-link :to="{name: 'index'}" class="logo d-flex align-items-center">
                            <img src="~static/images/logo.png" alt="" class="img-fluid">
                        </nuxt-link>
                        <ul class="mobile-nav" :class="{'active' : dropdown}">
                            <li><nuxt-link :to="{name: 'index'}"> Home </nuxt-link></li>
                            <li><nuxt-link :to="{name: 'course'}"> Courses </nuxt-link></li>
                            <li><nuxt-link :to="{name: 'product'}"> free Templates </nuxt-link></li>
                            <li><nuxt-link :to="{name: 'resource'}"> Resources </nuxt-link></li>
                        </ul>
                        <ul class="right ml-auto">
                            <li v-if="setting.facebook">
                                <a :href="setting.facebook" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                 </a>
                            </li>
                            <li v-if="setting.linkedin">
                                <a :href="setting.linkedin" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                                 </a>
                            </li>
                            <li v-if="setting.github">
                                <a :href="setting.github" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'github']" />
                                 </a>
                            </li>
                            <li v-if="setting.skype">
                                <a :href="setting.skype" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'skype']" />
                                 </a>
                            </li>
                            <li v-if="setting.stackoverflow">
                                <a :href="setting.stackoverflow" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'stack-overflow']" />
                                 </a>
                            </li>
                            <li v-if="setting.quora">
                                <a :href="setting.quora" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'quora']" />
                                 </a>
                            </li>
                            <li class="focus-btn" v-if="!auth.loggedIn">
                                <nuxt-link :to="{name: 'login'}">
                                    <font-awesome-icon  class="mr-2" :icon="['fas', 'user']" />
                                    Login
                                </nuxt-link>
                            </li>
                            <li class="focus-btn" v-else>
                                <nuxt-link :to="{name: 'account'}">
                                    <font-awesome-icon  class="mr-2" :icon="['fas', 'user']" />
                                    {{ auth.user.name }}
                                </nuxt-link>
                            </li>
                            <!-- <li><a href="#" class="hire-me" data-toggle="modal" v-b-modal.modal-tall data-target="#hireMe"> Hire Me </a></li> -->
                        </ul>
                        <div class="menu-toggle" @click="toggleDropdown">
                            <font-awesome-icon v-if="dropdown" :icon="['fas', 'times']" />
                            <font-awesome-icon v-else :icon="['fas', 'bars']" />
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <!-- <b-modal centered title="Hire Me" id="modal-tall" okTitle="Send Offer">
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
        </b-modal> -->
    </header>
</template>

<script>
export default {
    data(){
        return {
            setting: [],
            dropdown: false,
        }
    },
    methods: {
        async loadSetting(){
            const data = await this.$axios.$get(process.env.API_URL+'/setting');
            this.$store.commit('setSetting', data);
            this.setting = data;
        },
        toggleDropdown(){
            this.dropdown = !this.dropdown;
        },
    },
    mounted(){
        if(Object.keys(this.getSetting).length){
            this.setting = this.getSetting;
        }else {
            this.loadSetting();
        }
    },
    computed: {
        getSetting(){
            return this.$store.getters.getSetting;
        },
        auth(){
            return this.$store.state.auth;
        }
    }
}
</script>

<style lang="scss">
    // @import '../assets/scss/layout/_header.scss';
    // @import '~/assets/scss/layout/header';
</style>
<template>
    <div>
        <section class="banner-section">
            <div id="particle-container">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            <div class="container">
                <div class="row banner align-items-center">
                    <div class="col-lg-6 col-12 intro">
                        <h5>Hi! I am Zakir. </h5>
                        <h1>Full Stack Web Developer</h1>
                        <p>Let me help you increase business egagement with qualityful Websites and Web Applications</p>
                        <div class="buttons">
                            <nuxt-link :to="{ name: 'index', hash:'#about'}">About Me</nuxt-link>
                            <nuxt-link :to="{ name: 'course' }">Check My Courses</nuxt-link>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12 banner-preview">
                        <div class="banner-img">
                            <img src="~/static/images/banner.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="about-section" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="my-photo">
                            <img :src="getAuthorImage()" alt="" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="about-heading">
                            <h2>About Me</h2>
                            <p class="mb-0">My Introduction</p>
                        </div>
                        <div class="about-me">
                            <ul class="tabs d-flex">
                                <li><a href="#" @click.prevent="tabId = 123" :class="{'active': tabId == 123}"> Profile </a></li>
                                <li><a href="#" @click.prevent="tabId = 124" :class="{'active': tabId == 124}"> Skills </a></li>
                                <li><a href="#" @click.prevent="tabId = 125" :class="{'active': tabId == 125}"> Connect </a></li>
                            </ul>
                            <div class="tabs-content">
                                <div class="intro" v-if="tabId == 123">
                                    <div class="content" v-html="getSetting.about"></div>
                                    <div class="buttons">
                                        <a target="_blank" :href="getSetting.resume">My Resume</a>
                                        <nuxt-link  :to="{ name: 'index', hash:'#contact'}">Contact Me</nuxt-link>
                                    </div>
                                </div>
                                <!-- <div class="intro" v-if="tabId == 123">
                                    <h3>Zakir Hossen</h3>
                                    <p>Hi, I am Zakir. A passionate Web Developer from Dhaka, Bangladesh. I prefer to learn consistently to expand my knowledge.</p>
                                    <p class="mt-3">I started my career as a Web Designer. After 3 years of consistently working in this field. It helped me gain lots of knowledge about business, marketing, and user experience. Also, I have tried a few more things to understand customer satisfaction, business engagement & marketing including e-commerce business, blogging, writing, YouTube & affiliate marketing.</p>
                                    <p class="mt-3">Now I am working as a Full-stack Web Developer. I am able to design & develop responsive website using the latest technology & design trends. I have worked with many clients and a few local companies in the past few years. I am very interested to work with future projects and able to use my coding skills to make a super-fast and & super professional website.</p>
                                    <div class="buttons">
                                        <a target="_blank" :href="getSetting.resume">My Resume</a>
                                        <nuxt-link  :to="{ name: 'index', hash:'#contact'}">Contact Me</nuxt-link>
                                    </div>
                                </div> -->
                                <div class="skills" v-if="tabId == 124">
                                    <div class="skill-box">
                                        <h6>Front End</h6>
                                        <div>
                                            <span>Nuxt JS</span>
                                            <span>Vue JS</span>
                                        <span>JavaScript</span>
                                        <span>jQuery</span>
                                        <span>Bootstrap</span>
                                        <span>HTML5</span>
                                        <span>CSS3</span>
                                        <span>SCSS</span>
                                        <span>Flexbox</span>
                                        <span>JSON</span>
                                        <span>Webpack</span>
                                        </div>
                                    </div>
                                    <div class="skill-box">
                                        <h6>Back End</h6>
                                        <div>
                                        <span>Laravel</span>
                                        <span>PHP</span>
                                        <span>MySQL</span>
                                        <span>REST API</span>
                                        <span>API Integration</span>
                                        <span>Database Design</span>
                                        <span>Payment Integration</span>
                                        </div>
                                    </div>

                                    <div class="skill-box">
                                        <h6>Others</h6>
                                        <div>
                                            <span>CLI</span>
                                            <span>Git</span>
                                            <span>Github</span>
                                            <span>Ubuntu</span>
                                            <span>DigitalOcean</span>
                                            <span>Forge</span>
                                            <span>Cloudflare</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="connect-info" v-if="tabId == 125">
                                    <div class="info-item">
                                        <strong>Phone</strong>
                                        <p class="mb-0">{{ getSetting.phone }}</p>
                                    </div>
                                    <div class="info-item">
                                        <strong>Email</strong>
                                        <p class="mb-0">{{ getSetting.email }}</p>
                                    </div>
                                    <div class="info-item">
                                        <strong>Address</strong>
                                        <p class="mb-0">{{ getSetting.address }}</p>
                                    </div>
                                    <div class="info-item">
                                        <ul class="find-me">
                                            <li v-if="getSetting.facebook"><a :href="getSetting.facebook" target="_blank"> <font-awesome-icon :icon="['fab', 'facebook-f']" /> </a></li>
                                            <li v-if="getSetting.linkedin"><a :href="getSetting.linkedin" target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin-in']" /> </a></li>
                                            <li v-if="getSetting.github"><a :href="getSetting.github" target="_blank"> <font-awesome-icon :icon="['fab', 'github']" /> </a></li>
                                            <li v-if="getSetting.skype"><a :href="getSetting.skype" target="_blank"> <font-awesome-icon :icon="['fab', 'skype']" /> </a></li>
                                            <li v-if="getSetting.stackoverflow"><a :href="getSetting.stackoverflow" target="_blank"> <font-awesome-icon :icon="['fab', 'stack-overflow']" /> </a></li>
                                            <li v-if="getSetting.quora"><a :href="getSetting.quora" target="_blank"> <font-awesome-icon :icon="['fab', 'quora']" /> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="services-section" id="services">
            <div class="container">
                <div class="row services">
                    <div class="col-12 col-lg-5 section-heading">
                        <div class="icon"><font-awesome-icon :icon="['fas', 'user-cog']" /> </div>
                        <h2>My Services</h2>
                        <p>I make things happen. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At earum cum
                            id autem velit quidem, vel, amet adipisci nesciunt!</p>
                        <div class="row counter">
                            <div class="col-lg-6 col-md-3 col-sm-6 col-6">
                                <div class="item">
                                    <h4>3+</h4>
                                    <p>Years of experience</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-3 col-sm-6 col-6">
                                <div class="item">
                                    <h4>47+</h4>
                                    <p>Project completed.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-3 col-sm-6 col-6">
                                <div class="item">
                                    <h4>31+</h4>
                                    <p>Awesome clients</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-3 col-sm-6 col-6">
                                <div class="item">
                                    <h4>4806+</h4>
                                    <p>Hours of coding</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-7">
                        <div class="d-flex flex-wrap my-services">
                            <div class="item item1">
                                <div class="item-info">
                                    <div class="icon bg-white">
                                        <img src="~/static/images/web-design.svg" alt="" class="img-fluid">
                                    </div>
                                    <h3>Web Design</h3>
                                    <p>Professional and affordable web design service. I design website with your customer in mind using latest technology & modern design trends</p>
                                </div>
                            </div>
                            <div class="item item2">
                                <div class="item-info">
                                    <div class="icon bg-white">
                                        <img src="~/static/images/web-development.svg" alt="" class="img-fluid">
                                    </div>
                                    <h3>Web Development</h3>
                                    <p>Expert and experienced in web development. Proving all kinds of website development service from standard to complicated websites</p>
                                </div>
                            </div>
                            <div class="item item3">
                                <div class="item-info">
                                    <div class="icon bg-white">
                                        <img src="~/static/images/web-application.svg" alt="" class="img-fluid">
                                    </div>
                                    <h3>Application</h3>
                                    <p>Easy to use and trustworthy application development service. Fully functional and detailed report based custom solution for enterprise platform</p>
                                </div>
                            </div>
                            <div class="item item4">
                                <div class="item-info">
                                    <div class="icon bg-white">
                                        <img src="~/static/images/wordpress.svg" alt="" class="img-fluid">
                                    </div>
                                    <h3>WordPress</h3>
                                    <p>Looking for a powerful, compact and a high-performing WordPress website? You're in the right place. I am providing responsive and full functional wordpress website development services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="promote-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 promote-content">
                        <h2>Do you want to learn Web Development?</h2>
                        <p class="text-lead">I created several course on Web design and Web Development. These courses specially designed for beginners. </p>
                        <nuxt-link class="btn btn-light font-weight-bold text-primary text-uppercase py-3 px-5 mt-5" :to="{ name: 'course' }">
                            Check My Courses
                            <font-awesome-icon :icon="['fas', 'chevron-right']" />
                        </nuxt-link>
                        <!-- <div class="buttons"> -->
                            <!-- <nuxt-link :to="{ name: 'index', hash:'#contact'}">Contact Me</nuxt-link> -->

                        <!-- </div> -->
                    </div>
                    <div class="col-12 col-md-6 ">
                        <div class="d-flex justify-content-end justify-content-end">
                            <div class="bg-white rounded mx-4 p-3">
                                <img src="~/static/images/tutorial.svg" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="portfolio-section" id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-12 portfolio-heading">
                        <!-- <div class="col-12 portfolio-heading d-flex align-items-center justify-content-between"> -->
                        <div class="section-heading">
                            <h2>Portfolio</h2>
                            <p>My Recent Work</p>
                        </div>
                        <!-- <ul class="portfolio-menu">
                            <li><a href="#">WordPress</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a class="active" href="#">All</a></li>
                        </ul> -->
                    </div>
                </div>
                <div class="row portfolio-list">
                    <div class="col-12 col-md-6 col-lg-4" v-for="portfolio in portfolios" :key="portfolio.id">
                        <div class="item">
                            <div class="preview">
                                <img :src="updateImage(portfolio.image)" alt="" class="img-fluid">
                            </div>
                            <div class="details">
                                <small>{{ portfolio.category_name }}</small>
                                <h6>{{ portfolio.title }}</h6>
                                <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iure quos perspiciatis blanditiis soluta quod tempora vitae esse dolores debitis, voluptatem, officia repella</p> -->
                                <div class="text-center">
                                    <a target="_blank" :href="portfolio.link">Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="buttons text-center">
                            <button type="button" v-if="portfolios.length > 6" @click="loadMorePortfolio()" :disabled="!next_page">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="testiomonial-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 section-heading">
                        <h2>Testimonials</h2>
                        <p>What client say about me</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <client-only> <!-- important to add no-ssr-->
                        <carousel v-if="testimonials.length" :autoplay="true" :nav="false" :items="1" :mouseDrag="true" :touchDrag="true" :dots="true">
                            <div v-for="testimonial in testimonials" :key="testimonial.id" class="item">
                                <div class="client-avatar">
                                    <img :src="updateImage(testimonial.avatar)" alt="" class="img-fluid">
                                </div>
                                <div class="testimonial-description">
                                    <p> {{ testimonial.description }} </p>
                                    <div class="client-intro">
                                        <h6> {{ testimonial.name }} </h6>
                                        <i>{{ testimonial.designation }}</i>
                                    </div>
                                </div>
                            </div>
                        </carousel>
                        </client-only>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact-section" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="contact-heading text-center">
                            <h2>Contact Me</h2>
                            <p>I will be happy to help you. Fill out the form and I'll be in touch as soon as possible.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="contact-details d-flex">
                            <div class="details-left connect-info">
                                <div class="info-item">
                                    <strong>Phone</strong>
                                    <p class="mb-0">{{ getSetting.phone }}</p>
                                </div>
                                <div class="info-item">
                                    <strong>Email</strong>
                                    <p class="mb-0">{{ getSetting.email }}</p>
                                </div>
                                <div class="info-item">
                                    <strong>Address</strong>
                                    <p class="mb-0">{{ getSetting.address }}</p>
                                </div>
                                <div class="info-item">
                                    <ul class="find-me">
                                        <li v-if="getSetting.facebook"><a :href="getSetting.facebook" target="_blank"> <font-awesome-icon :icon="['fab', 'facebook-f']" /> </a></li>
                                        <li v-if="getSetting.linkedin"><a :href="getSetting.linkedin" target="_blank"> <font-awesome-icon :icon="['fab', 'linkedin-in']" /> </a></li>
                                        <li v-if="getSetting.github"><a :href="getSetting.github" target="_blank"> <font-awesome-icon :icon="['fab', 'github']" /> </a></li>
                                        <li v-if="getSetting.skype"><a :href="getSetting.skype" target="_blank"> <font-awesome-icon :icon="['fab', 'skype']" /> </a></li>
                                        <li v-if="getSetting.stackoverflow"><a :href="getSetting.stackoverflow" target="_blank"> <font-awesome-icon :icon="['fab', 'stack-overflow']" /> </a></li>
                                        <li v-if="getSetting.quora"><a :href="getSetting.quora" target="_blank"> <font-awesome-icon :icon="['fab', 'quora']" /> </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="details-right">
                                <form class="contact-form" @submit.prevent="contact" @keydown="contactForm.onKeydown($event)">
                                    <div class="alert alert-success d-flex justify-content-between align-items-center" v-if="contactForm.successful"> <span>Message sent successfully</span><font-awesome-icon style="cursor:pointer" @click="contactForm.successful = false" :icon="['fas', 'times']" /></div>
                                    <div class="form-input">
                                        <input type="text" name="name" placeholder="Your name" v-model="contactForm.name" :class="{ 'is-invalid': contactForm.errors.has('name') }">
                                        <has-error :form="contactForm" field="name"></has-error>
                                    </div>
                                    <div class="form-input">
                                        <input type="text" name="email" placeholder="Your email" v-model="contactForm.email" :class="{ 'is-invalid': contactForm.errors.has('email') }">
                                        <has-error :form="contactForm" field="email"></has-error>
                                    </div>
                                    <div class="form-input">
                                        <input type="text" name="subject" placeholder="Contact purpose" v-model="contactForm.subject" :class="{ 'is-invalid': contactForm.errors.has('subject') }">
                                        <has-error :form="contactForm" field="subject"></has-error>
                                    </div>
                                    <div class="form-input">
                                        <textarea name="message" rows="4" placeholder="Your message" v-model="contactForm.message" :class="{ 'is-invalid': contactForm.errors.has('message') }"></textarea>
                                        <has-error :form="contactForm" field="message"></has-error>
                                    </div>
                                    <div class="form-input text-center">
                                        <button type="submit" class="send-message" :disabled="contactForm.busy">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Zakir Hossen Personal Portfolio',
            meta: [
                { hid: 'description', name: 'description', content: 'A passionate Web Developer from Dhaka, Bangladesh. I prefer to learn consistently to expand my knowledge. I am working with Laravel, Vue.js & Nuxt.js.' },
                { hid: 'og:type', property: 'og:type', content: "website" },
                { hid: 'og:title', name: 'og:title', content: 'A passionate Web Developer from Dhaka, Bangladesh. I prefer to learn consistently to expand my knowledge. I am working with Laravel, Vue.js & Nuxt.js.' },
                { hid: 'og:description', name: 'og:description', content: 'A passionate Web Developer from Dhaka, Bangladesh. I prefer to learn consistently to expand my knowledge. I am working with Laravel, Vue.js & Nuxt.js.' },
                // { hid: 'og:image', property: 'og:image', content: "/images/product.jpg" },
            ]
        }
    },
    data(){
        return {
            tabId: 123,
            portfolios: [],
            next_page: '',
            testimonials: [],

            contactForm: this.$vform({
                name: '',
                email: '',
                subject: '',
                message: '',
            }),
        }
    },
    methods: {
        async loadPortfolio(){
            let data = await this.$axios.$get(process.env.API_URL+'/portfolio');
            this.portfolios = data.data;
            this.next_page = data.next_page_url;
        },
        async loadTestimonial(){
            let data = await this.$axios.$get(process.env.API_URL+'/testimonial');
            this.testimonials = data;
        },
        updateImage(image){
            if(image){
                return this.$store.getters.updateImageURL(image);
            }
            return 'null';
        },
        async loadMorePortfolio(){
            let data = await this.$axios.$get(this.next_page);
            data.data.forEach(element => {
                this.portfolios.push(element);
            });
            this.next_page = data.next_page_url;
        },

        async contact() {
            try {
                await this.contactForm.post(process.env.API_URL+'/contact');
                // clear login form
                this.contactForm.name = '';
                this.contactForm.email = '';
                this.contactForm.subject = '';
                this.contactForm.message = '';
            }catch(e){

            }
        },

        getAuthorImage(){
            if(this.getSetting.avatar){
                return this.updateImage(this.getSetting.avatar);
            }else {
                return "~/static/images/my-photo.png";
            }
        }
    },
    computed: {
        getSetting(){
            return this.$store.getters.getSetting;
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.loadPortfolio();
            this.loadTestimonial();
        });
    }
}
</script>

<style scoped>
    .owl-carousel .owl-item img {
        display: block;
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
</style>

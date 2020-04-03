<template>
    <div>
        <section class="banner-section">
            <siteHeader/>
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
                            <a href="#">About Me</a>
                            <a href="#">Recent Projects</a>
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
                            <img src="~/static/images/my-photo.png" alt="" class="img-fluid">
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
                                    <h3>Zakir Hossen</h3>
                                    <p>Hi, I am Zakir. A passionate Web Developer from Dhaka, Bangladesh. I prefer to learn consistently to expand my knowledge.</p>
                                    <p class="mt-3">I started my career as a Web Designer. After 3 years of consistently working in this field. It helped me gain lots of knowledge about business, marketing, and user experience. Also, I have tried a few more things to understand customer satisfaction, business engagement & marketing including e-commerce business, blogging, writing, YouTube & affiliate marketing.</p>
                                    <p class="mt-3">Now I am working as a Full-stack Web Developer. I am able to design & develop responsive website using the latest technology & design trends. I have worked with many clients and a few local companies in the past few years. I am very interested to work with future projects and able to use my coding skills to make a super-fast and & super professional website.</p>
                                    <div class="buttons">
                                        <a href="#resume">My Resume</a>
                                        <a href="#resume">Hire Me</a>
                                    </div>
                                </div>
                                <div class="skills" v-if="tabId == 124">
                                    <div class="skill-box">
                                        <h6>Front End</h6>
                                        <div>
                                            <span>Vue JS</span>
                                        <span>JavaScript</span>
                                        <span>jQuery</span>
                                        <span>BootStrap</span>
                                        <span>HTML5</span>
                                        <span>CSS3</span>
                                        <span>SCSS</span>
                                        <span>Flexbox</span>
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
                                        </div>
                                    </div>
                                    <div class="skill-box">
                                        <h6>Others</h6>
                                        <div>
                                            <span>Project Planning</span>
                                            <span>Client Handling</span>
                                            <span>WordPress</span>
                                            <span>Adobe Photoshop</span>
                                            <span>Writing</span>
                                            <span>Affiliate Marketing</span>
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
                        <h2>Have any project idea?</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At earum cum id autem velit
                            quidem, vel, amet adipisci nesciunt!</p>
                        <div class="buttons">
                            <a href="#">Get Quote</a>
                            <a href="#">Hire Me</a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 content-preview">
                        <div class="d-flex justify-content-end justify-content-end">
                            <div>
                                <img src="~/static/images/project-idea.png" alt="" class="img-fluid">
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
                                    <a :href="portfolio.link">Preview</a>
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
                        <no-ssr> <!-- important to add no-ssr-->
                        <carousel v-if="testimonials.length" :autoplay="true" :nav="false" :items="1" :mouseDrag="true" :touchDrag="true" :dots="true">
                            <div v-for="testimonial in testimonials" :key="testimonial.id" class="item">
                                <div class="client-avatar">
                                    <img src="~/static/images/my-photo.png" alt="" class="img-fluid">
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
                        </no-ssr>
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
                                <form class="contact-form">
                                    <div class="form-input">
                                        <input type="text" name="name" placeholder="Your name">
                                    </div>
                                    <div class="form-input">
                                        <input type="text" name="email" placeholder="Your email">
                                    </div>
                                    <div class="form-input">
                                        <input type="text" name="subject" placeholder="Contact purpose">
                                    </div>
                                    <div class="form-input">
                                        <textarea name="message" rows="4" placeholder="Your message"></textarea>
                                    </div>
                                    <div class="form-input text-center">
                                        <button type="submit" class="send-message">Send Message</button>
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
import Header from '~/components/Header';
export default {
    layout: 'home',
    components: {
        'siteHeader': Header,
    },
    data(){
        return {
            tabId: 123,
            portfolios: [],
            next_page: '',
            testimonials: [],
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
            console.log(updatedImage);
            return updatedImage;
        },
        async loadMorePortfolio(){
            let data = await this.$axios.$get(this.next_page);
            data.data.forEach(element => {
                this.portfolios.push(element); 
            });
            this.next_page = data.next_page_url;
        }
    },
    computed: {
        getSetting(){
            return this.$store.getters.getSetting;
        }
    },
    mounted(){
        this.loadPortfolio();
        this.loadTestimonial();
    }
}
</script>

<style>

</style>

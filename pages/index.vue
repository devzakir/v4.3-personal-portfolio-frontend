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
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                                        role="tab" aria-controls="nav-home" aria-selected="true">Profile</a>
                                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                                        role="tab" aria-controls="nav-profile" aria-selected="false">Skills</a>
                                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact"
                                        role="tab" aria-controls="nav-contact" aria-selected="false">Connect</a>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div class="intro">
                                        <h3>Zakir Hossen</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum quidem beatae numquam doloremque consequuntur sequi, illum ab incidunt, quos quae adipisci suscipit accusantium labore ullam nihil nulla est soluta.</p>
                                        <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Assumenda, cum. Voluptates nostrum nisi voluptatum, distinctio suscipit quasi eveniet officiis consectetur facilis? Earum distinctio dolorem assumenda pariatur illo, perspiciatis ratione provident!</p>
                                        <div class="buttons">
                                            <a href="#resume">My Resume</a>
                                            <a href="#resume">Hire Me</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
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
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div class="connect-info">
                                        <div class="info-item">
                                            <strong>Phone</strong>
                                            <p class="mb-0">+880 1794 1724 79</p>
                                        </div>
                                        <div class="info-item">
                                            <strong>Email</strong>
                                            <p class="mb-0">web.zakirbd@gmail.com</p>
                                        </div>
                                        <div class="info-item">
                                            <strong>Address</strong>
                                            <p class="mb-0">Adabor, Dhaka-1207, Bangladesh</p>
                                        </div>
                                        <div class="info-item">
                                            <ul class="find-me">
                                                <li><a href="#"> <font-awesome-icon :icon="['fab', 'facebook-f']" /> </a></li>
                                                <li><a href="#"> <font-awesome-icon :icon="['fab', 'linkedin-in']" /> </a></li>
                                                <li><a href="#"> <font-awesome-icon :icon="['fab', 'github']" /> </a></li>
                                                <li><a href="#"> <font-awesome-icon :icon="['fab', 'stack-overflow']" /> </a></li>
                                                <li><a href="#"> <font-awesome-icon :icon="['fab', 'quora']" /> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="tabs d-flex">
                                <li><a href="#" class="active"> Profile </a></li>
                                <li><a href="#"> Skills </a></li>
                                <li><a href="#"> Connect </a></li>
                            </ul>
                            <div class="tabs-content">
                                <div class="intro">
                                    <h3>Zakir Hossen</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ipsum quidem beatae numquam doloremque consequuntur sequi, illum ab incidunt, quos quae adipisci suscipit accusantium labore ullam nihil nulla est soluta.</p>
                                    <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cum. Voluptates nostrum nisi voluptatum, distinctio suscipit quasi eveniet officiis consectetur facilis? Earum distinctio dolorem assumenda pariatur illo, perspiciatis ratione provident!</p>
                                    <div class="buttons">
                                        <a href="#resume">My Resume</a>
                                        <a href="#resume">Hire Me</a>
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
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione debitis
                                        deserunt repellat quas quia nesciunt, praesentium beatae consequatur officia
                                        enim.</p>
                                </div>
                            </div>
                            <div class="item item2">
                                <div class="item-info">
                                    <div class="icon bg-white">
                                        <img src="~/static/images/web-development.svg" alt="" class="img-fluid">
                                    </div>
                                    <h3>Web Development</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione debitis
                                        deserunt repellat quas quia nesciunt, praesentium beatae consequatur officia
                                        enim.</p>
                                </div>
                            </div>
                            <div class="item item3">
                                <div class="item-info">
                                    <div class="icon bg-white">
                                        <img src="~/static/images/web-application.svg" alt="" class="img-fluid">
                                    </div>
                                    <h3>Application</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione debitis
                                        deserunt repellat quas quia nesciunt, praesentium beatae consequatur officia
                                        enim.</p>
                                </div>
                            </div>
                            <div class="item item4">
                                <div class="item-info">
                                    <div class="icon bg-white">
                                        <img src="~/static/images/wordpress.svg" alt="" class="img-fluid">
                                    </div>
                                    <h3>WordPress</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione debitis
                                        deserunt repellat quas quia nesciunt, praesentium beatae consequatur officia
                                        enim.</p>
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
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="item">
                            <div class="preview">
                                <img src="~/static/images/portfolio1.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="details">
                                <small>Category name</small>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quidem!</h6>
                                <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iure quos perspiciatis blanditiis soluta quod tempora vitae esse dolores debitis, voluptatem, officia repella</p> -->
                                <div class="text-center">
                                    <a href="#">Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="item">
                            <div class="preview">
                                <img src="~/static/images/portfolio1.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="details">
                                <small>Category name</small>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quidem!</h6>
                                <div class="text-center">
                                    <a href="#">Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="item">
                            <div class="preview">
                                <img src="~/static/images/portfolio1.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="details">
                                <small>Category name</small>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quidem!</h6>
                                <div class="text-center">
                                    <a href="#">Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="buttons text-center">
                            <a href="#">Load More</a>
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
                        <div id="testimonialSlider" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#testimonialSlider" data-slide-to="0" class="active"></li>
                                <li data-target="#testimonialSlider" data-slide-to="1"></li>
                                <li data-target="#testimonialSlider" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="item">
                                        <div class="client-avatar">
                                            <img src="~/static/images/my-photo.png" alt="" class="img-fluid">
                                        </div>
                                        <div class="testimonial-description">
                                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                                                eligendi corrupti, deserunt voluptas nisi perspiciatis non voluptate
                                                earum doloribus architecto nulla molestias natus quidem, ducimus quis
                                                praesentium, aliquid possimus magni? </p>
                                            <div class="client-intro">
                                                <h6> Zakir Hossen </h6>
                                                <i>Chairman of MeshDroid</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="item">
                                        <div class="client-avatar">
                                            <img src="~/static/images/my-photo.png" alt="" class="img-fluid">
                                        </div>
                                        <div class="testimonial-description">
                                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                                                eligendi corrupti, deserunt voluptas nisi perspiciatis non voluptate
                                                earum doloribus architecto nulla molestias natus quidem, ducimus quis
                                                praesentium, aliquid possimus magni? </p>
                                            <div class="client-intro">
                                                <h6> Zakir Hossen </h6>
                                                <i>Chairman of MeshDroid</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="item">
                                        <div class="client-avatar">
                                            <img src="~/static/images/my-photo.png" alt="" class="img-fluid">
                                        </div>
                                        <div class="testimonial-description">
                                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                                                eligendi corrupti, deserunt voluptas nisi perspiciatis non voluptate
                                                earum doloribus architecto nulla molestias natus quidem, ducimus quis
                                                praesentium, aliquid possimus magni? </p>
                                            <div class="client-intro">
                                                <h6> Zakir Hossen </h6>
                                                <i>Chairman of MeshDroid</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <p class="mb-0">+880 1794 1724 79</p>
                                </div>
                                <div class="info-item">
                                    <strong>Email</strong>
                                    <p class="mb-0">web.zakirbd@gmail.com</p>
                                </div>
                                <div class="info-item">
                                    <strong>Address</strong>
                                    <p class="mb-0">Adabor, Dhaka-1207, Bangladesh</p>
                                </div>
                                <div class="info-item">
                                    <ul class="find-me">
                                        <li><a href="#"> <font-awesome-icon :icon="['fab', 'facebook-f']" /> </a></li>
                                        <li><a href="#"> <font-awesome-icon :icon="['fab', 'linkedin-in']" /> </a></li>
                                        <li><a href="#"> <font-awesome-icon :icon="['fab', 'github']" /> </a></li>
                                        <li><a href="#"> <font-awesome-icon :icon="['fab', 'stack-overflow']" /> </a></li>
                                        <li><a href="#"> <font-awesome-icon :icon="['fab', 'quora']" /> </a></li>
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
    }
}
</script>

<style>

</style>

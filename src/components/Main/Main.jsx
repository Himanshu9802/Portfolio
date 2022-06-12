import React from "react";
import Header from "../Header/Header";
import { Link, animateScroll as scroll } from "react-scroll";

// import Typewriter from "typewriter-effect";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import CodingSkills from "../CodingSkills/CodingSkills";
import CircularProgress from "../reusables/CircularProgress/CircularProgress";
import Education from "../Education/Education";
import WhyChooseMe from "../WhyChooseMe/WhyChooseMe";
import Footer from "../Footer/Footer";
import Experience from "../Experience/Experience";
import About from "../About/About";

const Main = () => {
  const nextCarousel = (e) => {
    //window.alert('calling');
    document.querySelector("#customCarousel .control-next").click();
  };
  const prevCarousel = (e) => {
    //window.alert('calling');
    document.querySelector("#customCarousel .control-prev").click();
  };

  return (
    <div className="home">
      {/* <!-- Preloader --> */}
      {/* <div className="preloader">
        <div className="box-1">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="spinner">
                <div className="lines"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-2"></div>
      </div> */}

      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Header --> */}
        <Header />

        {/* <!-- Wrapper --> */}
        <div className="wrapper">
          {/* <!-- Background --> */}
          <div className="background-bg">
            <div className="background-filter circle">
              <div
                className="background-img"
                style={{ backgroundImage: "url('/images/self.webp')" }}
              ></div>
            </div>
          </div>

          {/* <!-- Section Started --> */}
          <div className="section started" id="Home">
            <div className="centrize full-width"  id="Home">
              <div className="vertical-center">
                {/* <!-- title --> */}
                <h1 className="h-title">
                  Himanshu <br />
                  Nanikwal
                </h1>

                {/* <!-- content started --> */}
                <div className="started-content">
                  {/* <!-- subtitle --> */}
                  <div className="h-subtitles">
                    <div className="h-subtitle typing-subtitle">
                      Frontend Developer
                      {/* <Typewriter
                        onInit={(typewriter) => {
                          typewriter

                            .typeString("Consultant and Mentor")

                            .pauseFor(1000)
                            .deleteAll()

                            .typeString("Web Designer")

                            .pauseFor(1000)
                            .deleteAll()

                            .typeString("Programmer")

                            .start();
                        }}
                      /> */}
                    </div>
                  </div>

                  {/* <!-- text --> */}
                  <div className="h-text">
                  Hello! I'm a Frontend Developer from Gujarat, India. I have an experience in designing and developing websites. Additionally, I am familiar in using React as part of my projects.
                  </div>

                  {/* <!-- button --> */}
                  <span className="btn">
                    <span className="animated-button">
                    <Link
                    activeClass="current-menu-item"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={3000}
                  >
                    Contact Me
                  </Link>
                    </span>
                    <i className="icon fas fa-chevron-right"></i>
                  </span>

                  {/* <!-- mouse button --> */}
                  <span
                    className="btn mouse-btn"
                  >
                    <Link
                    activeClass="current-menu-item"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    <i className="icon fas fa-chevron-down"></i>
                  </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Section About --> */}
          <About/>

          {/* <!-- Section Resume --> */}
          <Experience />

          {/* <!-- Education --> */}
          <Education/>

          {/* <!-- Coding Skills --> */}
          <CodingSkills/>

          

          {/* <!-- Section Coding Skills --> */}
          {/* <div className="section skills" id="section-skills-code">
            <div className="content">
              <div className="titles">
                <div className="title">Coding Skills</div>
                <div className="subtitle">Developing on</div>
              </div>
              <div className="skills circles">
                <ul>
                  <li>
                    <CircularProgress percent={'99'} language={"HTML 5"}  />
                  </li>
                  <li>
                    <CircularProgress percent={'99'} language={"CSS"} />
                  </li>
                  <li>
                    <CircularProgress percent={'99'} language={"Bootstrap"} />
                  </li>
                  <li>
                    <CircularProgress percent={'70'} language={"React"} />
                  </li>
                  <li>
                    <CircularProgress percent={'80'} language={"Wordpress"} />
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* <!-- Past Projects --> */}
          <div id="Portfolio">
            <div className="section works">
              <div className="content">
                {/* <!-- title --> */}
                <div className="titles">
                  <div className="title">Portfolio</div>
                  <div className="subtitle">Latest works</div>
                </div>

                {/* <!-- filter --> */}
                <div className="filter-menu">
                  <div className="filters">
                    <div className="btn-group">
                      <label data-text="All" className="glitch-effect">
                        <input type="radio" name="fl_radio" value=".box-col" />
                        All
                      </label>
                    </div>
                    <div className="btn-group">
                      <label data-text="Video">
                        <input type="radio" name="fl_radio" value=".f-video" />
                        Video
                      </label>
                    </div>
                    <div className="btn-group">
                      <label data-text="Music">
                        <input type="radio" name="fl_radio" value=".f-music" />
                        Music
                      </label>
                    </div>
                    <div className="btn-group">
                      <label data-text="Links">
                        <input type="radio" name="fl_radio" value=".f-links" />
                        Links
                      </label>
                    </div>
                    <div className="btn-group">
                      <label data-text="Image">
                        <input type="radio" name="fl_radio" value=".f-image" />
                        Image
                      </label>
                    </div>
                    <div className="btn-group">
                      <label data-text="Gallery">
                        <input type="radio" name="fl_radio" value=".f-gallery" />
                        Gallery
                      </label>
                    </div>
                    <div className="btn-group">
                      <label data-text="Content">
                        <input type="radio" name="fl_radio" value=".f-content" />
                        Content
                      </label>
                    </div>
                  </div>
                </div>

                {/* <!-- portfolio items --> */}
                <div className="box-items">
                  <div className="box-col f-gallery">
                    <div className="box-item">
                      <div className="image">
                        <a href="#gallery-1" className="has-popup-gallery">
                          <img src="images/works/work1.jpg" alt="" />
                          <span className="info">
                            <span className="centrize full-width">
                              <span className="vertical-center">
                                <i className="icon fas fa-images"></i>
                              </span>
                            </span>
                          </span>
                        </a>
                        <div id="gallery-1" className="mfp-hide">
                          <a href="images/works/work1.jpg"></a>
                          <a href="images/works/work2.jpg"></a>
                          <a href="images/works/work3.jpg"></a>
                          <a href="images/works/work4.jpg"></a>
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Gallery</div>
                        <a href="#gallery-1" className="name has-popup-gallery">
                          Alabaster Complete Collection
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="box-col f-video">
                    <div className="box-item">
                      <div className="image">
                        <a
                          href="https://youtu.be/S4L8T2kFFck"
                          className="has-popup-video"
                        >
                          <img src="images/works/work2.jpg" alt="" />
                          <span className="info">
                            <span className="centrize full-width">
                              <span className="vertical-center">
                                <i className="icon fas fa-video"></i>
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <div className="category">Video</div>
                        <a
                          href="https://youtu.be/S4L8T2kFFck"
                          className="name has-popup-video"
                        >
                          Book of John Paper
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="box-col f-image">
                    <div className="box-item">
                      <div className="image">
                        <a
                          href="images/works/work7.jpg"
                          className="has-popup-image"
                        >
                          <img src="images/works/work7.jpg" alt="" />
                          <span className="info">
                            <span className="centrize full-width">
                              <span className="vertical-center">
                                <i className="icon fas fa-image"></i>
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <div className="category">Image</div>
                        <a
                          href="images/works/work7.jpg"
                          className="name has-popup-image"
                        >
                          White Rose Photo
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="box-col f-image">
                    <div className="box-item">
                      <div className="image">
                        <a
                          href="images/works/work4.jpg"
                          className="has-popup-image"
                        >
                          <img src="images/works/work4.jpg" alt="" />
                          <span className="info">
                            <span className="centrize full-width">
                              <span className="vertical-center">
                                <i className="icon fas fa-image"></i>
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <div className="category">Image</div>
                        <a
                          href="images/works/work4.jpg"
                          className="name has-popup-image"
                        >
                          Honest Company
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="box-col f-gallery">
                    <div className="box-item">
                      <div className="image">
                        <a href="#gallery-2" className="has-popup-gallery">
                          <img src="images/works/work5.jpg" alt="" />
                          <span className="info">
                            <span className="centrize full-width">
                              <span className="vertical-center">
                                <i className="icon fas fa-images"></i>
                              </span>
                            </span>
                          </span>
                        </a>
                        <div id="gallery-2" className="mfp-hide">
                          <a href="images/works/work5.jpg"></a>
                          <a href="images/works/work2.jpg"></a>
                          <a href="images/works/work3.jpg"></a>
                          <a href="images/works/work4.jpg"></a>
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Gallery</div>
                        <a href="#gallery-2" className="name has-popup-gallery">
                          Brown Short Dog
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="box-col f-music">
                    <div className="box-item">
                      <div className="image">
                        <a
                          href="https://w.soundcloud.com/player/?visual=true&#038;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&#038;show_artwork=true"
                          className="has-popup-music"
                        >
                          <img src="images/works/work6.jpg" alt="" />
                          <span className="info">
                            <span className="centrize full-width">
                              <span className="vertical-center">
                                <i className="icon fas fa-music"></i>
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <div className="category">Music</div>
                        <a
                          href="https://w.soundcloud.com/player/?visual=true&#038;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&#038;show_artwork=true"
                          className="name has-popup-music"
                        >
                          Brown Concrete Building
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="box-col f-links">
                    <div className="box-item">
                      <div className="image">
                        <a
                          href="https://beshley.com/"
                          className="has-popup-link"
                          target="_blank"
                        >
                          <img src="images/works/work3.jpg" alt="" />
                          <span className="info">
                            <span className="centrize full-width">
                              <span className="vertical-center">
                                <i className="icon fas fa-link"></i>
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <div className="category">Links</div>
                        <a
                          href="https://beshley.com/"
                          className="name has-popup-link"
                        >
                          Black Car
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="box-col f-content">
                    <div className="box-item">
                      <div className="image">
                        <a href="#popup-1" className="has-popup-media">
                          <img src="images/works/work8.jpg" alt="" />
                          <span className="info">
                            <span className="centrize full-width">
                              <span className="vertical-center">
                                <i className="icon fas fa-plus"></i>
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="desc">
                        <div className="category">Content</div>
                        <a href="#popup-1" className="name has-popup-media">
                          Yellow and Blue Striped
                        </a>
                      </div>
                      <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                        <div className="content">
                          <div className="image">
                            <img src="images/works/work8.jpg" alt="" />
                          </div>
                          <div className="desc">
                            <div className="category">Content</div>
                            <h4>Yellow and Blue Striped</h4>
                            <p>
                              Consul latine iudicabit eu vel. Cu has animal
                              eruditi voluptatibus. Eu volumus explicari sed. Mel
                              mutat vituperata suscipiantur et, et fabellas
                              explicari adipiscing quo, no mucius euismod vis. Cu
                              vim quem quod cibo.
                            </p>
                            <a href="#" className="btn">
                              <span className="animated-button">
                                <span>View Project</span>
                              </span>
                              <i className="icon fas fa-chevron-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="clear"></div>
              </div>
            </div>

            {/* Why Choose Me */}
            <WhyChooseMe />

            {/* <!-- Client Testimonials --> */}
            <div className="section testimonials">
              <div className="content">
                {/* <!-- title --> */}
                <div className="titles">
                  <div className="title">Reviews</div>
                  <div className="subtitle">What customers say</div>
                </div>

                {/* <!-- testimonials items --> */}
                <div className="content-carousel" id="customCarousel">
                  <Carousel
                    showStatus={false}
                    showIndicators={false}
                    swipeable={true}
                    showArrows={false}
                    infiniteLoop={true}
                  >
                    <div className="item">
                      <div className="reviews-item">
                        <div className="image">
                          <img src="images/rev1.png" alt="" />
                        </div>
                        <div className="info">
                          <div className="name">KK</div>
                          <div className="company">KK Modeling Agency</div>
                        </div>
                        <div className="text">
                          Excellent all around! What stood out most was Jake's
                          excellent service. He made sure our order was placed in
                          time, even though we were ordering on a holiday.
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="reviews-item">
                        <div className="image">
                          <img src="images/rev1.png" alt="" />
                        </div>
                        <div className="info">
                          <div className="name">Steve Hawzy</div>
                          <div className="company">Kitchen & Cabinets</div>
                        </div>
                        <div className="text">
                          Excellent all around! What stood out most was Jake's
                          excellent service. He made sure our order was placed in
                          time, even though we were ordering on a holiday.
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="reviews-item">
                        <div className="image">
                          <img src="images/rev1.png" alt="" />
                        </div>
                        <div className="info">
                          <div className="name">IK Jadeja</div>
                          <div className="company">Personal Blog</div>
                        </div>
                        <div className="text">
                          Excellent all around! What stood out most was Jake's
                          excellent service. He made sure our order was placed in
                          time, even though we were ordering on a holiday.
                        </div>
                      </div>
                    </div>

                    <div className="item">
                      <div className="reviews-item">
                        <div className="image">
                          <img src="images/rev1.png" alt="" />
                        </div>
                        <div className="info">
                          <div className="name">Jenvi Hadiyal</div>
                          <div className="company">Dashboard Templates</div>
                        </div>
                        <div className="text">
                          Excellent all around! What stood out most was Jake's
                          excellent service. He made sure our order was placed in
                          time, even though we were ordering on a holiday.
                        </div>
                      </div>
                    </div>
                  </Carousel>
                  {/* <!-- navigation --> */}
                  <div className="navs">
                    <span
                      className="prev fas fa-chevron-left"
                      onClick={prevCarousel}
                    ></span>
                    <span
                      className="next fas fa-chevron-right"
                      onClick={nextCarousel}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Contacts Info >--> */}
          <div className="section contacts" id="Contact">
            <div className="content">
              {/* <!-- title --> */}
              <div className="titles">
                <div className="title">Contact</div>
                <div className="subtitle">Let's talk</div>
              </div>

              {/* <!-- contact form --> */}
              <div className="contact-form">
                <form id="cform" method="post">
                  <div className="group-val">
                    <div className="label">
                      Full name <strong>*</strong>
                    </div>
                    <input type="text" name="name" placeholder="John Doe	" />
                  </div>
                  <div className="group-val">
                    <div className="label">
                      Email address <strong>*</strong>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div className="group-val">
                    <div className="label">
                      Message <strong>*</strong>
                    </div>
                    <textarea name="message" placeholder="To Write"></textarea>
                  </div>
                  <div className="group-bts">
                    <button type="submit" className="btn">
                      <span className="animated-button">
                        <span>Send Message</span>
                      </span>
                      <i className="icon fas fa-chevron-right"></i>
                    </button>
                  </div>
                </form>
                <div className="alert-success">
                  <p>Thanks, your message is sent successfully.</p>
                </div>
              </div>

              {/* <!-- contact info --> */}
              <div className="contact-info">
                <div className="name">Himanshu Nanikwal</div>
                <div className="subname">Frontend Developer</div>
                <div className="info-list">
                  <ul>
                    <li>
                      <strong>Age:</strong> 24
                    </li>
                    <li>
                      <strong>Residence:</strong>India
                    </li>
                    <li>
                      <strong>Freelance:</strong> Available
                    </li>
                    <li>
                      <strong>Address:</strong> Gujarat, Ahmedabad
                    </li>
                    <li>
                      <strong>Phone:</strong> +91 8460159550
                    </li>
                    <li>
                      <strong>E-mail:</strong> himanshunanikwal1@gmail
                    </li>
                  </ul>
                </div>
                <div className="author">Himanshu Nanikwal</div>
              </div>

              <div className="clear"></div>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <Footer />
      </div>
    </div>
  );
};

export default Main;

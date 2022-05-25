import React from 'react'

const Main = () => {
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
		<header className="header">

			{/* <!-- logo --> */}
			<div className="logo">
				<a href="#">
					<img className="logo-img" src="images/logo.png" alt="" />
					<span className="logo-lnk">Paula <br />Villalobos</span>
				</a>
			</div>

			{/* <!-- menu button --> */}
			<a href="#" className="menu-btn"><span></span></a>
				
			{/* <!-- download cv button --> */}
			<a href="#" className="btn download-cv-btn">
				<span className="animated-button"><span>Download CV</span></span>
				<i className="icon fas fa-download"></i>
			</a>

			{/* <!-- header sidebar --> */}
			<div className="header-sidebar">

				{/* <!-- top menu -->						 */}
				<div className="top-menu">
					<div className="top-menu-nav">	
						<div className="menu-topmenu-container">
							<ul className="menu">
								<li className="menu-item current-menu-item menu-item-has-children">
									<a href="#section-started">
										<span className="animated-button"><span>Home</span></span>
									</a>
									<ul className="sub-menu">
										<li className="menu-item"><a href="index.html">Home 1</a></li>
										<li className="menu-item"><a href="index-2.html">Home 2</a></li>
										<li className="menu-item current-menu-item"><a href="index-3.html">Home 3</a></li>
										<li className="menu-item"><a href="index-slider.html">Home Slider</a></li>
										<li className="menu-item"><a href="index-video.html">Home Video</a></li>
									</ul>
								</li>
								<li className="menu-item">
									<a href="#section-about">
										<span className="animated-button"><span>About</span></span>
									</a>
								</li>
								<li className="menu-item">
									<a href="#section-experience">
										<span className="animated-button"><span>Resume</span></span>
									</a>
								</li>
								<li className="menu-item">
									<a href="#section-portfolio">
										<span className="animated-button"><span>Portfolio</span></span>
									</a>
								</li>
								<li className="menu-item">
									<a href="#section-contacts">
										<span className="animated-button"><span>Contact</span></span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>

		</header>
		
		{/* <!-- Wrapper --> */}
		<div className="wrapper">

			{/* <!-- Background --> */}
			<div className="background-bg">
				<div className="background-filter circle">
					<div className="background-img" style={{backgroundImage:"url(../../assets/images/girl3.jpg)"}}></div>
				</div>
			</div>

			{/* <!-- Section Started --> */}
			<div className="section started" id="section-started">
				<div className="centrize full-width">
					<div className="vertical-center">

						{/* <!-- title --> */}
						<h1 className="h-title">
							Paula <br />Villalobos
						</h1>

						{/* <!-- content started --> */}
						<div className="started-content">

							{/* <!-- subtitle --> */}
							<div className="h-subtitles">
								<div className="h-subtitle typing-subtitle">
									<p>Consultant and Mentor</p>
									<p>Web Designer</p>
									<p>Programmer</p>
								</div>
								<span className="typed-subtitle"></span>
							</div>

							{/* <!-- text --> */}
							<div className="h-text">
								Hello! I am Web Developer from United States, New York. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.
							</div>

							{/* <!-- button --> */}
							<a href="#" className="btn">
								<span className="animated-button"><span>Contact Me</span></span>
								<i className="icon fas fa-chevron-right"></i>
							</a>

							{/* <!-- mosue button --> */}
							<a href="#" className="btn mouse-btn" style={{display: "none"}}>
								<i className="icon fas fa-chevron-down"></i>
							</a>

						</div>

					</div>
				</div>
			</div>

			{/* <!-- Section About --> */}
			<div className="section about" id="section-about">
				<div className="content">

					{/* <!-- title --> */}
					<div className="titles">
						<div className="title">About Me</div>
						<div className="subtitle">My story</div>
					</div>

					{/* <!-- text --> */}
					<div className="cols">
						<div className="col">
							<div className="single-post-text">
								<p>
									Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
								</p>
							</div>
						</div>
						<div className="col">
							<div className="single-post-text">
								<p>
									Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
								</p>
							</div>
						</div>
						<div className="col col-full">
							<div className="single-post-text">
								<p>
									Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
								</p>
							</div>
						</div>
					</div>

					{/* <!-- info list --> */}
					<div className="info-list">
						<ul>
							<li><strong>Age:</strong> 24</li>
							<li><strong>Residence:</strong> USA</li>
							<li><strong>Freelance:</strong> Available</li>
							<li><strong>Address:</strong> San Francisco</li>
							<li><strong>Phone:</strong> +1 256 254 84 56</li>
							<li><strong>E-mail:</strong> alejandroa@gmail.com</li>
						</ul>
					</div>

					<div className="clear"></div>
				</div>
			</div>

			{/* <!-- Section Service --> */}
			<div className="section service" id="section-services">
				<div className="content">

					{/* <!-- title --> */}
					<div className="titles">
						<div className="title">Services</div>
						<div className="subtitle">What I Do</div>
					</div>

					{/* <!-- services items --> */}
					<div className="service-items">

						<div className="service-col">
							<div className="service-item">
								<div className="icon"><i className="fas fa-brain"></i></div>
								<div className="name">Economic <br />Science</div>
								<div className="single-post-text">
									<p>
										Economics is a social science concerned with the production, consumption of goods and services.
									</p>
								</div>
							</div>
						</div>
						
						<div className="service-col">
							<div className="service-item">
								<div className="icon"><i className="icon fas fa-ad"></i></div>
								<div className="name">Marketing <br />& Advertising</div>
								<div className="single-post-text">
									<p>
										Advertising Management though is a complex process of employing various media to sell a product or service.
									</p>
								</div>
							</div>
						</div>

						<div className="service-col">
							<div className="service-item">
								<div className="icon"><i className="icon fab fa-chrome"></i></div>
								<div className="name">Web <br />Development</div>
								<div className="single-post-text">
									<p>
										The web development process includes: web design, web content, client-side / server-side scripting and network security configuration.
									</p>
								</div>
							</div>
						</div>

						<div className="service-col">
							<div className="service-item">
								<div className="icon"><i className="icon fas fa-headphones"></i></div>
								<div className="name">Music <br />Writing</div>
								<div className="single-post-text">
									<p>
										Sheet music is the basic form in which Western classNameical music is notated so that it can be learned and performed by solo singers.
									</p>
								</div>
							</div>
						</div>

						<div className="service-col">
							<div className="service-item">
								<div className="icon"><i className="icon fas fa-gamepad"></i></div>
								<div className="name">Game <br />Development</div>
								<div className="single-post-text">
									<p>
										Come Up With a Game Idea. An idea is the first thing that comes to mind when a game is being described before creating.
									</p>
								</div>
							</div>
						</div>

						<div className="service-col">
							<div className="service-item">
								<div className="icon"><i className="fas fa-video"></i></div>
								<div className="name">Photography <br />& Video</div>
								<div className="single-post-text">
									<p>
										Sessions. If you are a photographer that spends most of the time in a portrait studio, you can charge for your session.
									</p>
								</div>
							</div>
						</div>

					</div>

					<div className="clear"></div>
				</div>
			</div>

			{/* <!-- Section Pricing --> */}
			<div className="section pricing" id="section-pricing">
				<div className="content">

					{/* <!-- title --> */}
					<div className="titles">
						<div className="title">Pricing</div>
						<div className="subtitle">My Plans</div>
					</div>

					{/* <!-- pricing items --> */}
					<div className="content-carousel">
						<div className="owl-carousel" data-slidesview="2" data-slidesview_mobile="1">

							<div className="item">
								<div className="pricing-item">
									<div className="icons"><i className="fas fa-star"></i></div>
									<div className="name">Basic</div>
									<div className="amount">
										<span className="number">
											<span className="dollar">$</span>
											<span>39</span>
											<span className="period">hour</span>
										</span>
									</div>
									<div className="feature-list">
										<ul>
											<li>Web Development</li>
											<li>Advetising</li>
											<li>Game Development</li>
											<li className="disable">Music Writing</li>
											<li className="disable">Photography</li>
										</ul>
									</div>
									<a href="#" className="btn">
										<span className="animated-button"><span>Buy Now</span></span>
										<i className="icon fas fa-chevron-right"></i>
									</a>
								</div>
							</div>

							<div className="item">
								<div className="pricing-item">
									<div className="icons"><i className="fas fa-rocket"></i></div>
									<div className="name">Premium</div>
									<div className="amount">
										<span className="number">
											<span className="dollar">$</span>
											<span>59</span>
											<span className="period">hour</span>
										</span>
									</div>
									<div className="feature-list">
										<ul>
											<li>Web Development</li>
											<li>Advetising</li>
											<li>Game Development</li>
											<li>Music Writing</li>
											<li>Photography <strong>new</strong></li>
										</ul>
									</div>
									<a href="#" className="btn">
										<span className="animated-button"><span>Buy Now</span></span>
										<i className="icon fas fa-chevron-right"></i>
									</a>
								</div>
							</div>

							<div className="item">
								<div className="pricing-item">
									<div className="icons"><i className="fas fa-rocket"></i></div>
									<div className="name">Ultimate</div>
									<div className="amount">
										<span className="number">
											<span className="dollar">$</span>
											<span>59</span>
											<span className="period">hour</span>
										</span>
									</div>
									<div className="feature-list">
										<ul>
											<li>Web Development</li>
											<li>Advetising</li>
											<li>Game Development</li>
											<li>Music Writing</li>
											<li>Photography <strong>new</strong></li>
										</ul>
									</div>
									<a href="#" className="btn">
										<span className="animated-button"><span>Buy Now</span></span>
										<i className="icon fas fa-chevron-right"></i>
									</a>
								</div>
							</div>

						</div>

						{/* <!-- navigation --> */}
						<div className="navs">
							<span className="prev fas fa-chevron-left"></span>
							<span className="next fas fa-chevron-right"></span>
						</div>

					</div>

				</div>
			</div>

			{/* <!-- Section Resume --> */}
			<div className="section resume" id="section-experience">
				<div className="content">

					{/* <!-- title --> */}
					<div className="titles">
						<div className="title">Experience</div>
						<div className="subtitle">Working with</div>
					</div>

					{/* <!-- resume items --> */}
					<div className="content-carousel">
						<div className="owl-carousel" data-slidesview="2" data-slidesview_mobile="1">

							<div className="item">
								<div className="resume-item active">
									<div className="date">Present</div>
									<div className="name">The Turin <br />Olympics</div>
									<div className="single-post-text">
										<p>
											Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
										</p>
									</div>
								</div>
							</div>

							<div className="item">
								<div className="resume-item">
									<div className="date">2016-2018</div>
									<div className="name">Red <br />Drifting</div>
									<div className="single-post-text">
										<p>
											Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
										</p>
									</div>
								</div>
							</div>

							<div className="item">
								<div className="resume-item">
									<div className="date">2014-2016</div>
									<div className="name">World <br />Economy</div>
									<div className="single-post-text">
										<p>
											Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
										</p>
									</div>
								</div>
							</div>

							<div className="item">
								<div className="resume-item">
									<div className="date">2012-2014</div>
									<div className="name">Art Director <br />Facebook</div>
									<div className="single-post-text">
										<p>
											Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
										</p>
									</div>
								</div>
							</div>

						</div>

						{/* <!-- navigation --> */}
						<div className="navs">
							<span className="prev fas fa-chevron-left"></span>
							<span className="next fas fa-chevron-right"></span>
						</div>

					</div>

				</div>
			</div>

			{/* <!-- Section Resume --> */}
			<div className="section resume" id="section-education">
				<div className="content">

					{/* <!-- title --> */}
					<div className="titles">
						<div className="title">Education</div>
						<div className="subtitle">Studied at</div>
					</div>

					{/* <!-- resume items --> */}
					<div className="content-carousel">
						<div className="owl-carousel" data-slidesview="2" data-slidesview_mobile="1">

							<div className="item">
								<div className="resume-item active">
									<div className="date">2011-2012</div>
									<div className="name">Art University <br />New York</div>
									<div className="single-post-text">
										<p>
											Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
										</p>
									</div>
								</div>
							</div>

							<div className="item">
								<div className="resume-item">
									<div className="date">2010-2011</div>
									<div className="name">Programming Course <br />Paris</div>
									<div className="single-post-text">
										<p>
											Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
										</p>
									</div>
								</div>
							</div>

							<div className="item">
								<div className="resume-item">
									<div className="date">2009-2010</div>
									<div className="name">Web Design Course <br />London</div>
									<div className="single-post-text">
										<p>
											Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
										</p>
									</div>
								</div>
							</div>

							<div className="item">
								<div className="resume-item">
									<div className="date">2012-2014</div>
									<div className="name">Art Course <br />London</div>
									<div className="single-post-text">
										<p>
											Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
										</p>
									</div>
								</div>
							</div>

						</div>

						{/* <!-- navigation --> */}
						<div className="navs">
							<span className="prev fas fa-chevron-left"></span>
							<span className="next fas fa-chevron-right"></span>
						</div>

					</div>

				</div>
			</div>

			{/* <!-- Section Design Skills --> */}
			<div className="section skills" id="section-skills">
				<div className="content">

					{/* <!-- title --> */}
					<div className="titles">
						<div className="title">Design Skills</div>
						<div className="subtitle">Creative ability</div>
					</div>

					{/* <!-- skills items --> */}
					<div className="skills percent">
						<ul>
							<li>
								<div className="name">Web Layout</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
									</p>
								</div>
								<div className="progress">
									<div className="percentage" style={{width: "90%"}}>
										<span className="percent">90%</span>
									</div>
								</div>
							</li>
							<li>
								<div className="name">Illustrations</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
									</p>
								</div>
								<div className="progress">
									<div className="percentage" style={{width: "70%"}}>
										<span className="percent">70%</span>
									</div>
								</div>
							</li>
							<li>
								<div className="name">Photoshop</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
									</p>
								</div>
								<div className="progress">
									<div className="percentage" style={{width: "95%"}}>
										<span className="percent">95%</span>
									</div>
								</div>
							</li>
							<li>
								<div className="name">Graphic Design</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
									</p>
								</div>
								<div className="progress">
									<div className="percentage" style={{width: "85%"}}>
										<span className="percent">85%</span>
									</div>
								</div>
							</li>
						</ul>
					</div>

				</div>
			</div>

			{/* <!-- Section Languages Skills --> */}
			<div className="section skills" id="section-skills-lang">
				<div className="content">

					{/* <!-- title --> */}
					<div className="titles">
						<div className="title">Language Skills</div>
						<div className="subtitle">Reading and writing</div>
					</div>

					{/* <!-- skills items --> */}
					<div className="skills dotted">
						<ul>
							<li>
								<div className="name">English</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
									</p>
								</div>
								<div className="progress">
									<div className="percentage" style={{width: "90%"}}>
										<span className="percent">90%</span>
									</div>
								</div>
							</li>
							<li>
								<div className="name">German</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
									</p>
								</div>
								<div className="progress">
									<div className="percentage" style={{width: "70%"}}>
										<span className="percent">70%</span>
									</div>
								</div>
							</li>
							<li>
								<div className="name">Italian</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
									</p>
								</div>
								<div className="progress">
									<div className="percentage" style={{width: '55%'}}>
										<span className="percent">55%</span>
									</div>
								</div>
							</li>
							<li>
								<div className="name">French</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
									</p>
								</div>
								<div className="progress">
									<div className="percentage" style={{width: '85%'}}>
										<span className="percent">85%</span>
									</div>
								</div>
							</li>
						</ul>
					</div>

				</div>

			</div>

			{/* <!-- Section Coding Skills --> */}
			<div className="section skills" id="section-skills-code">
				<div className="content">
					
					{/* <!-- title --> */}
					<div className="titles">
						<div className="title">Coding Skills</div>
						<div className="subtitle">Developing on</div>
					</div>

					{/* <!-- skills items--> */}
					<div className="skills circles">
						<ul>
							<li>
								<div className="progress p90"> {/*<!-- p90 = 90% circle fill color -->*/}
									<div className="percentage"></div>
									<span>90%</span>
								</div>
								<div className="name">WordPress</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt.
									</p>
								</div>
							</li>
							<li>
								<div className="progress p75"> {/*<!-- p75 = 75% circle fill color -->*/}
									<div className="percentage"></div>
									<span>75%</span>
								</div>
								<div className="name">PHP, MYSQL</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt.
									</p>
								</div>
							</li>
							<li>
								<div className="progress p85"> {/*<!-- p85 = 85% circle fill color -->*/}
									<div className="percentage"></div>
									<span>85%</span>
								</div>
								<div className="name">JavaScript</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt.
									</p>
								</div>
							</li>
							<li>
								<div className="progress p80"> {/*<!-- p80 = 80% circle fill color -->*/}
									<div className="percentage"></div>
									<span>80%</span>
								</div>
								<div className="name">Angular</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt.
									</p>
								</div>
							</li>
							<li>
								<div className="progress p95"> {/*<!-- p95 = 95% circle fill color -->*/}
									<div className="percentage"></div>
									<span>95%</span>
								</div>
								<div className="name">HTML, CSS</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt.
									</p>
								</div>
							</li>
							<li>
								<div className="progress p90"> {/*<!-- p90 = 90% circle fill color -->*/}
									<div className="percentage"></div>
									<span>90%</span>
								</div>
								<div className="name">Python</div>
								<div className="single-post-text">
									<p>
										Etiam sit amet orci eget eros faucibus tincidunt.
									</p>
								</div>
							</li>
						</ul>
					</div>

				</div>
			</div>

			{/* <!-- Section Testimonials --> */}
			<div className="section testimonials" id="section-testimonials">
				<div className="content">

					{/* <!-- title --> */}
					<div className="titles">
						<div className="title">Reviews</div>
						<div className="subtitle">What customers say</div>
					</div>

					{/* <!-- testimonials items --> */}
					<div className="content-carousel">
						<div className="owl-carousel" data-slidesview="2" data-slidesview_mobile="1">

							<div className="item">
								<div className="reviews-item">
									<div className="image">
										<img src="images/rev1.png" alt="" />
									</div>
									<div className="info">
										<div className="name">Joseph Mackey</div>
										<div className="company">Architect</div>
									</div>
									<div className="text">
										Excellent all around! What stood out most was Jake's excellent service. He made sure our order was placed in time, even though we were ordering on a holiday.
									</div>
								</div>
							</div>

							<div className="item">
								<div className="reviews-item">
									<div className="image">
										<img src="images/rev1.png" alt="" />
									</div>
									<div className="info">
										<div className="name">James Green</div>
										<div className="company">Art Director</div>
									</div>
									<div className="text">
										Excellent all around! What stood out most was Jake's excellent service. He made sure our order was placed in time, even though we were ordering on a holiday.
									</div>
								</div>
							</div>

							<div className="item">
								<div className="reviews-item">
									<div className="image">
										<img src="images/rev1.png" alt="" />
									</div>
									<div className="info">
										<div className="name">Joseph Mackey</div>
										<div className="company">Architect</div>
									</div>
									<div className="text">
										Excellent all around! What stood out most was Jake's excellent service. He made sure our order was placed in time, even though we were ordering on a holiday.
									</div>
								</div>
							</div>

							<div className="item">
								<div className="reviews-item">
									<div className="image">
										<img src="images/rev1.png" alt="" />
									</div>
									<div className="info">
										<div className="name">James Green</div>
										<div className="company">Art Director</div>
									</div>
									<div className="text">
										Excellent all around! What stood out most was Jake's excellent service. He made sure our order was placed in time, even though we were ordering on a holiday.
									</div>
								</div>
							</div>

						</div>

						{/* <!-- navigation --> */}
						<div className="navs">
							<span className="prev fas fa-chevron-left"></span>
							<span className="next fas fa-chevron-right"></span>
						</div>

					</div>
					
				</div>
			</div>

			{/* <!-- Section Clients --> */}
			<div className="section clients" id="section-clients">
				<div className="content">

					{/* <!-- title --> */}
					<div className="titles">
						<div className="title">Clients</div>
						<div className="subtitle">My partners</div>
					</div>

					{/* <!-- clients items --> */}
					<div className="content-carousel">
						<div className="owl-carousel" data-slidesview="4" data-slidesview_mobile="2">

							<div className="item">
								<div className="clients-item">
									<a target="_blank" href="#">
										<img src="images/client2.png" alt="" />
									</a>
								</div>
							</div>

							<div className="item">
								<div className="clients-item">
									<a target="_blank" href="#">
										<img src="images/client3.png" alt="" />
									</a>
								</div>
							</div>

							<div className="item">
								<div className="clients-item">
									<a target="_blank" href="#">
										<img src="images/client1.png" alt="" />
									</a>
								</div>
							</div>

							<div className="item">
								<div className="clients-item">
									<a target="_blank" href="#">
										<img src="images/client4.png" alt="" />
									</a>
								</div>
							</div>

							<div className="item">
								<div className="clients-item">
									<a target="_blank" href="#">
										<img src="images/client2.png" alt="" />
									</a>
								</div>
							</div>

							<div className="item">
								<div className="clients-item">
									<a target="_blank" href="#">
										<img src="images/client3.png" alt="" />
									</a>
								</div>
							</div>

							<div className="item">
								<div className="clients-item">
									<a target="_blank" href="#">
										<img src="images/client1.png" alt="" />
									</a>
								</div>
							</div>

							<div className="item">
								<div className="clients-item">
									<a target="_blank" href="#">
										<img src="images/client4.png" alt="" />
									</a>
								</div>
							</div>

						</div>

						{/* <!-- navigation --> */}
						<div className="navs">
							<span className="prev fas fa-chevron-left"></span>
							<span className="next fas fa-chevron-right"></span>
						</div>

					</div>
					
					<div className="clear"></div>
				</div>
			</div>

			{/* <!-- Works --> */}
			<div className="section works" id="section-portfolio">
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
									<input type="radio" name="fl_radio" value=".box-col" />All
								</label>
							</div>
							<div className="btn-group">
								<label data-text="Video">
									<input type="radio" name="fl_radio" value=".f-video" />Video
								</label>
							</div>
							<div className="btn-group">
								<label data-text="Music">
									<input type="radio" name="fl_radio" value=".f-music" />Music
								</label>
							</div>
							<div className="btn-group">
								<label data-text="Links">
									<input type="radio" name="fl_radio" value=".f-links" />Links
								</label>
							</div>
							<div className="btn-group">
								<label data-text="Image">
									<input type="radio" name="fl_radio" value=".f-image" />Image
								</label>
							</div>
							<div className="btn-group">
								<label data-text="Gallery">
									<input type="radio" name="fl_radio" value=".f-gallery" />Gallery
								</label>
							</div>
							<div className="btn-group">
								<label data-text="Content">
									<input type="radio" name="fl_radio" value=".f-content" />Content
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
									<a href="#gallery-1" className="name has-popup-gallery">Alabaster Complete Collection</a>
								</div>
							</div>
						</div>

						<div className="box-col f-video">
							<div className="box-item">
								<div className="image">
									<a href="https://youtu.be/S4L8T2kFFck" className="has-popup-video">
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
									<a href="https://youtu.be/S4L8T2kFFck" className="name has-popup-video">Book of John Paper</a>
								</div>
							</div>
						</div>

						<div className="box-col f-image">
							<div className="box-item">
								<div className="image">
									<a href="images/works/work7.jpg" className="has-popup-image">
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
									<a href="images/works/work7.jpg" className="name has-popup-image">White Rose Photo</a>
								</div>
							</div>
						</div>

						<div className="box-col f-image">
							<div className="box-item">
								<div className="image">
									<a href="images/works/work4.jpg" className="has-popup-image">
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
									<a href="images/works/work4.jpg" className="name has-popup-image">Honest Company</a>
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
									<a href="#gallery-2" className="name has-popup-gallery">Brown Short Dog</a>
								</div>
							</div>
						</div>

						<div className="box-col f-music">
							<div className="box-item">
								<div className="image">
									<a href="https://w.soundcloud.com/player/?visual=true&#038;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&#038;show_artwork=true" className="has-popup-music">
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
									<a href="https://w.soundcloud.com/player/?visual=true&#038;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&#038;show_artwork=true" className="name has-popup-music">Brown Concrete Building</a>
								</div>
							</div>
						</div>

						<div className="box-col f-links">
							<div className="box-item">
								<div className="image">
									<a href="https://beshley.com/" className="has-popup-link" target="_blank">
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
									<a href="https://beshley.com/" className="name has-popup-link">Black Car</a>
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
									<a href="#popup-1" className="name has-popup-media">Yellow and Blue Striped</a>
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
												Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata 
												suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
											</p>
											<a href="#" className="btn">
												<span className="animated-button"><span>View Project</span></span>
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

			{/* <!-- Section Contacts Info >--> */}
			<div className="section contacts" id="section-contacts">
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
								<div className="label">Full name <strong>*</strong></div>
   								<input type="text" name="name" placeholder="ej.: Genoveva Lian Hullt" />
							</div>
							<div className="group-val">
								<div className="label">Email address <strong>*</strong></div>
								<input type="email" name="email" placeholder="example@domain.com" />
							</div>
							<div className="group-val">
								<div className="label">Message <strong>*</strong></div>
								<textarea name="message" placeholder="To Write"></textarea>
							</div>
							<div className="group-bts">
								<button type="submit" className="btn">
									<span className="animated-button"><span>Send Message</span></span>
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
						<div className="name">Paula Villalobos</div>
						<div className="subname">Consultant & Mentor</div>
						<div className="info-list">
							<ul>
								<li><strong>Age:</strong> 24</li>
								<li><strong>Residence:</strong> USA</li>
								<li><strong>Freelance:</strong> Available</li>
								<li><strong>Address:</strong> San Francisco</li>
								<li><strong>Phone:</strong> +1 256 254 84 56</li>
								<li><strong>E-mail:</strong> alejandroa@gmail.com</li>
							</ul>
						</div>
						<div className="author">Paula Villalobos</div>
					</div>

					<div className="clear"></div>
				</div>
			</div>

		</div>
		
		{/* <!-- Footer --> */}
		<footer className="footer">
			<div className="socials">
				<a target="_blank" href="https://www.facebook.com/">
					<i className="icon fab fa-facebook-f"></i>
				</a>
				<a target="_blank" href="https://www.instagram.com/">
					<i className="icon fab fa-instagram"></i>
				</a>
				<a target="_blank" href="https://dribbble.com/">
					<i className="icon fab fa-dribbble"></i>
				</a>
			</div>
		</footer>
		
	</div>

	{/* <!-- Scripts -->
	<script src="js/jquery.min.js"></script>
	<script src="js/velocity.min.js"></script>
	<script src="js/jquery.validate.js"></script>
	<script src="js/magnific-popup.js"></script>
	<script src="js/typed.js"></script>
	<script src="js/jarallax.js"></script>
	<script src="js/jarallax-video.js"></script>
	<script src="js/jarallax-element.js"></script>
	<script src="js/imagesloaded.pkgd.js"></script>
	<script src="js/isotope.pkgd.js"></script>
	<script src="js/owl.carousel.js"></script>
	<script src="js/swiper.js"></script>
	<script src="js/scripts.js"></script> */}

</div>
  )
}

export default Main
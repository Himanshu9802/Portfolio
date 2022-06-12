import React from 'react'

const About = () => {
  return (
    <div className="section about" id="About">
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
                    Pellentesque posuere. Praesent turpis. Aenean posuere,
                      tortor sed cursus feugiat, nunc augue blandit nunc, eu
                      sollicitudin urna dolor sagittis lacus.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="single-post-text">
                    <p>
                      Pellentesque posuere. Praesent turpis. Aenean posuere,
                      tortor sed cursus feugiat, nunc augue blandit nunc, eu
                      sollicitudin urna dolor sagittis lacus.
                    </p>
                  </div>
                </div>
                <div className="col col-full">
                  <div className="single-post-text">
                    <p style={{textAlign:'justify'}}>
                    Hi there, I have completed my graduation in BCA(Bachelors
                      of Computer Applications), currently I am a pursuing
                      MCA(Masters Of Computer Application) from Ganpat
                      University, Ahmedabad, Gujarat. I have also worked in firm
                      as Jr.Wordpress Developer, after leaving that job I have
                      started working as a Freelance Web Developer. I am very
                      passionate about learning new technologies & creating web
                      sites.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- info list --> */}
              <div className="info-list">
                <ul>
                  {/* <li>
                    <i class='icon fa fa-envelope' style={{paddingRight:10,color:'#FFD24C'}}></i>himanshunanikwal1@gmail.com
                  </li> */}
                  <li>
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>

              <div className="clear"></div>
            </div>
          </div>
  )
}

export default About
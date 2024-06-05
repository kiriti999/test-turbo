import "./page.css";

export default function Page(): JSX.Element {
  return (
    <body>

      <header id="topHeader">
        <ul id="topInfo">
          <li>+974 98765432</li>
          <li>info@itecnology.com</li>
        </ul>

        <nav>
          <span className="logo">iTechnology</span>
          <div className="menu-btn-3">
            <span></span>
          </div>
          <div className="mainMenu">
            <a href=""><span>Technology</span></a>
            <a href=""><span>Service</span></a>
            <a href=""><span>Portfolio</span></a>
            <a href=""><span>About Us</span></a>
            <a href=""><span>Career</span></a>
            <a href=""><span>Blog</span></a>
            <a href="">Work With Us</a>
          </div>
        </nav>
      </header>

      <section id="intro">
        <div id="intro-info">
          <div>
            <h1>Full Service Mobile App Development Company</h1>
            <div id="intro-tag-btn">
              <span>Over 100M app downloads across 1500+ projects.</span>
              <a href="" className="brand-btn">Let's Talk</a>
            </div>
          </div>
        </div>

        <div id="development-img">
          <img src="https://www.dropbox.com/s/7hwnjccu15vt90e/mobileDevlopment.svg?raw=1" alt="Mobile App Development" title="Mobile App Development" />
        </div>
      </section>

      <section id="delivery">
        <h1 className="sec-heading">Delivering Experience Since 2009</h1>
        <div className="col-5 delivery-img">
          <img src="https://www.dropbox.com/s/ipx91osglyczpdt/delivery_experience.svg?raw=1" alt="Productivity Delivering Experience" title="Delivering Experience Since 2009" />
        </div>
        <div className="col-7">
          <h2>Accelerating your business growth with Digital Experiences</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /><br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="btn-footer">
            <a href="" className="brand-btn">Contact Us</a>
          </div>
        </div>
      </section>

      <section id="services">
        <h1 className="sec-heading">Our Services</h1>
        <ul>
          <li>
            <div>
              <a href="">
                <i className="fas fa-laptop"></i><span>Stratagy and Consultant</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="">
                <i className="fas fa-users"></i><span>User Experience Design</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="">
                <i className="fas fa-mobile-alt"></i><span>Mobile App Development</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="">
                <i className="fab fa-chrome"></i><span>Web App Development</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="">
                <i className="fas fa-ribbon"></i><span>Quality Analysis and Testing</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="">
                <i className="fas fa-ticket-alt"></i><span>Application Management & Support</span>
              </a>
            </div>
          </li>
        </ul>

        <div id="service-footer">
          <a href="" className="brand-btn">View All Service</a>
        </div>
      </section>

      <section id="success-story">
        <h1 className="sec-heading">Our Success Stories</h1>

        <div className="slider">
          <div className="col-6 slide-text">
            <div>
              <h2>World Travel Protection</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
              <a href="" className="brand-btn">Contact Us</a>
            </div>
          </div>
          <div className="col-6 slide-img">
            <img src="https://www.dropbox.com/s/ipx91osglyczpdt/delivery_experience.svg?raw=1" alt="World Travel App Development" title="World Travel Protection" />
          </div>
        </div>
      </section>

      <section id="revenue" className="brand-logos">
        <h1 className="sec-heading">We Drive Growth & Revenue for the Best Companies</h1>
        <div>
          <a><img src="https://www.dropbox.com/s/lmvtthec9yn0ti6/Allianz.png?raw=1" alt="Allianz" title="Work with Allianz" /></a>
          <a><img src="https://www.dropbox.com/s/kotgq2u4qr34i2u/audi.jpg?raw=1" alt="Audi" title="Work with Audi" /></a>
          <a><img src="https://www.dropbox.com/s/t5dapt3lkz7rdhe/BMW.png?raw=1" alt="BMW" title="Work with BMW" /></a>
          <a><img src="https://www.dropbox.com/s/ocqbsbgj590ztyy/ESPN.png?raw=1" alt="ESPN" title="Work with ESPN" /></a>
          <a><img src="https://www.dropbox.com/s/2maaqxijcmbaqxg/LG.png?raw=1" alt="LG" title="Work with LG" /></a>
          <a><img src="https://www.dropbox.com/s/yn3gj203hrdjfu7/Logo_NIKE.png?raw=1" alt="Nike" title="Work with Nike" /></a>
          <a><img src="https://www.dropbox.com/s/gfxa6exv7h1ro6q/Suzuki_logo.png?raw=1" alt="Suzuki" title="Work with Suzuki" /></a>
          <a><img src="https://www.dropbox.com/s/b7vwmjf6e0owybv/Visa.svg?raw=1" alt="Visa" title="Work with Visa" /></a>
        </div>
      </section>

      <section id="highlights">
        <h1 className="sec-heading">Company Highlights</h1>

        <div className="slider">
          <div className="col-6 slide-text">
            <div>
              <h2>Team iTechnology at IBM, Americas 2019, Los Angeles</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
              <a href="" className="brand-btn">See More</a>
            </div>
          </div>
          <div className="col-6 slide-img">
            <img src="https://www.dropbox.com/s/vnkswx20c0dg5ta/analyzing.jpg?raw=1" alt="Team Work in Los Angeles" title="Company Team Work" />
          </div>
        </div>
      </section>


      <footer>
        <div>
          <span className="logo">iTechnology</span>
        </div>

        <div className="row">
          <div className="col-3">
            <span className="footer-cat">Solution</span>
            <ul className="footer-cat-links">
              <li><a href=""><span>Interprise App Development</span></a></li>
              <li><a href=""><span>Android App Development</span></a></li>
              <li><a href=""><span>ios App Development</span></a></li>
            </ul>
          </div>
          <div className="col-3">
            <span className="footer-cat">Industries</span>
            <ul className="footer-cat-links">
              <li><a href=""><span>Healthcare</span></a></li>
              <li><a href=""><span>Sports</span></a></li>
              <li><a href=""><span>ECommerce</span></a></li>
              <li><a href=""><span>Construction</span></a></li>
              <li><a href=""><span>Club</span></a></li>
            </ul>
          </div>
          <div className="col-3">
            <span className="footer-cat">Quick Links</span>
            <ul className="footer-cat-links">
              <li><a href=""><span>Reviews</span></a></li>
              <li><a href=""><span>Terms & Condition</span></a></li>
              <li><a href=""><span>Disclaimer</span></a></li>
              <li><a href=""><span>Site Map</span></a></li>
            </ul>
          </div>
          <div className="col-3" id="newsletter">
            <span className="footer-cat">Stay Connected</span>
            <form id="subscribe">
              <input type="email" id="subscriber-email" placeholder="Enter Email Address" />
              <input type="submit" value="Subscribe" id="btn-scribe" />
            </form>

            <div className="social-links social-2">
              <a href=""><i className="fab fa-facebook-f"></i></a>
              <a href=""><i className="fab fa-twitter"></i></a>
              <a href=""><i className="fab fa-linkedin-in"></i></a>
              <a href=""><i className="fab fa-instagram"></i></a>
              <a href=""><i className="fab fa-tumblr"></i></a>
              <a href=""><i className="fab fa-reddit-alien"></i></a>
            </div>

            <div id="address">
              <span className="footer-cat">Office Location</span>
              <ul>
                <li>
                  <i className="far fa-building"></i>
                  <div>Los Angeles<br />
                    Office 9B, Sky High Tower, New A Ring Road, Los Angeles</div>
                </li>
                <li>
                  <i className="fas fa-gopuram"></i>
                  <div>Delhi<br />
                    Office 150B, Behind Sana Gate Char Bhuja Tower, Station Road, Delhi</div>
                </li>
              </ul>
            </div>

          </div>
          <div className="social-links social-1 col-6">
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
            <a href=""><i className="fab fa-linkedin-in"></i></a>
            <a href=""><i className="fab fa-instagram"></i></a>
            <a href=""><i className="fab fa-tumblr"></i></a>
            <a href=""><i className="fab fa-reddit-alien"></i></a>
          </div>
        </div>
        <div id="copyright">
          &copy; All Rights Reserved 2019-2020
        </div>
        <div id="owner">
          <span>
            Designed by <a href="https://www.codingtuting.com">CodingTuting.Com</a>
          </span>
        </div>
        <a href="#topHeader" id="gotop">Top</a>
      </footer>

    </body>
  );
}

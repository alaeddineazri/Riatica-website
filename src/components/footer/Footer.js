import React from "react";
import "./footer.css";
import { AiOutlineFacebook ,AiFillYoutube,AiFillInstagram ,AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="footer-classNameic  text-left">
        <div className="section-sm">
          <div className="container">
            <div className="row row-30">
              <div className="col-sm-6 col-lg-3">
                <div className="brand-footer">
                  <span className="brand">
                    <img
                      className="brand-logo-light"
                      src="images/logo.png"
                      alt=""
                      width="150"
                      height="50"
                    />
                  </span>
                </div>
                <ul className="contact-list">
                  <li>
                    <span className="span-title">N° Telephone: </span>
                    <span>+ 216 94 800 684</span>
                  </li>
                  <li>
                    <span className="span-title">Mail: </span>
                    <span>info@riatica.com</span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-3 text-left">
                <h4 >Services</h4>
                <ul >
                  <li>
                    <span >
                      Conception Web & Branding
                    </span>
                  </li>
                  <li>
                    <span>Conception Graphique</span>
                  </li>
                  <li>
                    <span >Production Video</span>
                  </li>
                  <li>
                    <span >SEO</span>
                  </li>
                  <li>
                    <span >Digital Marketing</span>
                  </li>
                  <li>
                    <span>Infographie</span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-3">
                <h4 className="footer-title">A propos</h4>
                <ul className="list-sm footer-list text-left">
                  <li>
                    <span href="about-us.html">A propos</span>
                  </li>
                  <li>
                    <span href="team.html">Team</span>
                  </li>
                  <li>
                    <span href="portfolio.html">Portfolio</span>
                  </li>
                  <li>
                    <span href="#">Pricing</span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-3">
                <h4 className="footer-title text-left">Our social networks</h4>
                <p>
                  Join us in the social networks to receive the latest news and
                  updates.
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a href="rr"
                    className="icon-colour  home-social-icons"
                    >
                      <AiFillYoutube />
                    </a>
                  </li>

                  <li className="social-icons">
                    <a
                      href="in"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="ine"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillTwitterCircle />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiOutlineFacebook />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="section-xs">
          <div className="container">
            <div className="row row-30">
              <div className="col-md-6">
                <p className="rights">
                  <span>&copy;&nbsp; </span>
                  <span className="copyright-year"></span>
                  <span>&nbsp;</span>
                  <span>RIATICA SARL</span>
                  <span>.&nbsp; Tous droits réservés. &nbsp;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

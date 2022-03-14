import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";


const ContactUs = () => {
  return (
    <div className="container">
      <div className="row row-50 align-items-lg-center">
        <div className="col-lg-7 text-center order-lg-2">
          <div>
            <div className="block-img-decoration wow slideInRight">
            <Fade>
              <img className="w-100" src="images/home__section__3.png" alt="" />
            </Fade > 
            </div>
          </div>
        </div>
        
        <div className="col-lg-5">
        <Fade right>
          <div>
            <h2 className="wow slideInLeft" data-wow-delay="0.15s">
              Si vouz avez des questions<br></br>contactez-nous.
            </h2>
            <p className="wow slideInLeft" data-wow-delay="0.25s">
              Notre équipe de soutien professionnel s’essaie à faire de son
              mieux pour vous fournir des consultations de haute qualité
              concernant toutes les questions concernant nos services.
            </p>
          </div>
          </Fade> 
          <Fade right>
          <div className="">
            <Link to={"about"}>
              <button className="myBtn">en savoir plus</button>
            </Link>
            <Link to={"contacts"}>
              <button className="myBtn-outline-1" href="contacts.html">
                nous contacter
              </button>
            </Link>
          </div>
          </Fade> 
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

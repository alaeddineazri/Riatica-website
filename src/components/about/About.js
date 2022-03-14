import React from "react";
import { Fade } from "react-reveal";
import {Link} from 'react-router-dom'


const About = () => {
  return (
    
    <div className="container">
      <div className="row row-30 align-items-lg-center">
        <div className="col-lg-7 text-center text-lg-left">
          <div >
            <div >
            <Fade >
              <img
                className="w-100 my-2"
                src="images/home__section__2.png"
                alt=""

              />
              </Fade>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xl-5">
        <Fade cascade right>
          <div>
            <h2  className="display-5 py-3">
              Les défis créatifs sont notre passion
            </h2>
            <p  >
              Nos designers et développeurs travaillent en étroite collaboration
              pour créer un environnement de travail créatif et positif. La
              fonctionnalité est aussi importante pour nous que l'esthétique.
            </p>
          </div>
          </Fade>
          <Fade cascade right>
          <div >
            <Link to="about" >
            <button className="myBtn " href="about-us.html">
              en savoir plus
            </button>
            </Link>
            <Link to="contacts" >
            <button className="myBtn-outline-1 " href="contacts.html">
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

export default About;

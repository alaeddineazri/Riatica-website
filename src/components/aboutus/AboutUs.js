import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineWbIncandescent } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";


const AboutUs = () => {
  return (
    <div>
      <section className="bg-default section-lg">
        <div className="container">
          <div className="row row-50 align-items-lg-center">
            <div className="col-lg-7 text-center order-lg-2">
              <Zoom>
              <video
                className="w-75 p-2"
                src="images/about-us.mp4"
                autoPlay
                muted
                loop
              />
              </Zoom>
              
            </div>
            <Zoom>
            <div className="col-lg-5 my-2">
              <h2>Le travail d'équipe est la clé de la réussite d'un projet</h2>
              <p className="py-3">
                Notre équipe joue un rôle important dans le travail créatif et
                technique que nous réalisons.
              </p>
              <div className="button-block group-lg">
                <Link to={"/contacts"}>
                  <button className="myBtn">Nous Contacter</button>
                </Link>
              </div>
            </div>
            </Zoom>
          </div>
        </div>
      </section>
      <section className="container secondBG-Color ">
      <Zoom>
        <div className="row my-5">
          <div className="col-sm text-center my-5">
            <MdOutlineWbIncandescent className=" hoverMe display-3" />
            <p className="py-3">Nous Avons Des Approches Innovantes</p>
          </div>
          <div className="col-sm text-center my-5">
            <GiStairsGoal className=" hoverMe display-3" />
            <p className="py-3">On Touche Toujours Au But</p>
          </div>
          <div className="col-sm text-center my-5">
            <AiOutlineSearch className="hoverMe display-3" />
            <p className="py-3">
              {" "}
              Nous Sommes Toujours Au Courant Des Nouvelles Technologies
            </p>
          </div>
        </div>
        </Zoom>
      </section>
    </div>
  );
};

export default AboutUs;

import React from "react";
import "./swiper.css";
import Fade from "react-reveal/Fade";

const Swiper = () => {
  return (
    <div className="Container">
      <div className="d-flex flex-column justify-content-center align-items-center container">
        <Fade cascade>
          <div>
          <img className="w-100  " src="images/logo.png" alt="logo" />
          <h1 className="text-center"> Notre créativité est notre succès</h1>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Swiper;

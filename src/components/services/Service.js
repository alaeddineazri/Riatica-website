import React from "react";
import { serviceList } from "../../assets/serviceList";
import ServiceBox from "../serviceBox/ServiceBox";
import Fade from "react-reveal/Fade";

const Service = () => {
  return (
    <div className="secondBG-Color ">
      <div className="container ">
      <Fade>
        <h1 className="display-5 py-5 text-center ">
          Une large gamme de services créatifs
        </h1>
        </Fade>
        <div className=" my-5 text-start ">
          <div className="row justify-content-center m-3 g-5 ">
            {serviceList.map((el) => (
              <ServiceBox
                title={el.title}
                image={el.image}
                description={el.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

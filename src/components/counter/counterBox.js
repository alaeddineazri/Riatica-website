import React from "react";
import CountUp from "react-countup";
import "./counterBox.css";
import { Zoom } from "react-reveal";

const CounterBox = ({ value, description }) => {
  return (
    <Zoom>
      <div className="col-md ">
        <div className="conatiner counter-section">
          <div className=" val  text-center ">
            +<CountUp end={value} duration={2} startOnMount={true} />
          </div>

          <h5 className="  text-center">{description}</h5>
        </div>
      </div>

     
    </Zoom>
  );
};

export default CounterBox;

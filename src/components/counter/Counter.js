import React from "react";
import CounterBox from "./counterBox";
import { counterList } from "../../assets/counterlist";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const Counter = () => {
  return (
    <section className="counter-section  text-light text-center  p-5 my-5">
      <Zoom>
        <h1>
          Pourquoi <span style={{ color: "red" }}>R</span>
          <span style={{ color: "black" }}>IATICA</span> ?
        </h1>
      </Zoom>

      <div className="container">
        <div className="row p-2 justify-content-center">
          {counterList.map((el) => (
            <CounterBox value={el.value} description={el.description} />
          ))}
        </div>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <Zoom>
            <p className=" container p-5">
              Nous sommes une équipe de professionnelles, qui aiment ce qu'ils
              font et sont toujours en train de développer et d'améliorer leurs
              compétences.
            </p>
          </Zoom>
        </div>
        <Zoom>
        <Link to="/contacts">
          <button className="myBtn-outline-2 ">demande de devis</button>
        </Link>
        </Zoom>
      </div>
    </section>
  );
};

export default Counter;

<div>
  <h1>Pourquoi RIATICA ?</h1>
  <p className="py-3">
    Nous sommes une équipe de professionnelles, qui aiment ce qu'ils font et
    sont toujours en train de développer et d'améliorer leurs compétences.
  </p>
  <div className="button-block" data-wow-delay="0.3s">
    <button className="myBtn-outline-2 " href="services.html">
      demande de devis
    </button>
  </div>
</div>;

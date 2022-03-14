import React from "react";
import { Zoom } from "react-reveal";
import { useParams } from "react-router-dom";
import { serviceList } from "../assets/serviceList";

const ServicePage = () => {
  let params = useParams();
  const service = serviceList.find((elm) => elm.title === params.title);

  return (
    <div className="m-5 py-3">
      <section className=" my-5 section-lg bg-default section-decoration-1 section-decoration-1-mode">
        <div className="container">
          <div className="row row-50">
            <div className="col-md-5 col-lg-4 order-md-2">
              <div className="text-center box">
                <Zoom>
                  <img
                    className="w-25"
                    src={`images/service${service.image}.svg`}
                    alt="svg"
                  />
                </Zoom>
                <Zoom>
                  <h1>{service.title}</h1>
                </Zoom>
              </div>
            </div>
            <Zoom>
              {" "}
              <div className="col-md-7 col-lg-8 order-md-1">
                <div className="text-center">
                  <img
                    className="w-100"
                    src={`images/${service.image2}`}
                    alt=""
                  />
                </div>
                <div className="row row-30">
                  <div className="col-12 py-5">
                    <h6 className="underTitle">{service.title2}</h6>
                    <p>{service.description2}</p>
                  </div>
                  <div className="col-12 ">
                    <h6 className="underTitle">{service.title3}</h6>
                    <ul>
                      <li>
                        <p className="underTitle">{service.undertitle1}</p>
                        <p>{service.paragraph1}</p>
                      </li>
                      <li>
                        <p className="underTitle">{service.undertitle2}</p>
                        <p>{service.paragraph2}</p>
                      </li>
                      <li>
                        <p className="underTitle">{service.undertitle3}</p>
                        <p>{service.paragraph3}</p>
                      </li>
                      <li>
                        <p class="underTitle">{service.undertitle4}</p>
                        <p>{service.paragraph4}</p>
                      </li>
                      <li>
                        <p className="underTitle">{service.undertitle5}</p>
                        <p>{service.paragraph5}</p>
                      </li>
                      <li>
                        <p className="underTitle">{service.undertitle6}</p>
                        <p>{service.paragraph6}</p>
                      </li>
                      <li>
                        <p className="underTitle">{service.undertitle7}</p>
                        <p>{service.paragraph7}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <h6 className="underTitle">{service.title4}</h6>
                    <p>{service.paragraph9}</p>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;

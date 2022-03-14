import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Service from "../components/services/Service";
import Subscribe from "../components/sub/Subscribe";

const ServicesPage = () => {
  return (
    <div>
      <Breadcrumb path="Services" />
      <Service />
      <Subscribe />
    </div>
  );
};

export default ServicesPage;

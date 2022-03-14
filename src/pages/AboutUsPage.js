import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Contact from "../components/contact/Contact";
import Counter from "../components/counter/Counter";
import Subscribe from "../components/sub/Subscribe";
import AboutUs from "../components/aboutus/AboutUs";

const AboutUsPage = () => {
  return (
    <div>
      <Breadcrumb path="A Propos" />
      <AboutUs />
      <Counter />
      <Contact />
      <Subscribe />
    </div>
  );
};

export default AboutUsPage;

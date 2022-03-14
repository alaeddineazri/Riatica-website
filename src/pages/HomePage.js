import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import ContactUs from "../components/contactUs/ContactUs";
import Counter from "../components/counter/Counter";
import OurProject from "../components/ourProject/OurProject";
import Service from "../components/services/Service";
import Subscribe from "../components/sub/Subscribe";
import Swiper from "../components/Swiper/Swiper";
import WorkPlan from "../components/WorkPlan/WorkPlan";

const HomePage = () => {
  return (
    <div>
      <Swiper />
      <About />
      <Service />
      <ContactUs />
      <Counter />
      <WorkPlan />
      <OurProject />
      <Contact />
      <Subscribe />
    </div>
  );
};

export default HomePage;

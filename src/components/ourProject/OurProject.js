import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./ourProject.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { projectsList } from "../../assets/projectsList";
import Zoom from "react-reveal/Zoom";

const OurProject = () => {
  return (
    <div className="secondBG-Color py-5">
      <Zoom left>
      <div className="container py-2">
        <h1 className="display-3">Nos Projets</h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper "
      >
        {projectsList.map((el) => (
          <SwiperSlide key={el.id}>
            <a className="tiles" href={el.link} target="blank">
              <div className="tile">
                <img src={el.src} alt="img" />
                <div className="details">
                  <span className="title">{el.title}</span>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      </Zoom>
    </div>
  );
};

export default OurProject;

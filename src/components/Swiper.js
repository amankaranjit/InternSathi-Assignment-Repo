import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "../assets/css/Swiper.css";

import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";

const SwiperComponent = () => {
  useEffect(() => {
    var swiper = new Swiper(".banner_slider", {
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
   <>
    <div className="banner mb-70">
    <div className="banner_wrapper">
      <div className="swiper banner_slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="overlay"></div>
            <figure>
              <img src={bg1} alt="title" className="w-100"/>
              <figcaption>
                <div className="banner_content">
                  <h1>Blooming Beauty Your Beauty is Our Inspiration.</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                  <button className="btn btn-light fw-bold">Shop Now</button>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="swiper-slide">
            <figure>
              <img src={ bg2}alt="title" className="w-100"/>
              <figcaption>
                <div className="banner_content">
                  <div className="banner_info">
                    <h1>Blooming Beauty Your Beauty is Our Inspiration.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                    <button className="btn btn-light fw-bold">Shop Now</button>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
     
        </div>
        <div className="swiper-button-next swiper_nav"></div>
        <div className="swiper-button-prev swiper_nav"></div>
      </div>
    </div>
  </div>
   </>
  );
};

export default SwiperComponent;

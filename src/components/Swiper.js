import React, { useEffect } from "react";
import bg1 from "../assets/images/bg1.png";
import "../assets/css/Swiper.css"
const Swiper = () => {
  return (
    <div>
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
        </div>
        <div className="swiper-button-next swiper_nav"></div>
        <div className="swiper-button-prev swiper_nav"></div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Swiper



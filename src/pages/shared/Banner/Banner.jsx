import React from "react";
import "./Banner.css";
import banner from "../../../assets/banner.png";
const Banner = () => {
  return (
    <div className="container">
      <div className="banner-img">
        <img src={banner} alt="" />

      </div>
      <div className="text-center">
        <h1 className="text-5xl mb-2">
          Taste Bud <span className="text-lime-500">Treasure</span>
        </h1>
        <h4 className="text-xl">
          Food brings people together on many different levels. <br/> 
          It’s nourishment
          of the soul and body it’s truly love
        </h4>
      </div>
    </div>
  );
};

export default Banner;

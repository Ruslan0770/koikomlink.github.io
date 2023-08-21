import React from "react";
import "./customers.css";
import brend1 from "../../assets/img/customerbrend1.svg";
import brend2 from "../../assets/img/customerbrend2.svg";
import brend3 from "../../assets/img/customerbrend3.svg";
import brend4 from "../../assets/img/customerbrend4.svg";
import brend5 from "../../assets/img/customerbrend3.svg";
import { useState, useEffect } from "react";

export default function Customers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [brend1, brend2, brend3, brend4, brend5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? images.length - 1 : prevSlide - 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="Customers"
      >
        <div className="container">
          <h4 className="text-center">TRUSTED BY OVER 40.000</h4>
          <h2 className="text-center">Our Customers</h2>
          <div className="imgedit">
            <div className="bgimg">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  style={{
                    display:
                      index === currentSlide ||
                      index === (currentSlide + 1) % images.length ||
                      index === (currentSlide + 2) % images.length ||
                      index === (currentSlide + 3) % images.length
                        ? "block"
                        : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

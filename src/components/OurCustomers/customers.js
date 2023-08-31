import React from "react";
import "./customers.css";
import brend1 from "../../assets/img/customerbrend1.svg";
import brend2 from "../../assets/img/customerbrend2.svg";
import brend3 from "../../assets/img/customerbrend3.svg";
import brend4 from "../../assets/img/customerbrend4.svg";
import brend5 from "../../assets/img/customerbrend3.svg";
import OwlCarousel from "react-owl-carousel";

export default function Customers() {
  const images = [brend1, brend2, brend3, brend4, brend5];

  const options = {
    loop: true,
    margin: 50,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
        margin: 110,
      },
      600: {
        items: 2,
      },

      1000: {
        items: 3,
      },
    },
  };

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
              <OwlCarousel className="owl-theme" {...options}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`brend ${index + 1}`} />
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

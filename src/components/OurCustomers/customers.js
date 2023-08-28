import React from "react";
import "./customers.css";
import brend1 from "../../assets/img/customerbrend1.svg";
import brend2 from "../../assets/img/customerbrend2.svg";
import brend3 from "../../assets/img/customerbrend3.svg";
import brend4 from "../../assets/img/customerbrend4.svg";
import brend5 from "../../assets/img/customerbrend3.svg";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

export default function Customers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [brend1, brend2, brend3, brend4, brend5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
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
              <Carousel
                showThumbs={false}
                showStatus={false}
                
                autoPlay={true}
                infiniteLoop={true}
                interval={2000}
                transitionTime={500}
                selectedItem={currentIndex}
                onChange={(index) => setCurrentIndex(index)}
                stopOnHover={false}
                swipeable={true}
                emulateTouch={true}
                dynamicHeight={false}
                showArrows={false}
                showIndicators={false}
                swipeScrollTolerance={5}
                useKeyboardArrows={true}
              >
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      style={{ width: 200,height:200 }}
                      src={image}
                      alt={`brend${index + 1}`}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

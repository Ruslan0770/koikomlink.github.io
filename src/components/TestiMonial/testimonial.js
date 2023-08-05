import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import "./testimonial.css";
import people from "../../assets/img/people.svg";
import people2 from "../../assets/img/people2.svg";
import people3 from "../../assets/img/people3.svg";
import people4 from "../../assets/img/people4.svg";

export default function Testimonial() {
  return (
    <>
      <div className="Testimonial">
        <div className="container">
          <h4 className="text-center">TESTIMONIAL</h4>
          <h2 className="text-center">What Our Clients Say</h2>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="row all"
          >
            <div className="col-lg-3 col-md-6">
             <div className="boxall">
             <div className="box text-center">
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Scelerisque elit vitae
                  dui rhoncus est vestibulum metus sagittis. Amet duis est eget
                  nisi.
                </p>
                <img src={people} alt="" />
                <h5>Zahra Burnett</h5>
                <h6>Business Man</h6>
              </div>
             </div>
            </div>
            <div className="col-lg-3 col-md-6">
             <div className="boxall">
             <div className="box text-center">
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Scelerisque elit vitae
                  dui rhoncus est vestibulum metus sagittis. Amet duis est eget
                  nisi.
                </p>
                <img src={people2} alt="" />
                <h5>Saabir al-Obeid</h5>
                <h6>Business Man</h6>
              </div>
             </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="boxall">
              <div className="box text-center">
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Scelerisque elit vitae
                  dui rhoncus est vestibulum metus sagittis. Amet duis est eget
                  nisi.
                </p>
                <img src={people3} alt="" />
                <h5>Stevie Wills</h5>
                <h6>Business Man</h6>
              </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="boxall">
              <div className="box text-center">
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <AiFillStar className="iconsEdit" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Scelerisque elit vitae
                  dui rhoncus est vestibulum metus sagittis. Amet duis est eget
                  nisi.
                </p>
                <img src={people4} alt="" />
                <h5>Stevie Wills</h5>
                <h6>Business Man</h6>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

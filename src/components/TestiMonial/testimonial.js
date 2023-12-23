import React from "react";
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
          <div className="row all">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="boxall">
                <div className="box text-center">
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <p>
                    KOIKOM's IT solutions revolutionized our workflow. Their
                    team's expertise and professionalism made a significant
                    impact.
                  </p>
                  <img src={people} alt="" />
                  <h5>David Smith</h5>
                  <h6>CEO of DynamicTech</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="boxall">
                <div className="box text-center">
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <p>
                    KOIKOM revamped our website brilliantly. It's visually
                    appealing and user-friendly, boosting our online engagement.
                  </p>
                  <img src={people2} alt="" />
                  <h5>Laura Hernandez</h5>
                  <h6>Operations Manager, EcoSustain</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="boxall">
                <div className="box text-center">
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <p>
                    Thanks to KOIKOM, our network is more reliable and
                    efficient. Their tailored solutions and support are
                    top-notch.
                  </p>
                  <img src={people3} alt="" />
                  <h5>Amit Singh</h5>
                  <h6>IT Coordinator, LearnBright</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="boxall">
                <div className="box text-center">
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <AiFillStar className="iconsEdit" />
                  <p>
                    Our web visibility has soared with KOIKOM's SEO services.
                    Their strategic approach delivered measurable improvements.
                  </p>
                  <img src={people4} alt="" />
                  <h5>Sophie Chen</h5>
                  <h6>Marketing Director, CreativeEdge</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

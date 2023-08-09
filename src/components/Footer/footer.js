import React, { useEffect } from "react";
import "./footer.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  });
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row all">
            <div className="col-lg-5 col-md-6">
              <div className="box">
                <div className="left">
                  <h5>About Us</h5>
                  <hr className="lefthr" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. <br /> Duis eu et
                    interdum id. Malesuada amet <br /> rhoncus non sit. Lectus
                    pellentesque <br /> ornare felis in semper sit.
                  </p>
                  <div className="iconcontent">
                    <div className="iconedit">
                      <div className="name">Mobile</div>
                      <BsFillTelephoneFill className="icons" />
                    </div>
                    <div className="iconedit">
                      <div className="name">Email</div>

                      <SlEnvolopeLetter className="icons" />
                    </div>
                    <div className="iconedit">
                      <div className="name">Linkedin</div>

                      <AiFillLinkedin className="icons" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="box">
                <div className="center">
                  <h5>Our Services</h5>
                  <hr />
                  <Link to="./services">
                    <h6>IT Solution</h6>
                  </Link>
                  <Link to="./services">
                    <h6>Web Development</h6>
                  </Link>
                  <Link to="./services">
                    <h6>Networking Services</h6>
                  </Link>
                  <Link to="./services">
                    <h6>SEO Optimization</h6>
                  </Link>
                  <Link to="./services">
                    <h6>App Optimization</h6>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="box">
                <div className="right">
                  <h5>Useful Links</h5>
                  <hr />
                  <Link to="./aboutus">
                    <h6>About Us</h6>
                  </Link>
                  <Link to="./contactus">
                    <h6>Contact Us</h6>
                  </Link>
                  <Link to="./terms">
                    <h6 className="footer_active">Terms & Condition</h6>
                  </Link>
                  <Link to="./privacy">
                    <h6 className="footer_active">Privacy Policy</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="down">
          <div className="d-flex all">
            <div className="col-lg-5 col-8 col-md-5">
              <div className="left">
                <h6>
                  {new Date().getFullYear()} KOIKOM - All Rights Reserved.
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="right">
                <Link to="./terms">
                  <span>Terms & Condition</span>
                </Link>
                <Link to="./privacy">
                  <span>Privacy Policy</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

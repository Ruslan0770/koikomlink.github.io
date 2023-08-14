import React, { useEffect } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/footerlogo.svg"
import copy from "../../assets/img/footercopy.svg"
import icons1 from "../../assets/img/footericons1.svg"
import icons2 from "../../assets/img/footericons2.svg"
import icons3 from "../../assets/img/footericons3.svg"

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
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <div className="left">
                  <img src={logo} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Duis eu et
                    interdum id. Malesuada  amet  rhoncus non sit. Lectus
                    pellentesque ornare felis in semper sit.
                  </p>
                  <div className="iconcontent">
                    <div className="iconedit">
                      <div className="name">Mobile</div>
                      <img src={icons1} className="icons" alt="" />

                    </div>
                    <div className="iconedit">
                      <div className="name">Email</div>

                      <img src={icons2} className="icons" alt="" />
                    </div>
                    <div className="iconedit">
                      <div className="name">Linkedin</div>

                       <img src={icons3} className="icons" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="box">
                <div className="center">
                  <h5>Our Services</h5>
                  <hr  className="centerhr"/>
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

            <div className="col-lg-2 col-md-3">
              <div className="box">
                <div className="right">
                  <h5>Useful Links</h5>
                  <hr className="righthr"/>
                  <Link to="./aboutus">
                    <h6>About Us</h6>
                  </Link>
                  <Link to="./contactus">
                    <h6>Contact Us</h6>
                  </Link>
                  <Link to="./privacy">
                    <h6 className="footer_active">Privacy Policy</h6>
                  </Link>
                  <Link to="./terms">
                    <h6 className="footer_active">Terms & Condition</h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="down">
              <div className="left">
                <div className="leftbox">
                <img src={copy} alt="" />
                <h6>
                  {new Date().getFullYear()} KOIKOM - All Rights Reserved.
                </h6>
                </div>
              </div>
           
        </div>
      </div>
    </>
  );
}

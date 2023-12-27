import React, { useEffect } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/footerkoikom.png";
import footericonclogo from "../../assets/img/footercopyy.png";
import icons1 from "../../assets/img/footericons1.svg";
import icons2 from "../../assets/img/footericons2.svg";
import icons3 from "../../assets/img/footericons3.svg";

export default function Footer() {
  const navigate = useNavigate();
  const phoneNumber = "+994 50 212 81 36   ";
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleImageClick = () => {
    window.location.href = "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A93189408&keywords=koikom&origin=RICH_QUERY_SUGGESTION&position=0&searchId=bb9e7ff7-6f17-41be-968a-192d82ce36ab&sid=AEu&spellCorrectionEnabled=false";
  };
  const handleMessageClick = () => {
    window.location.href = "https://gmail.com";
  };

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
                  <p>Leading the Way in Digital Excellence and Innovation</p>
                  <div className="iconcontent">
                    <div className="iconedit">
                      <div className="name">Mobile</div>
                      <img  src={icons1} className="icons" alt="" />
                    </div>
                    <div className="iconedit">
                      <div className="name">Email</div>

                <img onClick={handleMessageClick}   src={icons2} className="icons" alt="" />
                    </div>
                    <div className="iconedit">
                      <div className="name">Linkedin</div>
                      <div onClick={handleImageClick} >

                      <img src={icons3} className="icons" alt="" />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="box">
                <div className="center">
                  <h5>Our Services</h5>
                  <hr className="centerhr" />
                  <div className="centerboxitems">
                    <Link className="linkedit" to="./services">
                      <span className="solutionhover">IT Solution</span>
                    </Link>
                  </div>
                  <div className="centerboxitems">
                    <Link className="linkedit" to="./services">
                      <span>Web Development</span>
                    </Link>
                  </div>
                  <div className="centerboxitems">
                    <Link className="linkedit" to="./services">
                      <span>Networking Services</span>
                    </Link>
                  </div>
                  <div className="centerboxitems">
                    <Link className="linkedit" to="./services">
                      <span>SEO Optimization</span>
                    </Link>
                  </div>
                  <div className="centerboxitems">
                    <Link className="linkedit" to="./services">
                      <span>App Optimization</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div className="box">
                <div className="right">
                  <h5>Useful Links</h5>
                  <hr className="righthr" />
                  <div className="rightboxitems">
                    <Link to="./aboutus">
                      <span>About Us</span>
                    </Link>
                  </div>
                  <div className="rightboxitems">
                    <Link to="./contactus">
                      <span>Contact Us</span>
                    </Link>
                  </div>
                  <div className="rightboxitems">
                    <Link to="./privacy">
                      <span className="footer_active">Privacy Policy</span>
                    </Link>
                  </div>
                  <div className="rightboxitems">
                    <Link to="./terms">
                      <span className="footer_active">Terms & Conditions</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="down">
          <div className="leftbox">
            <img src={footericonclogo} alt="" />
            <h6>{new Date().getFullYear()} KOIKOM - All Rights Reserved.</h6>
          </div>
        </div>
      </div>
    </>
  );
}

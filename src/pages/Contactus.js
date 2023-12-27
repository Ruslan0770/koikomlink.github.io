import React from "react";
import contact from "../assets/img/contactlocation.svg";
import contact2 from "../assets/img/contactlocation2.svg";
import contact3 from "../assets/img/contactlocation3.svg";
import { Link } from "react-router-dom";
import "../assets/styles/contact.css";

export default function Contactus() {
  const phoneNumber = "+994 50 212 81 36   ";
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const googleMapsUrl = `https://maps.app.goo.gl/xq65F9g12CqzxcHW7`;
  return (
    <>
      <div className="ContactUs">
        <div className="container">
          <div className="row all">
            <div className="col-lg-7 bgimageall">
              <div className="left">
                <div className="box">
                  <div className="miniboxitems">
                    <h3>Info</h3>
                    <div className="itemsEdit">
                      {/* <img src={contact} alt="" /> */}
                      <Link to={googleMapsUrl}><h2>Maqsud Əlizadə Baku,Azerbaijan</h2></Link>
                    </div>
                    <div className="itemsEdit">
                      {/* <img className="imgedit2" src={contact2} alt="" /> */}
                      <button onClick={handleCallClick}>{phoneNumber}</button>

                    </div>
                    <div className="itemsEdit">
                      {/* <img className="imgedit3" src={contact3} alt="" /> */}
                      <Link to="https://gmail.com"><h2>contact@koikom.com</h2></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 rightall">
              <div className="right">
                <h2>Contact Us</h2>
                <h6>
                  Feel free to contact us any time. We will get back to you as
                  soon as we can!
                </h6>
                <form>
                  <input
                    className="d-block"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="d-block"
                    type="text"
                    placeholder="Your Email"
                  />
                  <input
                    className="d-block"
                    type="text"
                    placeholder="Typing your message here...."
                  />
                </form>
              <Link to="/">  <button>Send</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

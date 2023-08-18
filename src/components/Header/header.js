import "./header.css";
import React from "react";
import koikom from "../../assets/img/koikom.svg";
import { Link,NavLink } from "react-router-dom";
import { useState } from "react";
import MockUp from "../Mockup/mockup";

export default function Header() {
  const [openMock, setOpenMock] = useState(false);
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const handleMenuClick = () => {
    if (window.innerWidth <= 1000) {
      setActive("nav_menu");
      setToggleIcon("nav_toggler");
      document.documentElement.style.overflow = "auto";
    }
  };

  const navToggle = (event) => {
    event.preventDefault();
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
    if (window.innerWidth <= 1000) {
      document.documentElement.style.overflow = active === "nav_menu" ? "hidden" : "auto";
    } 
    else{
      document.documentElement.style.overflow = "auto";
    }
  };

  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="headerall row">
            <div className="col-lg-4 col-5 col-md-6">
              <div className="left">
                <Link onClick={handleMenuClick} to="/">
                  <img src={koikom} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-7 col-md-6">
              <div className="right">
                <nav>
                  <ul className={active}>
                    <li className="nav_item">
                      <NavLink className="linkEdit" to="/">
                        <span onClick={handleMenuClick} className="basespan">
                          Home
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav_item">
                      <NavLink className="linkEdit" to="./aboutus">
                        <span onClick={handleMenuClick} className="spanedit">
                          About Us
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav_item">
                      <NavLink className="linkEdit" to="./services">
                        <span onClick={handleMenuClick} className="spanedit">
                          Services
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav_item">
                      <NavLink className="linkEdit" to="./contactus">
                        <span onClick={handleMenuClick} className="spanedit">
                          Contact Us
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                  <Link className="linkEdit">
                    <button
                      onClick={() => {
                        setOpenMock(true);
                      }}
                    >
                      Get it Support
                    </button>
                  </Link>
                  {openMock && <MockUp closeMock={setOpenMock} />}
                  <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                    {/* <AiOutlineMenu onClick={menu} className="menu" /> */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

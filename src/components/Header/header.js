import "./header.css";
import React from "react";
import koikom from "../../assets/img/koikom.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import MockUp from "../Mockup/mockup";
import { AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";

export default function Header() {
  const [active, setActive] = useState("nav_menu");
  const [openMock, setOpenMock] = useState(false);
  const menu = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");
  };
  const navRef = useRef();

  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="headerall row">
            <div className="col-lg-4">
              <div className="left">
                <Link to="/">
                  <img src={koikom} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="right">
                <nav>
                  <ul className={active}>
                    <li className="nav_item">
                      <Link className="linkEdit" to="/">
                        <span className="spanedit">Home</span>
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link className="linkEdit" to="./aboutus">
                        <span className="spanedit">About Us</span>
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link className="linkEdit" to="./services">
                        <span className="spanedit">Services</span>
                      </Link>
                    </li>
                    <li className="nav_item">
                      <Link className="linkEdit" to="./contactus">
                        <span className="spanedit">Contact Us</span>
                      </Link>
                    </li>
                  </ul>
                  <Link className="linkEdit" to="/">
                    <button
                      onClick={() => {
                        setOpenMock(true);
                      }}
                    >
                      Get it Support
                    </button>
                  </Link>
                  {openMock && <MockUp closeMock={setOpenMock} />}
                  <AiOutlineMenu onClick={menu} className="menu" />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <nav>
<Link className="linkEdit" to="/">
      <span className="spanedit">Home</span>
  </Link>
  <Link className="linkEdit" to="./aboutus">
      <span className="spanedit">About Us</span>
  </Link>
  <Link className="linkEdit" to="./services">
      <span className="spanedit">Services</span>
  </Link>
  <Link className="linkEdit" to="./contactus">
      <span className="spanedit">Contact Us</span>
  </Link>
  <Link className="linkEdit" to="/">
     <button onClick={()=>{setOpenMock(true)}}>Get it Support</button>
  </Link>
 {openMock&& <MockUp closeMock={setOpenMock} />}
  <AiOutlineMenu className="menu" />
  <AiOutlineClose className="close"/>
</nav> */
}

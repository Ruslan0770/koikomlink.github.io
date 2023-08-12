import React from "react";
import "./mockup.css";
import close from "../../assets/img/close.svg"

export default function MockUp({ closeMock }) {
  return (
    <>
      <div className="Alert">
        <div className="alertAll">
           <img className="closebutton" onClick={() => closeMock(false)} src={close} alt="" />
          <div className="box">
          <h3>Want to get support?</h3>
          <form>
            <input className="d-block" type="text" placeholder="Your Name" />
            <input className="d-block" type="text" placeholder="Your Email" />
            <input
              className="d-block"
              type="text"
              placeholder="Typing your message here...."
            />
          </form>
          <button className="sendbutton">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

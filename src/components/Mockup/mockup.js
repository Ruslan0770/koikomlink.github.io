import React from "react";
import "./mockup.css";

export default function MockUp({ closeMock }) {
  return (
    <>
      <div className="Alert">
        <div className="alertAll">
          <button className="closebutton" onClick={() => closeMock(false)}>
            X
          </button>
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

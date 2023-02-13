import React from "react";
import deskImg from "../assets/images/intro/intro-desk.jpg";
import mobImg from "../assets/images/intro/intro-desk.jpg";

function intro() {
  return (
    <div className="intro">
      <div className="container">
        <p className="intro__desc">
          Immersive <br /> experiences <br /> that <br /> deliver
        </p>
      </div>
      <div className="intro__bk">
        <img className="intro__deskbk" src={deskImg} alt="background intro" />
        <img src={mobImg} alt="background intro" className="intro__mobbk" />
      </div>
    </div>
  );
}

export default intro;

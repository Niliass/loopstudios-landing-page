import React from "react";

function intro() {
  return (
    <div className="intro">
      <div className="container">
        <p className="intro__desc">
          Immersive <br /> experiences <br /> that <br /> deliver
        </p>
      </div>
      <div className="intro__bk">
        <img
          className="intro__deskbk"
          src="/images/intro/intro-desk.jpg"
          alt="background intro"
        />
        <img
          src="/images/intro/intro-mob.jpg"
          alt="background intro"
          className="intro__mobbk"
        />
      </div>
    </div>
  );
}

export default intro;

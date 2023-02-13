import React, { useEffect, useState } from "react";
import Button from "./Button";
import deepEarthDesk from "../assets/images/creations/deep-earth-desk.jpg";
import deepEarthMob from "../assets/images/creations/deep-earth-mob.jpg";
import nigthDesk from "../assets/images/creations/night-desk.jpg";
import nigthMob from "../assets/images/creations/night-mob.jpg";
import soccerTeamDesk from "../assets/images/creations/soccer-team-desk.jpg";
import soccerTeamMob from "../assets/images/creations/soccer-team-mob.jpg";
import gridDesk from "../assets/images/creations/grid-desk.jpg";
import gridMob from "../assets/images/creations/grid-mob.jpg";
import fromDesk from "../assets/images/creations/from-desk.jpg";
import fromMob from "../assets/images/creations/from-mob.jpg";
import pocketDesk from "../assets/images/creations/pocket-desk.jpg";
import pocketMob from "../assets/images/creations/pocket-mob.jpg";
import curiosityDesk from "../assets/images/creations/curiosity-desk.jpg";
import curiosityMob from "../assets/images/creations/curiosity-mob.jpg";
import fisheyeDesk from "../assets/images/creations/fisheye-desk.jpg";
import fisheyeMob from "../assets/images/creations/fisheye-mob.jpg";

function Creations() {
  const [state, setState] = useState(
    document.body.clientWidth > 750 ? false : true
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (document.body.clientWidth > 750) {
        setState(false);
      } else {
        setState(true);
      }
    });
  }, []);

  return (
    <div className="creations">
      <div className="container">
        <div className="creations__header">
          <h2 className="creations__title">Our creations</h2>
          {!state && <Button />}
        </div>
        <div className="creations__container">
          <div className="creation">
            <div className="creation__img">
              <img src={deepEarthDesk} className="creation__img--desk" />
              <img src={deepEarthMob} className="creation__img--mob" />
            </div>
            <h3 className="creation__title">
              Deep <br /> earth
            </h3>
          </div>
          <div className="creation">
            <div className="creation__img">
              <img src={nigthDesk} className="creation__img--desk" />
              <img src={nigthMob} className="creation__img--mob" />
            </div>
            <h3 className="creation__title">
              Night <br /> arcade
            </h3>
          </div>
          <div className="creation">
            <div className="creation__img">
              <img src={soccerTeamDesk} className="creation__img--desk" />
              <img src={soccerTeamMob} className="creation__img--mob" />
            </div>
            <h3 className="creation__title">
              Soccer <br /> team VR{" "}
            </h3>
          </div>
          <div className="creation">
            <div className="creation__img">
              <img src={gridDesk} className="creation__img--desk" />
              <img src={gridMob} className="creation__img--mob" />
            </div>
            <h3 className="creation__title">
              The <br /> grid
            </h3>
          </div>
          <div className="creation">
            <div className="creation__img">
              <img src={fromDesk} className="creation__img--desk" />
              <img src={fromMob} className="creation__img--mob" />
            </div>
            <h3 className="creation__title">
              From up <br /> above VR
            </h3>
          </div>
          <div className="creation">
            <div className="creation__img">
              <img src={pocketDesk} className="creation__img--desk" />
              <img src={pocketMob} className="creation__img--mob" />
            </div>
            <h3 className="creation__title">
              Pocket <br /> borealis
            </h3>
          </div>
          <div className="creation">
            <div className="creation__img">
              <img src={curiosityDesk} className="creation__img--desk" />
              <img src={curiosityMob} className="creation__img--mob" />
            </div>
            <h3 className="creation__title">
              The <br /> curiosity
            </h3>
          </div>
          <div className="creation">
            <div className="creation__img">
              <img src={fisheyeDesk} className="creation__img--desk" />
              <img src={fisheyeMob} className="creation__img--mob" />
            </div>
            <h3 className="creation__title">
              Make it <br /> fisheye
            </h3>
          </div>
        </div>
        {state && <Button />}
      </div>
    </div>
  );
}

export default Creations;

import React, { useEffect, useState } from "react";
import Button from "./Button";
import Data from "../data-creations";

function Creations() {
  const [state, setState] = useState(
    document.body.clientWidth > 750 ? false : true
  );
  const [data, setData] = useState(Data);

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
          {data &&
            data.map((creation) => {
              console.log(creation.id);
              return (
                <div className="creation" key={creation.id}>
                  <div className="creation__img">
                    <img
                      src={creation.img.desk}
                      className="creation__img--desk"
                    />
                    <img
                      src={creation.img.mob}
                      className="creation__img--mob"
                    />
                  </div>
                  <h3 className="creation__title">
                    {creation.title.first}
                    <br />
                    {creation.title.last}
                  </h3>
                </div>
              );
            })}
        </div>
        {state && <Button />}
      </div>
    </div>
  );
}

export default Creations;

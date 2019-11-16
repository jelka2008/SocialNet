import React from "react";
import loader from "../../../image/loader.gif";

let Preloader = props => {
  return (
    <div>
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Preloader;

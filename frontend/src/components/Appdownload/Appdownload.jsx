import React from "react";
import "./Appdownload.css";
import { assets } from "../../assets/assets";

const Appdownload = () => {
  return (
    <div className="appdownload" id="app-download">
      <p>For better Experience download the the mobile App</p>
      <div className="app-download">
        <img src={assets.app_store} alt="" />
        <img src={assets.play_store} alt="" />
      </div>
    </div>
  );
};

export default Appdownload;

import React from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <img className="logo" src={assets.logo} alt="" />
        <h2>Admin Panel</h2>
      </div>

      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;

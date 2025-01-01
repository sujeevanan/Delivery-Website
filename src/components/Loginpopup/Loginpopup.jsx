import React, { useContext, useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/Storecontext";
import axios from "axios";

const Loginpopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("sighnUp");
  const { url, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="loginpopup">
      <form onSubmit={onLogin} className="login-container">
        <div className="login-heading">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="cross icon"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <div className="form-input-contents">
          {currentState === "sighnUp" ? (
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={onChangeHandler}
              required
              value={data.name}
            />
          ) : (
            <></>
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Enter email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="text"
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit">
          {currentState === "sighnUp" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing i agree to the terms and conditions</p>
        </div>
        <div className="login-popup-content">
          {currentState === "sighnUp" ? (
            <p>
              Already have an Account?
              <span onClick={() => setCurrentState("login")}> Login Here</span>
            </p>
          ) : (
            <p>
              Create an Account?
              <span onClick={() => setCurrentState("sighnUp")}>
                {" "}
                Click Here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Loginpopup;

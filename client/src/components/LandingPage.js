import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import hero from "../assets/images/landing-hero.jpg";

import "../landing.css";

function LandingPage() {
  return (
    

      <div className="landing--container">
      <Navbar />
      <div className="landing--wrapper">
        <div className="content--container">
          <div className="content--wrapper">
            <h3 className="landing--title">No idea what to cook for dinner?</h3>
            <h2 className="landing--title2">Don’t worry, we got your back!</h2>
            <p className="landing--desc">
              Stop eating the same dishes every day.<br></br>
              Download our app and get daily fresh and healthy recipes for free.
            </p>
            <div className="landing--cta">
            <Link to="/login">
              <button className="landing--login">Login</button>
            </Link>
            <Link to="/register">
              <button className="landing--register">Register</button>
            </Link>
            </div>
          </div>
        </div>
        <div className="img--container">
          <img className="landing--hero" alt="dummy " src={hero} />
        </div>
      </div>
      </div>
    
  );
}

export default LandingPage;

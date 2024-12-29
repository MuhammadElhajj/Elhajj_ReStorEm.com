import React, { useLocalStroage } from "react";
import "./Signin.css";
import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import LOGIN from "../images/LOGIN.jpg";
// import { Link } from 'react-router-dom'
import Google from "../images/google icon.png";
import faceIcon from "../images/Face icon.jpg";
import twitterIcon from "../images/twitter icon.jpg";

function Singin({ setSigned, setVisitUser }) {
  return (
    <div className="SignIn">
      <div className="SigninCountainer">
        <form>
          <img src={LOGIN} alt="LOGIN" className="LOGIN-photo" />
          <h1 className="signin-h1">LOGIN</h1>
          <h5 className="signin-h5">Sign in if you have a previous Account</h5>
          <div className="email-part">
            <input
              type="email"
              placeholder="Type Your Email"
              className="inputSignin"
            />
            <MdEmail className="emailIcon" />
          </div>
          <div className="password-part">
            <input
              type="password"
              placeholder="Type Your Password"
              className="inputSignin"
            />
            <HiLockClosed className="passwordlIcon" />
          </div>
          <button type="submit" className="LogInButton">
            LOG IN
          </button>
        </form>
        <div className="Remind-part">
          <form className="Remind-part-form">
            <input type="checkbox" />
            <label>Remember me</label>
          </form>
          <div className="Forget-Password-part">
            <a className="Forget-Password">Forget Password ?</a>
          </div>
        </div>
        <p className="or-LOGIN">or</p>
        <div className="register">
          <img src={Google} alt="p" className="google" />
          <img src={faceIcon} alt="p" className="facebook" />
          <img src={twitterIcon} alt="p" className="Twitter" />
          <a
            className="Visitor-signin"
            onClick={() => {
              setSigned((prev) => !prev);
              setVisitUser((prev) => !prev);
            }}
          >
            Visitor
          </a>
        </div>
      </div>
    </div>
  );
}

export default Singin;

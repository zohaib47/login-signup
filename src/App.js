import React, { useState } from "react";
import "./App.css";

import { FaUser, FaLock, FaEnvelope  } from "react-icons/fa";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className={`auth-box ${isLogin ? "show-login" : "show-signup"}`}>
        {/* Login Form */}
        <div className={`form login-form ${isLogin ? "active" : ""}`}>
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <input type="email" placeholder="Email" name="email"  required />
              <i className="icon-email">{< FaEnvelope/>}</i>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" name="password" required />
              <i className="icon-lock">{<FaLock /> } </i>
            </div>
            <button type="submit" className="auth-button">
              Login
            </button>
          </form>
          <p>
            Don't have an account?{" "}
            <span className="toggle-link" onClick={handleToggle}>
              Sign up
            </span>
          </p>
        </div>

        {/* Signup Form */}
        <div className={`form signup-form ${!isLogin ? "active" : ""}`}>
          <h2>Sign Up</h2>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Username" name="username" required />
              <i className="icon-user"> {<FaUser/>} </i>
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" name="email" required />
              <i className="icon-email"> < FaEnvelope/></i>
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" name="password" required />
              <i className="icon-lock"> {<FaLock />} </i>
            </div>
            <button type="submit" className="auth-button">
              Sign Up
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <span className="toggle-link" onClick={handleToggle}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}


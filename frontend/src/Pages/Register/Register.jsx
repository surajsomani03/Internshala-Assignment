import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-box">
      <h2>Register</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Firstname</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Lastname</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <div className="submit-btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </div>
        </form>
        <Link style={{textDecoration:"none"}} to="/login" >
          <h2 style={{ fontSize: "18px", marginTop: "20px", cursor: "pointer" }}>Already Have Account?</h2>
        </Link>
    </div>
  );
};

export default Register;

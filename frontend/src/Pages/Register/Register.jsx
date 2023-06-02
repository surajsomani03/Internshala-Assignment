import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-box">
      <h2>Register</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required />
          <label>Firstname</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required />
          <label>Lastname</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required />
          <label>Password</label>
        </div>
        <div style={{ color: "white" }}>
          <input
            type="radio"
            id="transporter"
            name="role"
            value="transporter"
            style={{ marginRight: "10px" }}
          />
          <label for="transporter" style={{ marginRight: "90px" }}>
            Transporter
          </label>
          <input
            type="radio"
            id="transporter"
            name="role"
            value="transporter"
            style={{ marginRight: "10px" }}
          />
          <label for="transporter">Manufacturer</label>
          <br />
        </div>
        <Link to="/login">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </Link>
      </form>
      <Link style={{ textDecoration: "none" }} to="/login">
        <h2 style={{ fontSize: "18px", marginTop: "20px", cursor: "pointer" }}>
          Already Have Account?
        </h2>
      </Link>
    </div>
  );
};

export default Register;

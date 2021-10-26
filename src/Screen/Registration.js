import React, { useState } from "react";
import logo from "../logo.svg";
import "./Registration.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Registration = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <div className="form-v4">
        <div className="page-content">
          <div className="form-v4-content">
            <div className="form-left">
              <h2 style={{ float: "left" }}>HIPPOS Cloud</h2>
              <p className="text-1">
                <img src={logo} alt="" />
              </p>
              <p className="text-2">
                <span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada
                nunc vel risus commodo viverra. Praesent elementum facilisis leo
                vel.
                <span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada
                nunc vel risus commodo viverra. Praesent elementum facilisis leo
                vel.
              </p>
            </div>
            <form className="form-detail">
              <h4 style={{ marginBottom: "20px" }}>
                Start your Free <b>14-day trial</b>
              </h4>

              <div className="form-row ">
                <div className="form-wrapper">
                  <label for="full_name" className="text-lable">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    className="input-text"
                    placeholder="Full Name"
                    required
                  />
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="form-row ">
                <div className="form-wrapper">
                  <label for="email" className="text-lable">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-text"
                    placeholder="Email Address"
                    required
                  />
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
              <div className="form-row ">
                <div className="form-wrapper">
                  <label for="business_type" className="text-lable">
                    Business Type
                  </label>
                  <input
                    type="text"
                    name="business_type"
                    id="business_type"
                    className="input-text"
                    placeholder=" Business Type"
                  />
                  <i className="fas fa-globe"></i>
                </div>
              </div>

              <div className="form-row ">
                <div className="form-wrapper">
                  <label for="business_name" className="text-lable">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business_name"
                    id="business_name"
                    className="input-text"
                    placeholder="Business Name"
                  />
                  <i className="fas fa-globe"></i>
                </div>
              </div>

              <div class="form-group">
                <label for="phone" className="text-lable">
                  Phone
                </label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                  style={{
                    marginTop: "30px",
                    marginLeft: "-28px",
                    marginBottom: "20px",
                    border: "1px solid #000",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
              </div>
              <div className="form-row ">
                <div className="form-wrapper">
                  <label for="password" className="text-lable">
                    Enter Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="input-text"
                    placeholder=" Enter Password"
                  />
                  <i className="fas fa-lock"></i>
                </div>
              </div>
              <div className="form-row ">
                <div className="form-wrapper">
                  <label for="business_location" className="text-lable">
                    Business location
                  </label>
                  <input
                    type="text"
                    name="business_location"
                    id="business_location"
                    className="input-text"
                    placeholder="Business location"
                  />
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="form-checkbox">
                <label className="container">
                  <p>
                    I agree to the{" "}
                    <a href="#" className="text">
                      Terms and Conditions
                    </a>
                  </p>
                  <input type="checkbox" name="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-row-last">
                <input
                  type="submit"
                  name="register"
                  className="register"
                  value="Create an Account"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

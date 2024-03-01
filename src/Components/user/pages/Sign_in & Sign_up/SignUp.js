import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import axios from "axios";
import axiosMultipartInstance from "../../../../apis/axiosMultipartInstance";
import ChildRegistrationForm from "./child-reg/child-registration-form";
import axiosInstance from "../../../../apis/axiosInstance";
function SignUp() {
  const [isChildPageActive, setIsChildPageActive] = useState(false);

  const [signup, setSignup] = useState({
    name: "Abcd",
    email: "abc@gmail.com",
    date: "",
    contact: "45454545455",
    password: "5454545455",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    date: "",
    contact: "",
    password: "",
  });

  const changefn = (e) => {
    const { name, value } = e.target;
    setSignup((preData) => ({ ...preData, [name]: value }));
    setErrors((preError) => ({ ...preError, [name]: "" }));
  };

  const handlechildBtnClick = (e) => {
    console.log("e", e);
    e.preventDefault();
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setIsChildPageActive(!isChildPageActive);
  };
  let formValid;

  const formValidating = (fieldName, value) => {
    if (!value.trim()) {
      formValid = false;
      return `${fieldName} is required`;
    }
    return "";
  };

  const submitfn = (e) => {
    e.preventDefault();

    let errors = {};

    errors.name = formValidating("Name", signup.name);
    errors.email = formValidating("Email", signup.email);
    errors.date = formValidating("Date", signup.date);
    errors.contact = formValidating("Contact Number", signup.contact);
    errors.password = formValidating("Password", signup.password);

    if (signup.name && signup.email && signup.date && signup.contact) {
      formValid = true;
    }

    setErrors(errors);

    console.log("signup data", signup);
    if (!formValid) {
      console.log('form is not valid')
    }
    
  };

  return (
    <div className="signup">
      <h1>Sign up</h1>

      <div className="regform">
        {!isChildPageActive && (
          <form>
            <div>
              <div className="input-box">
                <div className="label">
                  {" "}
                  <label>Name</label>{" "}
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  name="name"
                  onChange={changefn}
                  value={signup.name}
                />

                {errors.name && (
                  <div className="text-danger">{errors.name}</div>
                )}
              </div>

              <div className="input-box">
                <div className="label">
                  {" "}
                  <label>Email</label>{" "}
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signup.email}
                  onChange={changefn}
                />

                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>

              <div className="input-box">
                <div className="label">
                  {" "}
                  <label>DOB</label>{" "}
                </div>
                <input
                  type="date"
                  name="date"
                  value={signup.date}
                  onChange={changefn}
                />

                {errors.date && (
                  <div className="text-danger">{errors.date}</div>
                )}
              </div>

              <div className="input-box">
                <div className="label">
                  {" "}
                  <label>Contact</label>{" "}
                </div>
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contact"
                  value={signup.contact}
                  onChange={changefn}
                />

                {errors.contact && (
                  <div className="text-danger">{errors.contact}</div>
                )}
              </div>
              <div className="input-box">
                <div className="label">
                  {" "}
                  <label>Password</label>{" "}
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  value={signup.password}
                  name="password"
                  onChange={changefn}
                />

                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>

              <div className="text">
                <h5>
                  Already have an account?{" "}
                  <Link to={"/sign_in"}>Login now</Link>
                </h5>
              </div>
            </div>
          </form>
        )}

        {isChildPageActive && (
          <div>
            <ChildRegistrationForm parentData={signup}/>
          </div>
        )}

        <div className="inbutton">
          {/* <button type="submit">
              Sign up <Icon icon="grommet-icons:connect" className="icon" />
            </button> */}
        </div>
        <div className="page-switch-btn-container">
          {!isChildPageActive && (
            <button
              onClick={handlechildBtnClick}
              className="register-child-btn"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;

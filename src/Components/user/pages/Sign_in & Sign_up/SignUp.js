import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import axios from "axios";
import axiosMultipartInstance from "../../../../apis/axiosMultipartInstance";
import ChildRegistrationForm from "./child-reg/child-registration-form";
import axiosInstance from "../../../../apis/axiosInstance";
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
function SignUp() {
  const [isChildPageActive, setIsChildPageActive] = useState(false);

  const [signup, setSignup] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    profilePicture: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",

    contact: "",
    password: "",
    profilePicture: "",
  });

  const changefn = (e) => {
    const { name, value } = e.target;
    setSignup((preData) => ({ ...preData, [name]: value }));
    setErrors((preError) => ({ ...preError, [name]: "" }));
  };

  const handlechildBtnClick = () => {
    setIsChildPageActive(!isChildPageActive);
  };

  let formValid;

  const formValidating = (fieldName, value) => {
    if (!value?.trim()) {
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

    errors.contact = formValidating("Contact Number", signup.contact);
    errors.password = formValidating("Password", signup.password);
    errors.profilePicture = formValidating("Image", signup.profilePicture);

    if (signup.name && signup.email && signup.contact) {
      formValid = true;
    }

    setErrors(errors);

    console.log("signup data", signup);
    if (!formValid) {
      console.log("form is not valid");
    } else {
      handlechildBtnClick();
    }
  };

  return (
    <>
      <Navbar />

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
                    <label>Contact</label>{" "}
                  </div>
                  <input
                    type="text"
                    maxLength="10"
                    minLength="10"
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

                <div className="files">
                  <div className="label">
                    {" "}
                    <label>Profile Picture</label>{" "}
                  </div>
                  <input
                    type="file"
                    name="profilePicture"
                    onChange={changefn}
                  />

                  {errors.profilePicture && (
                    <div className="text-danger errortext">
                      {errors.profilePicture}
                    </div>
                  )}
                </div>

                <div className="text">
                  <br />
                  <br />
                  <div className="mt-5">
                    <p
                      style={{ fontSize: "20px" }}
                      className="font-weight-bold"
                    >
                      Become a counselor?{" "}
                      <Link to={"/counselor_signup"}>Register here</Link>
                    </p>
                    <p
                      style={{ fontSize: "20px" }}
                      className="font-weight-bold"
                    >
                      Become a resouce person?{" "}
                      <Link to={"/resourceperson_signup"}>Register here</Link>
                    </p>
                  </div>
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
              <ChildRegistrationForm parentData={signup} />
            </div>
          )}

          <div className="inbutton">
            {/* <button type="submit">
              Sign up <Icon icon="grommet-icons:connect" className="icon" />
            </button> */}
          </div>
          <div className="page-switch-btn-container">
            {!isChildPageActive && (
              <button onClick={submitfn} className="register-child-btn">
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;

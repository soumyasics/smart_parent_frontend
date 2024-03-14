import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import axios from "axios";
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../apis/axiosInstance";
function SignIn() {
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const changefn = (e) => {
    const { name, value } = e.target;
    setSignin((preData) => ({ ...preData, [name]: value }));
    setErrors((preErrors) => ({ ...preErrors, [name]: "" }));
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

    errors.email = formValidating("Email", signin.email);
    errors.password = formValidating("Password", signin.password);

    setErrors(errors);
    if (signin.email && signin.password) {
      formValid = true;
    }

    if (formValid) {
      axiosInstance
        .post("/loginParent", signin)
        .then((res) => {
          console.log("data", res.data.data);

          if (res.data.status == 200) {
            let msg = res?.data?.msg || null;
            console.log("res data chec", res.data.data);
            localStorage.setItem("parentData", JSON.stringify(res.data.data));
            alert(msg);
            navigate("/");
            return;
          } else {
            alert("Please check your email id and password.");
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      console.log("form not valid", formValid);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup">
        <h1>Sign In</h1>

        <div className="regformsignin">
          <form onSubmit={submitfn}>
            <div className="input-box signin-input">
              <div className="labelsignin">
                {" "}
                <label>Email</label>{" "}
              </div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={changefn}
              />
              {errors.email && (
                <div className="text-danger errortext">{errors.email}</div>
              )}
            </div>

            <div className="input-box signin-input">
              <div className="labelsignin">
                {" "}
                <label>Password</label>{" "}
              </div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={changefn}
              />
              {errors.password && (
                <div className="text-danger errortext">{errors.password}</div>
              )}
            </div>

            <div className="text1">
              <h5>
                <Link to={"/reset_password"}>Reset Password</Link>
              </h5>
            </div>

            <div className="text2">
              <h5>
                <Link to={"/sign_up"}>Signup</Link>
              </h5>
            </div>

            <div className="inbutton d-flex justify-content-center rpbtn">
              <button
                id="signupbtn"
                type="submit"
                className="btn btn-primary icon"
              >
                Sign in <Icon icon="grommet-icons:connect" className="icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;

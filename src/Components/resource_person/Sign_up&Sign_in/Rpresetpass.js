import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import axiosInstance from "../../../apis/axiosInstance";

function Rpresetpass() {
  const [rpreset, setRpreset] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const changefn = (e) => {
    const { name, value } = e.target;
    setRpreset((preRpreset) => ({ ...preRpreset, [name]: value }));
    setErrors((preErrors) => ({ ...preErrors, [name]: "" }));
  };

  let formValid = true;

  const submitfn = (e) => {
    e.preventDefault();

    let errors = {};

    if (!rpreset.email.trim()) {
      formValid = false;
      errors.email = "Email is required";
    }
    if (!rpreset.password.trim()) {
      formValid = false;
      errors.password = "Password is required";
    } else if (rpreset.password.length < 5) {
      errors.password = "Password should be atleast 6 characters";
    }

    if (rpreset.confirmpassword !== rpreset.password) {
      formValid = false;
      errors.confirmpassword = "Password not matched";
    }

    if (!rpreset.confirmpassword.trim()) {
      formValid = false;
      errors.confirmpassword = "Confirm Password is required";
    }

    setErrors(errors);

    if (formValid) {
      // alert("Form is Submitted")

      axiosInstance
        .post("/rpforgotPwd", rpreset)
        .then((res) => {
          console.log(res, "data");

          if (res.status == 200) {
            alert(res.data.msg);
            navigate("/admin");
          } else if (res.status == 500) {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err, "err");
        });
    } else {
      console.log("form", formValid);
    }
  };

  return (
    <div className="signup passreset">
      <h1>Reset-Password</h1>

      <div className="resetform">
        <form onSubmit={submitfn}>
          <div className="input-box">
            <div className="label">
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

          <div className="input-box">
            <div className="label">
              {" "}
              <label>New Password</label>{" "}
            </div>
            <input
              type="password"
              placeholder="New Password"
              name="password"
              onChange={changefn}
            />

            {errors.password && (
              <div className="text-danger errortext">{errors.password}</div>
            )}
          </div>

          <div className="input-box">
            <div className="label">
              {" "}
              <label>Confirm Password</label>{" "}
            </div>
            <input
              type="password"
              placeholder=" Confirm Password"
              name="confirmpassword"
              onChange={changefn}
            />

            {errors.confirmpassword && (
              <div className="text-danger errortext">
                {errors.confirmpassword}
              </div>
            )}
          </div>

          <div className="resettext">
            <h6>
              Don't have an account? <Link to={""}>Register</Link>
            </h6>
          </div>

          <div className="resetbutton">
            <button type="submit">
              {" "}
              Change <Icon icon="grommet-icons:connect" className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Rpresetpass;

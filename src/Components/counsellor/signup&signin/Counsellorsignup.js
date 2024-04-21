import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import axios from "axios";
import axiosInstance from "../../../apis/axiosInstance";

function Counsellorsignup() {
  const navigate = useNavigate();

  const [counselorsignup, setCounselorsignup] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
    qualification: "",
    experienceYear: "",
    password: "",
    certificateImg: null,
    profilePicture: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
    qualification: "",
    experienceYear: "",
    password: "",
    certificateImg: "",
    profilePicture: "",
  });
  let formValid = true;

  const changefn = (e) => {
    const { name, value } = e.target;
    setCounselorsignup({ ...counselorsignup, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setCounselorsignup({ ...counselorsignup, [name]: files[0] });
  };

  const submitfn = (e) => {
    e.preventDefault();

    let errors = {};

    if (!counselorsignup.name.trim()) {
      formValid = false;
      errors.name = "Name is required";
    }

    if (!counselorsignup.age.trim()) {
      formValid = false;
      errors.age = "Age is required";
    }

    if (!counselorsignup.email.trim()) {
      formValid = false;
      errors.email = "Email is required";
    }

    if (!counselorsignup.contact.trim()) {
      formValid = false;
      errors.contact = "Contact number is required";
    } else if (counselorsignup.contact.length < 10) {
      errors.contact = "Enter valid number";
    }

    if (!counselorsignup.qualification.trim()) {
      formValid = false;
      errors.qualification = "Qualification field is required";
    }

    if (!counselorsignup.experienceYear.trim()) {
      formValid = false;
      errors.experienceYear = "Experience field is required";
    }

    if (!counselorsignup.password.trim()) {
      formValid = false;
      errors.password = "Password is required";
    } else if (counselorsignup.password.length < 5) {
      errors.password = "Password should be atleast 6 characters";
    }


    setErrors(errors);
    // registerCouncilar

    if (
      counselorsignup.name &&
      counselorsignup.age &&
      counselorsignup.email &&
      counselorsignup.contact &&
      counselorsignup.qualification &&
      counselorsignup.experienceYear &&
      counselorsignup.password
    ) {
      formValid = true;
    }
    if (formValid) {
      // sendDataToServer();

      e.preventDefault();

      const formData = new FormData();
      formData.append("name", counselorsignup.name);
      formData.append("age", counselorsignup.age);
      formData.append("email", counselorsignup.email);
      formData.append("contact", counselorsignup.contact);
      formData.append("qualification", counselorsignup.qualification);
      formData.append("experienceYear", counselorsignup.experienceYear);
      formData.append("password", counselorsignup.password);
      formData.append("files", counselorsignup.profilePicture);
      formData.append("files", counselorsignup.certificateImg);

      console.log("counselor form ", formData);

      axiosInstance
        .post("/registerCouncilar", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("Response:", res);
          alert("Waiting for Admin approval..");
          setTimeout(() => {
            navigate("/admin");
          }, 1500);
        })
        .catch((err) => {
          console.error("Error:", err);
          let msg = err?.response?.data?.message || "Error occurred";
          alert(msg);
        });
    } else {
      console.log("form is not valid", formValid);
      console.log("data entered", counselorsignup);
    }
  };

  return (
    <div className="signup">
      <h1>Counselor Sign up</h1>

      <div className="regform">
        <form onSubmit={submitfn}>
          <div className="input-box">
            <div className="label">
              {" "}
              <label>Name</label>{" "}
            </div>
            <input
              type="text"
              placeholder="Username"
              name="name"
              value={counselorsignup.name}
              onChange={changefn}
            />

            {errors.name && (
              <div className="text-danger errortext">{errors.name}</div>
            )}
          </div>

          <div className="input-box">
            <div className="label">
              {" "}
              <label>Age</label>{" "}
            </div>
            <input
              type="text"
              placeholder="Age"
              name="age"
              value={counselorsignup.age}
              onChange={changefn}
            />

            {errors.age && (
              <div className="text-danger errortext">{errors.age}</div>
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
              value={counselorsignup.email}
              onChange={changefn}
            />

            {errors.email && (
              <div className="text-danger errortext">{errors.email}</div>
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
              minLength="10"
              maxLength="10"
              name="contact"
              value={counselorsignup.contact}
              onChange={changefn}
            />

            {errors.contact && (
              <div className="text-danger errortext">{errors.contact}</div>
            )}
          </div>

          <div className="input-box">
            <div className="label">
              {" "}
              <label>Qualification</label>{" "}
            </div>

            <select
              name="qualification"
              value={counselorsignup.qualification}
              onChange={changefn}
            >
              <option selected>Select One</option>
              <option value="No formal education">No formal education</option>
              <option value="Primary education">Primary education</option>
              <option value="Secondary education or high school">
                Secondary education or high school
              </option>
              <option value="Vocational qualification">
                Vocational qualification
              </option>
              <option value="Bachelor's degree">Bachelor's degree</option>
              <option value="Master's degree">Master's degree</option>
              <option value="Doctorate or higher">Doctorate or higher</option>
            </select>

            {errors.qualification && (
              <div className="text-danger errortext">
                {errors.qualification}
              </div>
            )}
          </div>

          <div className="input-box">
            <div className="label">
              {" "}
              <label>Experience</label>{" "}
            </div>
            <input
              type="text"
              placeholder="Experience"
              name="experienceYear"
              value={counselorsignup.experienceYear}
              onChange={changefn}
            />

            {errors.experienceYear && (
              <div className="text-danger errortext">
                {errors.experienceYear}
              </div>
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
              name="password"
              value={counselorsignup.password}
              onChange={changefn}
            />

            {errors.password && (
              <div className="text-danger errortext">{errors.password}</div>
            )}
          </div>

          <div className="files">
            <div className="label">
              {" "}
              <label>Certificate</label>{" "}
            </div>
            <input
              type="file"
              name="certificateImg"
              accept="image/*"
              onChange={handleFileChange}            />

            {errors.certificateImg && (
              <div className="text-danger errortext">
                {errors.certificateImg}
              </div>
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
              onChange={handleFileChange}/>

            {errors.profilePicture && (
              <div className="text-danger errortext">
                {errors.profilePicture}
              </div>
            )}
          </div>

          <div className="text">
            <h5>
              Already have an account? <Link to="/admin">Login now</Link>
            </h5>
          </div>

          <div className="text-center inbutton">
            <button className="btn btn-primary" type="submit">
              Sign up <Icon icon="grommet-icons:connect" className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Counsellorsignup;

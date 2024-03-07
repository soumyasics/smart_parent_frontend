import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import "./Rpsignup.css"

function Rpsignup() {
  const navigate = useNavigate();
  const [rpsignup, setRpsignup] = useState({
    name: "rp name",
    age: "20",
    email: "rp@gmail.com",
    contact: "1234597890",
    qualification: "No formal education",
    experienceYear: "20",
    password: "12341234",
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
    profilePicture: "",
    certificateImg: "",
  });
  let formValid = true;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRpsignup({ ...rpsignup, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setRpsignup({ ...rpsignup, [name]: files[0] });
  };

  const handleSubmit = (e) => {

    let errors = {};

    if (!rpsignup.name.trim()) {
      formValid = false;
      errors.name = "Name is required";
    }

    if (!rpsignup.age.trim()) {
      formValid = false;
      errors.age = "Age is required";
    }

    if (!rpsignup.email.trim()) {
      formValid = false;
      errors.email = "Email is required";
    }

    if (!rpsignup.contact.trim()) {
      formValid = false;
      errors.contact = "Contact number is required";
    } else if (rpsignup.contact.length < 10) {
      errors.contact = "Enter 10 digits valid number";
    }

    if (!rpsignup.qualification.trim()) {
      formValid = false;
      errors.qualification = "Qualification field is required";
    }

    if (!rpsignup.experienceYear.trim()) {
      formValid = false;
      errors.experienceYear = "Experience field is required";
    }

    if (!rpsignup.password.trim()) {
      formValid = false;
      errors.password = "Password is required";
    } else if (rpsignup.password.length < 5) {
      errors.password = "Password should be atleast 6 characters";
    }

    setErrors(errors);




    if (
      rpsignup.name &&
      rpsignup.age &&
      rpsignup.email &&
      rpsignup.contact &&
      rpsignup.qualification &&
      rpsignup.experienceYear &&
      rpsignup.password
    ) {
      formValid = true;
    }
    if (formValid) {
      // sendDataToServer();


      e.preventDefault();
      //Soumya
      const formData = new FormData();
      formData.append("name", rpsignup.name);
      formData.append("age", rpsignup.age);
      formData.append("email", rpsignup.email);
      formData.append("contact", rpsignup.contact);
      formData.append("qualification", rpsignup.qualification);
      formData.append("experienceYear", rpsignup.experienceYear);
      formData.append("password", rpsignup.password);
      formData.append("files", rpsignup.profilePicture);
      formData.append("files", rpsignup.certificateImg);

      console.log('rp form ', formData)

      axiosInstance
        .post("registerRp", formData, {
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
      console.log("data entered", rpsignup);
    }




  };

  return (
    <div className="signup">
      <h1>Resource Person Sign up</h1>

      <div className="regform">
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <div className="label">
              {" "}
              <label>Name</label>{" "}
            </div>
            <input
              type="text"
              placeholder="Name"
              value={rpsignup.name}
              name="name"
              onChange={handleInputChange}
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
              value={rpsignup.age}
              onChange={handleInputChange}
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
              value={rpsignup.email}
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
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
              value={rpsignup.contact}
              placeholder="Contact Number"
              name="contact"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              value={rpsignup.qualification}
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
              value={rpsignup.experienceYear}
              onChange={handleInputChange}
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
              value={rpsignup.password}
              name="password"
              onChange={handleInputChange}
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
            <input type="file" name="certificateImg" accept="image/*" onChange={handleFileChange} />

            {errors.certificateImg && (
              <div className="text-danger errortext">
                {errors.img}
              </div>
            )}
          </div>

          <div className="files">
            <div className="label">
              {" "}
              <label>Profile Picture</label>{" "}
            </div>
            <input type="file" name="profilePicture" onChange={handleFileChange} />

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

          <div className="inbutton d-flex justify-content-center rpbtn">
            <button
              type="submit"
              className="btn btn-primary icon"

            >
              Sign up <Icon icon="grommet-icons:connect" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Rpsignup;

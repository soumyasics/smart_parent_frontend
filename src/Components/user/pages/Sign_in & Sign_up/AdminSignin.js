import React, { useState } from "react";
import axios from "axios";
import "./Admin.css";
import { useNavigate,Link } from "react-router-dom";
import { useEffect } from "react";

function AdminSignin() {

    useEffect(() => {
      setSelectedButton('button1');
    }, []);

    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  let formValid;
  const formValidating = (fieldName, value) => {
    if (!value.trim()) {
      formValid = false;
      return `${fieldName} is required`;
    }
    return "";
  };

  const Navigate=useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((preError) => ({ ...preError, [name]: "" }));
  };

  const [selectedButton, setSelectedButton] = useState(null);
  const [loginURL, setloginURL] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    switch (button) {
      case "button1":
        setloginURL("admin");
        break;
      case "button2":
        setloginURL(
          "http://localhost:4009/smart_parent/loginRp"
        );
        break;
      case "button3":
        setloginURL("http://localhost:4009/smart_parent/loginCouncilar");
        break;
      default:
        console.error("Invalid action");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = {};
    errors.email = formValidating("Email", formData.email);
    errors.password = formValidating("Password", formData.password);

    setErrors(errors);
    // You can perform actions like submitting the form data to a server here
    try {
      if (loginURL === "admin") {
        var Adminemail="Admin@gmail.com"
        var Adminpassword="Admin@123"
        if(Adminemail == formData.email && Adminpassword == formData.password){
          alert("Admin login Sucessfully")
          Navigate('/admin_home')
        }else{
          alert("Please enter correct data")
        }
      } else {
        const response = await axios.post(loginURL, formData);
        console.log(response,"o");

        if (response.data) {
          if (selectedButton === "button2") {
            //handle login sucess - resource 
            alert(response.data.message)
            Navigate("/resource_person_home")
          }
          if (selectedButton === "button3") {
            //handle login sucess - counsiler 
            alert(response.data.message)
            Navigate("/counsellor")
          }
        } else {
          alert(response.data.message)
          Navigate('/')
        }
        console.log("Login successful:", response.data);
      }
      // Handle successful login, such as setting user authentication token, redirecting, etc.
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }

    // console.log("Form submitted with data:", formData, loginURL);
  };

  return (
    <div>    <h1 className="admin_login text-center m-3">Sign In</h1>

    <div className="Adminborder">
      <div className="buttonGroup">
        <button id="button"
          className={selectedButton === "button1" ? "selected" : "unselected"}
          onClick={() => handleButtonClick("button1")}
        >
          Admin
        </button>
        <button id="button"
          className={selectedButton === "button2" ? "selected" : "unselected"}
          onClick={() => handleButtonClick("button2")}
        >
          Resource Person
        </button>
        <button id="button"
          className={selectedButton === "button3" ? "selected" : "unselected"}
          onClick={() => handleButtonClick("button3")}
        >
          Councilor
        </button>
      </div>
      <div className="container loginForm" id="loginForm">
        <div className="">
          <form>
            <div className="form-group has-feedback" id="form-group">
              <input
                type="email"
                className="form-control form-input"
                id="form-controler"
                placeholder=""
                required=""
                onChange={handleInputChange}
                name="email"
              />
              <label className="" htmlFor="">
                Email
              </label>
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
              <span className="glyphicon form-control-feedback" />
            </div>
            <div className="form-group has-feedback"  id="form-group">
              <input
                type="password"
                className="form-control form-input"
                id="form-controler"
                placeholder=""
                required=""
                name="password"
                onChange={handleInputChange}
              />
              <label className="" htmlFor="">
                Password
              </label>
              {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}

              <span className="glyphicon form-control-feedback" />
            </div>
          </form>
          <div className="form-inline">
            <div className="form-group pull-right" id="form-group">
              {selectedButton !== "button1" ? 
                <label id="" className="loginPwReset">
                  <span>  { selectedButton =="button2" ? <Link to>Forgot Passwort ?</Link>:<Link >Forgot Passwort ?</Link>}              
                   
                  </span>
                  <span className="ms-5"> 
                  {
                    selectedButton == "button2" ? <Link to="">Sign Up</Link>:<Link>Sign Up</Link>

                  }               
                  </span>
              </label> : ''}
            </div>
          </div>
          <button
            id="submit"
            type="submit"
            className="btn btn-default submit"
            value="Login"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AdminSignin;

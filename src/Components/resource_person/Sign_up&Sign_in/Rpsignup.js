import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify-icon/react'
import "./Rpsignup.css"
import axios from "axios"

function Rpsignup() {

    const [rpsignup, setRpsignup] = useState({

        name: "",
        age: "",
        email: "",
        contact: "",
        qualification: "",
        experienceYear: "",
        password: "",
        certificateImg: "",
        profilePicture: ""

    })

    const [errors, setErrors] = useState({

        name: "",
        age: "",
        email: "",
        contact: "",
        qualification: "",
        experienceYear: "",
        password: "",
        certificateImg: "",
        profilePicture: ""

    })

    const changefn = (e) => {
        const { name, value } = e.target
        setRpsignup(preData => ({ ...preData, [name]: value }))
        setErrors(preErrors => ({ ...preErrors, [name]: "" }))
    }

    let formValid = true

    const submitfn = (e) => {
        e.preventDefault();

        let errors = {}

        if (!rpsignup.name.trim()) {
            formValid = false
            errors.name = "Name is required"
        }

        if (!rpsignup.age.trim()) {
            formValid = false
            errors.age = "Age is required"
        }

        if (!rpsignup.email.trim()) {
            formValid = false
            errors.email = "Email is required"
        }

        if (!rpsignup.contact.trim()) {
            formValid = false
            errors.contact = "Contact number is required"
        }
        else if (rpsignup.contact.length < 10) {
            errors.contact = "Enter valid number"
        }

        if (!rpsignup.qualification.trim()) {
            formValid = false
            errors.qualification = "Qualification field is required"
        }

        if (!rpsignup.experienceYear.trim()) {
            formValid = false
            errors.experienceYear = "Experience field is required"
        }

        if (!rpsignup.password.trim()) {
            formValid = false
            errors.password = "Password is required"
        }
        else if (rpsignup.password.length < 5) {
            errors.password = "Password should be atleast 6 characters"
        }

        if (!rpsignup.certificateImg.trim()) {
            formValid = false
            errors.certificateImg = "No files choosen"
        }

        if (!rpsignup.profilePicture.trim()) {
            formValid = false
            errors.profilePicture = "No files choosen"
        }

        setErrors(errors)

        if (formValid) {

            axios.post("http://localhost:4009/smart_parent/registerRp", rpsignup, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
                .then((res) => { console.log("response", res); alert("Form is submitted") })
                .catch((err) => { console.log("error", err);
                alert(err.response.data.message)
            
            })

        }
        else { console.log("form", formValid) }

    }
    return (
        <div className='signup'>

            <h1>Resource Person Sign up</h1>

            <div className='regform'>

                <form onSubmit={submitfn} >

                    <div className="input-box">
                        <div className='label'> <label>Name</label>  </div>
                        <input type="text" placeholder="Name" name="name" onChange={changefn} />

                        {errors.name && <div className="text-danger errortext">{errors.name}</div>}

                    </div>


                    <div className="input-box">
                        <div className='label'> <label>Age</label>  </div>
                        <input type="text" placeholder="Age" name="age" onChange={changefn} />

                        {errors.age && <div className="text-danger errortext">{errors.age}</div>}

                    </div>


                    <div className="input-box">
                        <div className='label'> <label>Email</label>  </div>
                        <input type="email" placeholder="Email" name="email" onChange={changefn} />

                        {errors.email && <div className="text-danger errortext">{errors.email}</div>}

                    </div>


                    <div className="input-box">
                        <div className='label'> <label>Contact</label>  </div>
                        <input type="text" placeholder="Contact Number" name="contact" onChange={changefn} />

                        {errors.contact && <div className="text-danger errortext">{errors.contact}</div>}

                    </div>


                    <div className='input-box'>
                        <div className='label'> <label>Qualification</label>  </div>
                        <select name='qualification' onChange={changefn}>
                            <option selected>Select One</option>
                            <option value="No formal education" >No formal education</option>
                            <option value="Primary education" >Primary education</option>
                            <option value="Secondary education or high school" >Secondary education or high school</option>
                            <option value="Vocational qualification" >Vocational qualification</option>
                            <option value="Bachelor's degree" >Bachelor's degree</option>
                            <option value="Master's degree" >Master's degree</option>
                            <option value="Doctorate or higher" >Doctorate or higher</option>
                        </select>

                        {errors.qualification && <div className="text-danger errortext">{errors.qualification}</div>}

                    </div>


                    <div className="input-box">
                        <div className='label'> <label>Experience</label>  </div>
                        <input type="text" placeholder="Experience" name="experienceYear" onChange={changefn} />

                        {errors.experienceYear && <div className="text-danger errortext">{errors.experienceYear}</div>}

                    </div>


                    <div className="input-box">
                        <div className='label'> <label>Password</label>  </div>
                        <input type="password" placeholder="Password" name="password" onChange={changefn} />

                        {errors.password && <div className="text-danger errortext">{errors.password}</div>}

                    </div>


                    <div className='files' >
                        <div className='label'> <label>Certificate</label>  </div>
                        <input type='file' name="certificateImg" onChange={changefn} />

                        {errors.certificateImg && <div className="text-danger errortext">{errors.certificateImg}</div>}

                    </div>


                    <div className='files'>
                        <div className='label'> <label>Profile Picture</label>  </div>
                        <input type='file' name="profilePicture" onChange={changefn} />

                        {errors.profilePicture && <div className="text-danger errortext">{errors.profilePicture}</div>}

                    </div>

                    <div className="text">
                        <h5>Already have an account? <Link to="">Login now</Link></h5>
                    </div>

                    <div className="inbutton">
                        <button type="submit">Sign up  <Icon icon="grommet-icons:connect" className='icon' /></button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Rpsignup
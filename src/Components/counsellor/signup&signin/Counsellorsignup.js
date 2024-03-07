import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify-icon/react'
import axiosMultipartInstance from '../../../apis/axiosMultipartInstance'

function Counsellorsignup() {

    const [counselorsignup, setCounselorsignup] = useState({

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

    const navigate = useNavigate()

    const changefn = (e) => {
        const { name, value } = e.target
        setCounselorsignup(preData => ({ ...preData, [name]: value }))
        setErrors(preErrors => ({ ...preErrors, [name]: "" }))
    }

    let formValid = true

    const submitfn = (e) => {
        e.preventDefault();

        let errors = {}

        if (!counselorsignup.name.trim()) {
            formValid = false
            errors.name = "Name is required"
        }

        if (!counselorsignup.age.trim()) {
            formValid = false
            errors.age = "Age is required"
        }

        if (!counselorsignup.email.trim()) {
            formValid = false
            errors.email = "Email is required"
        }

        if (!counselorsignup.contact.trim()) {
            formValid = false
            errors.contact = "Contact number is required"
        }
        else if (counselorsignup.contact.length < 10) {
            errors.contact = "Enter valid number"
        }

        if (!counselorsignup.qualification.trim()) {
            formValid = false
            errors.qualification = "Qualification field is required"
        }

        if (!counselorsignup.experienceYear.trim()) {
            formValid = false
            errors.experienceYear = "Experience field is required"
        }

        if (!counselorsignup.password.trim()) {
            formValid = false
            errors.password = "Password is required"
        }
        else if (counselorsignup.password.length < 5) {
            errors.password = "Password should be atleast 6 characters"
        }

        if (!counselorsignup.certificateImg.trim()) {
            formValid = false
            errors.certificateImg = "No files choosen"
        }

        if (!counselorsignup.profilePicture.trim()) {
            formValid = false
            errors.profilePicture = "No files choosen"
        }

        setErrors(errors)

        if (formValid) {

            console.log('d', counselorsignup)

            axiosMultipartInstance.post("/smart_parent/registerCouncilar", counselorsignup)
                .then((res) => {
                    console.log("response", res);
                    alert("Waiting for Admin approval..");
                    setTimeout(() => {
                        navigate("/admin");
                    }, 1500);
                })
                .catch((err) => {
                    console.log("error", err);
                    alert(err.response.data.message)
                })

        }
        else { console.log("form", formValid) }

    }


    return (
        <div className='signup'>

            <h1>Counselor Sign up</h1>

            <div className='regform'>

                <form onSubmit={submitfn} >

                    <div className="input-box">
                        <div className='label'> <label>Name</label>  </div>
                        <input type="text" placeholder="Username" name="name" value={counselorsignup.name} onChange={changefn} />

                        {errors.name && <div className="text-danger errortext">{errors.name}</div>}

                    </div>


                    <div className="input-box">
                        <div className='label'> <label>Age</label>  </div>
                        <input type="text" placeholder="Age" name="age" value={counselorsignup.age} onChange={changefn} />

                        {errors.age && <div className="text-danger errortext">{errors.age}</div>}

                    </div>


                    <div className="input-box">
                        <div className='label'> <label>Email</label>  </div>
                        <input type="email" placeholder="Email" name="email" value={counselorsignup.email} onChange={changefn} />

                        {errors.email && <div className="text-danger errortext">{errors.email}</div>}

                    </div>


                    <div className="input-box">
                        <div className='label'> <label>Contact</label>  </div>
                        <input type="text" placeholder="Contact Number" name="contact" value={counselorsignup.contact} onChange={changefn} />

                        {errors.contact && <div className="text-danger errortext">{errors.contact}</div>}

                    </div>


                    <div className='input-box'>
                        <div className='label'> <label>Qualification</label>  </div>

                        <select name='qualification' value={counselorsignup.qualification} onChange={changefn}>
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
                        <input type="text" placeholder="Experience" name="experienceYear" value={counselorsignup.experienceYear} onChange={changefn} />

                        {errors.experienceYear && <div className="text-danger errortext">{errors.experienceYear}</div>}

                    </div>


                    <div className="input-box">
                        <div className='label'> <label>Password</label>  </div>
                        <input type="password" placeholder="Password" name="password" value={counselorsignup.password} onChange={changefn} />

                        {errors.password && <div className="text-danger errortext">{errors.password}</div>}

                    </div>


                    <div className='files' >
                        <div className='label'> <label>Certificate</label>  </div>
                        <input type='file' name="certificateImg" value={counselorsignup.certificateImg} onChange={changefn} />

                        {errors.certificateImg && <div className="text-danger errortext">{errors.certificateImg}</div>}

                    </div>


                    <div className='files'>
                        <div className='label'> <label>Profile Picture</label>  </div>
                        <input type='file' name="profilePicture" value={counselorsignup.profilePicture} onChange={changefn} />

                        {errors.profilePicture && <div className="text-danger errortext">{errors.profilePicture}</div>}

                    </div>


                    <div className="text">
                        <h5>Already have an account? <Link to="/admin">Login now</Link></h5>
                    </div>


                    <div className="inbutton d-flex justify-content-center rpbtn">
                        <button type="submit"
                            className="btn btn-primary icon"
                            variant="primary">
                            Sign up
                            <Icon icon="grommet-icons:connect" className='icon' />
                        </button>
                    </div>


                </form>

            </div>

        </div>
    )
}

export default Counsellorsignup
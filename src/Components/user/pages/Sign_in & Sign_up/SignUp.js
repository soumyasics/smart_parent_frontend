import React, { useState } from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify-icon/react'
import axios from "axios"

function SignUp() {
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        date: "",
        contact: "",
        password: ""

    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        date: "",
        contact: "",
        password: ""
    })

    const changefn = (e) => {
        const { name, value } = e.target
        setSignup(preData => ({ ...preData, [name]: value }))
        setErrors(preError => ({ ...preError, [name]: "" }))
    }

    let formValid


    const formValidating = (fieldName, value) => {

        if (!value.trim()) {
            formValid = false
            return `${fieldName} is required`;
        }
        return '';

    }

    const submitfn = (e) => {
        e.preventDefault();

        let errors = {}



        errors.name = formValidating("Name", signup.name)
        errors.email = formValidating("Email", signup.email)
        errors.date = formValidating("Date", signup.date)
        errors.contact = formValidating("Contact Number", signup.contact)
        errors.password = formValidating("Password", signup.password)


        setErrors(errors)

        if (formValid) {
            console.log("data", signup);

            axios.post("http://localhost:4009/smart_parent/registerParent", signup)
                .then((res) => {
                    console.log("data", res)
                    alert("form is Submitted")
                })
                .catch((err) => {
                    console.log("error")
                })




        }




    }

    return (
        <div className='signup'>

            <h1>Sign up</h1>

            <div className='regform'>

                <form onSubmit={submitfn} >

                    <div className="input-box">

                        <div className='label'> <label>Name</label>  </div>
                        <input type="text" placeholder="Username" name="name" onChange={changefn} />

                        {errors.name && <div className="text-danger">{errors.name}</div>}

                    </div>

                    <div className="input-box">
                        <div className='label'> <label>Email</label>  </div>
                        <input type="email" placeholder="Email" name="email" onChange={changefn} />

                        {errors.email && <div className="text-danger">{errors.email}</div>}


                    </div>

                    <div className="input-box">
                        <div className='label'> <label>DOB</label>  </div>
                        <input type="date" name="date" onChange={changefn} />

                        {errors.date && <div className="text-danger">{errors.date}</div>}


                    </div>

                    <div className="input-box">
                        <div className='label'> <label>Contact</label>  </div>
                        <input type="text" placeholder="Contact Number" name="contact" onChange={changefn} />

                        {errors.contact && <div className="text-danger">{errors.contact}</div>}


                    </div>
                    <div className="input-box">
                        <div className='label'> <label>Password</label>  </div>
                        <input type="password" placeholder="Password" name="password" onChange={changefn} />

                        {errors.password && <div className="text-danger">{errors.password}</div>}


                    </div>

                    <div className="text">
                        <h5>Already have an account? <Link to={"/sign_in"}>Login now</Link></h5>
                    </div>

                    <div className="inbutton">
                        <button type="submit">Sign up  <Icon icon="grommet-icons:connect" className='icon' /></button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default SignUp
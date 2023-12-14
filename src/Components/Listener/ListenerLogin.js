import React from "react";
import "./listenerlogin.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LandingNav from "./LandingNav";

function ListenerLogin() {
  return (
    <div>
    <LandingNav/>
      <div className="listenerlogin_main">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <h6 className="pt-5 mt-5 text-center">Login</h6>
            <div className="listenerlogin_form"> 
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="password" />
                  <label className="listener_forgot-password">forgot password ?</label>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="Enter Captcha" />
                </Form.Group>
                <div>
                <button className="listenerloginbtn mb-2 p-1">Log in</button>{' '}</div>
                <div>
                <button className="listenercancelbtn p-1" variant="secondary">Cancel</button>{' '}</div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListenerLogin;

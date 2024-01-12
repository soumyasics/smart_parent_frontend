import React from 'react'
import img from "../../Assest/CARD (1).png";


function CreatorProfile() {
  return (
    <div className="container">
      <div className="row" id="profilemain">
        <div className="col-3">
          <img src={img} className="profile_img" alt="img"></img>
        </div>
        <div className="col-8 mt-2">
          <div>
            <label className="profilename">Name</label>
            <button className="btn btn-outline-dark bg-light px-4">
              Edit
            </button>{" "}
            <button className=" RegisterButton ms-2 p-2">Logout</button>
          </div>
          <div>ajeena@gmail.com</div>
          <div>About me</div>
          <div>
            "Tech enthusiast, avid reader, and aspiring writer. Passionate about
            innovation and creativity. Exploring the intersections of technology
            and art. Let's connect and learn together!"
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <h5 className="mt-3">Recently Listened</h5>
        <div className="col-3">
          <card>
            <img src={img} className="profile_img" alt="img"></img>
          </card>
        </div>
        <div className="col-3">
          <card>
            <img src={img} className="profile_img" alt="img"></img>
          </card>
        </div>
        <div className="col-3">
          <card>
            <img src={img} className="profile_img" alt="img"></img>
          </card>
        </div>
        <div className="col-3">
          <card>
            <img src={img} className="profile_img" alt="img"></img>
          </card>
        </div>
      </div>
    </div>
  )
}

export default CreatorProfile



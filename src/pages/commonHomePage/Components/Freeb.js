import React from "react";
import "./Freeb.js";
function Freeb() {
  return (
    <>
      <div className="fb mb-5 ms-5">
        <p style={{ fontSize: "35px" }}>
          <b>Free Blogs To Read</b>
        </p>
      </div>
      <div className="free-container container">
        <div
          className="free-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            class="card"
            style={{
              width: "18rem",
              transition: "transform .9s",
              marginLeft: "15px",
            }}
          >
            <img
              src="https://www.himama.com/blog/wp-content/uploads/2018/12/header_kid_ipad.jpg"
              alt="child"
              style={{ height: "200px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Blog title</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Blog subtitle
              </h6>
              <p class="card-text">Blog content along with author name</p>
            </div>
          </div>
          <div
            class="card"
            style={{ width: "18rem", transition: "transform .9s" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSI6bPYcKKMM2oZyN6dvl8YnYgxlj0jU-QHzAnB853V0BKZEpBhWELAZ5iidsiJmPdBI&usqp=CAU"
              alt="child"
              style={{ height: "200px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Blog title</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Blog subtitle
              </h6>
              <p class="card-text">Blog content along with author name</p>
            </div>
          </div>
          <div
            class="card"
            style={{ width: "18rem", transition: "transform .9s" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTN7xFNTSp1eTUEIe2GMh1cwKABI1OqUA0wH6OyfY593hymMKnEslpXrxTykqJdVkcyk&usqp=CAU"
              alt="child"
              style={{ height: "200px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Blog title</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Blog subtitle
              </h6>
              <p class="card-text">Blog content along with author name</p>
            </div>
          </div>
          <div
            class="card"
            style={{
              width: "18rem",
              transition: "transform .9s",
              marginRight: "15px",
            }}
          >
            <img
              src="https://www.himama.com/blog/wp-content/uploads/2018/12/header_mom-and-daughter-with-tablet.jpg"
              alt="child"
              style={{ height: "200px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Blog title</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                Blog subtitle
              </h6>
              <p class="card-text">Blog content along with author name</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freeb;

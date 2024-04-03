import React from "react";
import "../../../parent/parenthome.css";
import CommonFooter from "../../../../pages/commonHomePage/Components/commonFooter.jsx";
import { Link } from "react-router-dom";

function ResourcePersonHome() {
  return (
    <div>
      <div>
        <div className="rpbg">
          <div className="container">
            <h1 className="parent_home_heading">
              Welcome to our <h1></h1>Smart Parenting<h1></h1> Resource Person
              <h1></h1> Hub
            </h1>
            <Link to="/admin" className="parent_home_button  me-5 text-decoration-none btn btn-light">Get Started</Link>
          </div>
        </div>

        <div className="parent_home_thirddiv">
          <h3 className="text-center pb-3">
            {" "}
            "your go-to destination for expert guidance and support on
            navigating the journey of parenthood."
          </h3>
          <h4>
            Parenting is meant to challenge us, not defeat us. At Smarter
            Parenting, we are focused on providing small, meaningful steps that
            will create the greatest impact in your family. You can explore each
            of our lessons and learn ways to improve your approach and achieve
            your family goals.
          </h4>
        </div>
        <h1 className="text-center">Strengths of the Teaching Family Model</h1>

        <div className="parent_home_fourthdiv bg-secondary">
          <div className="row">
            <div className="col">
              <img
                alt=""
                src="https://sf.ezoiccdn.com/ezoimgfmt/momscove.com/wp-content/uploads/2024/01/pexels-arina-krasnikova-5416613-1536x1026.jpg?ezimgfmt=ng:webp/ngcb3"
                className="div3img"
              ></img>
            </div>
            <div className="col text-light fs-4 py-5 pe-5">
              1. Discover a wealth of knowledge and expertise on effective
              parenting strategies, curated by our team of trusted resource
              persons, all here to support you every step of the way
              <div></div>
              2.Empower your parenting journey with our diverse range of
              resource persons, dedicated to providing invaluable insights and
              assistance tailored to your family's needs.
              <div></div>
              3.Join a community of proactive parents and knowledgeable resource
              persons, united in the pursuit of raising happy, healthy children
              equipped for the challenges of tomorrow.
            </div>
          </div>
          <div className="row">
            <div className="col text-light fs-4 py-5 ps-5 ">
              <ul>
                <li>Individualized person-centered services</li>
                <li>Greater responsiveness</li>
                <li>High consumer and client satisfaction</li>
                <li>Feedback driven</li>
                <li>Greater responsiveness</li>
              </ul>
              <div>
                "Successful parenting involves engaging in a variety of tasks
                and activities such as fostering open communication, setting
                clear boundaries, practicing positive reinforcement,
                implementing consistent routines, leading by example, and
                prioritizing quality time for bonding and nurturing growth"
              </div>
            </div>
            
            <div className="col">
              <img
                src="https://sf.ezoiccdn.com/ezoimgfmt/momscove.com/wp-content/uploads/2023/11/mother-taking-care-her-autistic-son-home.jpg?ezimgfmt=ng:webp/ngcb3"
                className="div3img"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="container text-center p-5">
          <h1>Teaching Family Model (TFM) </h1>
          The Teaching Family Model (TFM) is a philosophy and practice of care
          and treatment that prioritizes therapeutic relationships with
          caregivers as the primary conduit of effective treatment in supportive
          family-style settings. The TFM is an evidence-based approach which is
          fully integrated at both the individual and the organizational level.
          It provides effective, individualized and trauma-informed treatment
          services to children, youth, adults, and families. The model is rooted
          in social learning theory and through peer-reviewed research and
          clinical practice, the Teaching Family Model is recognized to be
          cost-effective, replicable, and highly effective for all participants.
        </div>
        <div className="row" id="parent_home_seconddiv">
        <div class="col" id="img4">
          <h1 className="heading">Parenting Skills</h1>
        </div>
        <div class="col" id="img5">
          <h1 className="heading">Games & Activities</h1>
        </div>
        <div class="col" id="img6">
          <h1 className="heading">Parenting programe</h1>
        </div>
      </div>
        <div className="parent_home_fifthdiv container">
          <h1 className="text-center p-5 ">Meet Our Sponsors</h1>
          <div className="row mb-5 ">
            <div className="col">
              <img
                alt=""
                src="https://www.smarterparenting.com/wp-content/uploads/2023/02/pbeauty.png.webp"
              ></img>
            </div>
            <div className="col">
              <img
                alt=""
                src="https://www.smarterparenting.com/wp-content/uploads/2023/02/miller.png.webp"
              ></img>
            </div>
            <div className="col">
              <img
                alt=""
                src="https://www.smarterparenting.com/wp-content/uploads/2023/02/slf.png.webp"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5"></div>
      <CommonFooter />
    </div>
  );
}

export default ResourcePersonHome;

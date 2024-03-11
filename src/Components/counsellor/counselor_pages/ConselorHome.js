import React from "react";
import "./counsellor.css";

function ConselorHome() {
  return (
    <div>
      <div className="counseller_home">
        <div className="container">
          <div className="col-6">
            <h1 className="cousellor_heading">Counsellor Hub</h1>{" "}
            <h6 className="fs-5">
              "Parental counselling is a type of service that aims to provide
              the necessary knowledge, tools, guidance, and most especially
              support to parents without bias or judgment. This way, they become
              more fully equipped to take care of their children"
            </h6>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
      <div>
        <div className="container mt-5">
          <h1>About Caring Minds</h1>
          <div>
            Caring Minds is an OPD Mental Health Clinic. It is the first of it’s
            kind, state-of-the-art, multi-speciality institute of mental health
            in Eastern India. Sprawling across 8000 sq. ft, this one-stop shop
            houses a diverse team of seasoned professionals who provide their
            expert services to all issues related to the mind, both clinical and
            non-clinical under one roof. It caters to all age groups from
            children to the elderly.
          </div>
          <div>
            <img
              className="counsellor_home_img"
              src="https://caringminds.co.in/wp-content/uploads/2021/07/relaxation.jpg"
            ></img>
          </div>
          <div>
            Caring Minds has a special room set aside for persons who require
            unique forms of relaxation therapy. The counsellors at Caring Minds
            use processes such as Jacobson’s Progressive Muscle Relaxation
            (JPMR) and Biofeedback to facilitate awareness of the various
            physiological functions with the aim of relieving stress and
            relaxing the mind. Caring Minds is one of the very few
            establishments’ in Kolkata that boasts of owning a Biofeedback
            machine – a treatment technique in which one can learn how to
            control their heart beats and pulse rates through gradual
            relaxation. This Biofeedback machine is a Mindaliveinc make and
            imported from USA.
          </div>
          <div className="m-5">
            Counselling offers clear information about how to change if you want
            to. It offers straightforward guidance on how to make important
            changes, one step at a time and enables you to figure out how to
            stay on track. With proper counselling, you could make your whole
            life better.
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ConselorHome;

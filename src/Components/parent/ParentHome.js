import React from "react";
import "./parenthome.css";

function ParentHome() {
  return (
    <div>
      <div className="parenthome_main">
        <div className="container">
          <h1 className="parent_home_heading">
            Real Solutions For <h1></h1>Everyday Parenting <h1></h1> Challenges
          </h1>
          <button className="parent_home_button  me-5">Get Started</button>
        </div>
      </div>
      <div className="row" id="parent_home_seconddiv">
        <div class="col" id="img1">
          <h1 className="heading">Parenting Skills</h1>
        </div>
        <div class="col" id="img2">
          <h1 className="heading">Games & Activities</h1>
        </div>
        <div class="col" id="img3">
          <h1 className="heading">Parenting programe</h1>
        </div>
      </div>
      <div className="parent_home_thirddiv">
        <h4>
          What is Smarter Parenting?
          <h2></h2>
          Children learn so much from their parents, but parenting doesn’t
          exactly come with a handbook. Parents often need effective resources
          to help them be successful in becoming teachers to their children.
          Smarter Parenting takes the techniques used by Behavioral Specialists
          and Mental Health Professionals and makes those same tools available
          to parents. On our parenting website you’ll find lessons, resources,
          and examples that help you navigate practical parenting skills.
        </h4>
      </div>
      <div className="parent_home_fourthdiv">
        <div className="row">
          <div className="col">
            <img  alt=""
              src="https://sf.ezoiccdn.com/ezoimgfmt/momscove.com/wp-content/uploads/2024/01/pexels-arina-krasnikova-5416613-1536x1026.jpg?ezimgfmt=ng:webp/ngcb3"
              className="div3img"
            ></img>
          </div>
          <div className="col text-light fs-4 py-5 pe-5">
            If you struggle to empathize with your child, then focus on the
            antecedent. When parent’s look at the antecedent, they’re more
            likely to work with their child from a place of empathy, which is
            where their relationship is strongest.
          </div>
        </div>
        <div className="row">
          <div className="col text-light fs-4 py-5 ps-5 ">
            <h3>Successful Outcomes for:</h3>
            <ul>
              <li>Kids not following instructions</li>
              <li>Arguing</li>
              <li>Lack of motivation</li>
              <li>Defiance</li>
              <li>Tantrum behaviors</li>
            </ul>
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
      <div className="parent_home_fifthdiv container">
      <h1 className="text-center p-5 ">Meet Our Sponsors</h1>
      <div className="row mb-5 ">
      <div className="col"><img  alt="" src="https://www.smarterparenting.com/wp-content/uploads/2023/02/pbeauty.png.webp"></img></div>
      <div className="col"><img  alt="" src="https://www.smarterparenting.com/wp-content/uploads/2023/02/miller.png.webp"></img></div>
      <div className="col"><img  alt="" src="https://www.smarterparenting.com/wp-content/uploads/2023/02/slf.png.webp"></img></div>

      </div>
      </div>
    </div>
  );
}

export default ParentHome;

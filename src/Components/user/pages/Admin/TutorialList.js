import "./bloglist.css";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import react, { useState, useEffect } from "react";
import BASE_URL from "../../../../apis/baseUrl";

function TutorialList() {
  const [tutoriallist, setTutoriallist] = useState([]);

  const CounselorData = async () => {
    try {
      const response = await axiosInstance.get("viewAllTutorials");
      setTutoriallist(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    CounselorData();
  }, []);
  console.log(tutoriallist, "pp");

  return (
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-8">
          {tutoriallist.map((item, index) => (
            <div className="tutorial_page">
            <div className="card p-2  mt-5">
              <div className="row">
                <div className="col-3">
                  <iframe
                    width="100%"
                    height="200px"
                    src={item.video ? BASE_URL + item.video.originalname : ""}
                    title="YouTube video player"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="col-8">
                  <div className="fs-5">Tutorial Title : {item.title}</div>
                  <div className="fs-5">Tutorial Target : {item.target}</div>
                  <div className="fs-5">Tutorial Description : {item.description}</div>
                  <div className="fs-5">Tutorial duration : {item.duration}</div>
                  <div className="fs-5">Tutorial By : {item.rpid.name}</div>
                </div>
              </div>
            </div></div>
          ))}
        </div>
      </div>
  );
}

export default TutorialList;

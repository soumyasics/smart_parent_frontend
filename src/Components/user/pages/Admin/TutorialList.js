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
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-8">
          {tutoriallist.map((item, index) => (
            <div></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TutorialList;

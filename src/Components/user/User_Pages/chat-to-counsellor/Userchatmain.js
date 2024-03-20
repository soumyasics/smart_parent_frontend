import React, { useEffect, useState } from "react";
import Userinnerchat from "./Userinnerchat";
import Userchat from "./Userchat";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import axiosInstance from "../../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
function Userchatmain() {
  const [selectedCounsellorId, setSelectedCounsellorId] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [subscribers, setSubscribers] = useState([]);
  const navigate = useNavigate();
  const handleRecipientSelection = (id) => {
    setSelectedCounsellorId(id);
  };

  useEffect(() => {
    if (localStorage.getItem("parentData")) {
      setActiveUser(JSON.parse(localStorage.getItem("parentData")));
    } else {
      console.log("Parent data not found in the local storage");
      alert("Please login first");
      navigate("/sign_in");
    }
  }, []);

  useEffect(() => {
    if (activeUser && activeUser._id) {
      getCounsellors();
    }
  }, [activeUser]);

  async function getCounsellors() {
    try {
      let res = await axiosInstance.get(
        "viewAllCouncilars" 
      );
      let data = res?.data?.data || null;

      if (data) {
        setSubscribers(data);
      } else {
        console.log("Data not found on get parent subscribers");
        setSubscribers([]);
      }
    } catch (error) {
      console.log("error on getting parent subscribers", error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="row " style={{ minHeight: "700px" }}>
        <div className="col-3" style={{ backgroundColor: "#f9f9f9" }}>
          <Userchat
            subscribers={subscribers}
            onSelectRecipient={handleRecipientSelection}
          />
        </div>
        <div className="col-9">
          <Userinnerchat activeCounsellorId={selectedCounsellorId} />
        </div>
      </div>
      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
}

export default Userchatmain;

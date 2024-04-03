import React, { useEffect, useState } from "react";
import Userinnerchat from "./Userinnerchat";
import Userchat from "./Userchat";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import axiosInstance from "../../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import Rpnav from "../../../resource_person/navbar/Rpnav";
import Counsellornav from "../../../counsellor/navbar/Counsellornav";
function CounsellorChatmain() {
  const [selectedParentId, setSelectedParentId] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [parents, setparents] = useState([]);
  const navigate = useNavigate();
  const activeParent = (id) => {
    setSelectedParentId(id);
  };

  useEffect(() => {
    if (localStorage.getItem("activecouncilor")) {
      setActiveUser(JSON.parse(localStorage.getItem("activecouncilor")));
    } else {
      console.log("Parent data not found in the local storage");
      alert("Please login first");
      navigate("/admin");
    }
  }, []);

  useEffect(() => {
    if (activeUser && activeUser._id) {
      getRpSubscriptions(activeUser._id);
    }
  }, [activeUser]);

  async function getRpSubscriptions(id) {
    try {
      let res = await axiosInstance.get("viewAllChilds");
      let data = res?.data?.data || null;
      // console.log(data,"data");
      if (data) {
        setparents(data);
        
      } else {
        console.log("Data not found on get parent parents");
        setparents([]);
      }
    } catch (error) {
      console.log("error on getting parent parents", error);
    }
  }
// console.log(parents,"parent");
  return (
    <>
      <Counsellornav />
      <div className="row " style={{ minHeight: "700px" }}>
        <div className="col-3" style={{ backgroundColor: "#f9f9f9" }}>
          <Userchat
            subscribers={parents}
            onSelectRecipient={activeParent}
          />
        </div>
        <div className="col-9">
          <Userinnerchat activeParentId={selectedParentId} />
        </div>
      </div>
      <div className="mt-1">
        <Footer />
      </div>
    </>
  );
}

export default CounsellorChatmain;

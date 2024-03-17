import React, { useEffect, useState } from "react";
import Userinnerchat from "./Userinnerchat";
import Userchat from "./Userchat";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import axiosInstance from "../../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import Rpnav from "../../../resource_person/navbar/Rpnav";
function Rpchatmain() {
  const [selectedParentId, setSelectedParentId] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [subscribers, setSubscribers] = useState([]);
  const navigate = useNavigate();
  const activeParent = (id) => {
    setSelectedParentId(id);
  };

  useEffect(() => {
    if (localStorage.getItem("activeRp")) {
      setActiveUser(JSON.parse(localStorage.getItem("activeRp")));
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
      let res = await axiosInstance.get("get-all-subscriptions-by-rp-id/" + id);
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
      <Rpnav />
      <div className="row " style={{ minHeight: "700px" }}>
        <div className="col-3" style={{ backgroundColor: "#f9f9f9" }}>
          <Userchat
            subscribers={subscribers}
            onSelectRecipient={activeParent}
          />
        </div>
        <div className="col-9">
          <Userinnerchat activeParentId={selectedParentId} />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default Rpchatmain;

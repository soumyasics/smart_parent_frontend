import "./rplist.css";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import Table from "react-bootstrap/Table";
import BASE_URL from "../../../../apis/baseUrl";
import profileimg from "../../../../Assets/illustrators/man-placeholder.jpg";

function CounselorAccepted() {
    const[counsellor,setCounsellor]=useState([])

    useEffect(() => {
        const CounselorData = async () => {
          try {
            const response = await axiosInstance.get("viewAllCouncilars");
            setCounsellor(response.data.data);
            console.log(response.data.data);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
    
        CounselorData();
      }, []);

  return (
    <div>
      
    </div>
  )
}

export default CounselorAccepted


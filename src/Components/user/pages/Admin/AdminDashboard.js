import React from 'react'
import Sidebar from './Sidebar'
import axiosInstance from "../../../../apis/axiosInstance";
import { useState, useEffect } from "react";
import axios from 'axios';

function AdminDashboard() {
    const [rpLists, setRpLists] = useState([]);
    const [userData, setUserData] = useState([]);
    const [parentlist,setParentList]=useState([])
   

      function RPData() {
        axiosInstance
          .get("smart_parent/view-all-rp")
          .then((res) => {
            console.log("res", res);
            let allRps = res?.data?.data || [];
            const filterPendingReqs = allRps.filter(
              (rp) => rp?.isAdminApproved == "accepted"
            );
    
            setRpLists(filterPendingReqs);
          })
          .catch((err) => {
            console.log("err", err);
          });
        }
          const CounselorData = async () => {
            try {
              const response = await axios.get('http://localhost:4009/smart_parent/viewAllCouncilars');
              setUserData(response.data.data); 
              console.log(response.data.data); 
  
            } catch (error) {
              console.error('Error fetching user data:', error);
            }
          };
      
          
          const parentData = async () => {
            try {
              const response = await axios.get('http://localhost:4009/smart_parent/viewParents');
              setParentList(response.data.data); 
              console.log(response.data.data); 
  
            } catch (error) {
              console.error('Error fetching user data:', error);
            }
          };
      useEffect=()=>{
        parentData();
      }
      useEffect=()=>{
        CounselorData();
      }  
      useEffect=()=>{
        RPData();
      }
          
      
  return (
    <div>
    <Sidebar/>
      <div>
      
      </div>
    </div>
  )

}

export default AdminDashboard

import React from "react";
import { useState, useEffect } from "react";
import "./admin.css";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import Table from "react-bootstrap/Table";

function ParentList() {
  const [parentlist, setParentList] = useState([]);

  const parentData = async () => {
    try {
      const response = await axiosInstance.get("/viewAllChilds");
      setParentList(response.data.data);
      console.log(response.data.data, "parent");
    } catch (error) {
      console.error("Error fetching parent data:", error, "parent");
    }
  };
  useEffect(() => {
    parentData();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-6 ms-5 container  w-75">
          <h3 className="mt-5">All Parents</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="row">Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Child Name</th>
                <th>Child Age</th>
                <th>child Gender</th>
                <th>child weight</th>
                <th>child height</th>

              </tr>
            </thead>
            <tbody>
              {parentlist.map((data,index) => {
                return (
                  <tr key={index} className="mt-4">
                    <td>{data.parentId.name}</td>
                    <td>{data.parentId.email}</td>
                    <td>{data.parentId.contact}</td>
                    <td>{data.childName}</td>
                    <td>{data.childAge}</td>
                    <td>{data.childGender}</td>
                    <td>{data.childWeight}</td>
                    <td>{data.childHeight}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ParentList;

// <div className="row">
//         <div className="col-2"></div>
//         <div className="col-6 ms-5 container w-75">
//           <h3 className="mt-5">All Parents</h3>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 {" "}
//                 <th scope="col">name</th>
//                 <th scope="col">Contact</th>
//                 <th scope="col">Email</th>
//               </tr>
//             </thead>
//             <tbody>
//               {parentlist.map((data) => {
//                 return (
//                   <tr>
//                     <td>{data.name}</td>
//                     <td>{data.contact}</td>
//                     <td>{data.email}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </Table>
//         </div>
//       </div>

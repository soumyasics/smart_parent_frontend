import React from 'react'
import { useState, useEffect } from "react";
import "./admin.css"
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import Table from 'react-bootstrap/Table';

function ParentList() {
    const [parentlist, setParentList] = useState([]);

    const parentData = async () => {
        try {
          const response = await axiosInstance.post("smart_parent/viewParents");
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
      <div className="col-2"><Sidebar/></div>
      <div className="col-6 ms-5 container">
        <h3 className="mt-5">All Parents</h3>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>image</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {parentlist.map((data) => {
        return (
          <tr>
            <td scope="row">
              <img src={data.profilePicture} alt=""></img>
            </td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.email}</td>
          </tr>
        );
      })}
      </tbody>
    </Table>
      </div>
    </div>
    </div>
  )
}

export default ParentList

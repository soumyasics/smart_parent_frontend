import React from "react";
import "./counselor.css";
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../../../apis/baseUrl";
import placeholderImg from "../../../../Assets/illustrators/man-placeholder-2.jpg";
import { Button, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NoDataFound from "../../../../Assets/illustrators/no-data.jpg";
import CounsillarViewTutorials from "./View-Tutorials/counsellor-view-tutorial";
import counsellorTalkingImg from "../../../../Assets/illustrators/counsellor-talking.jpg";
import "./counsellor-details.css";
const ViewCounsellorDeatils = () => {
  const { id } = useParams();
  const [activeCounsellor, setActiveCounsellor] = useState(null);
  const [complaint, setComplaint] = useState("");
  const [counsellorImg, setCounsellorImg] = useState(counsellorTalkingImg);
  const [activeParent, setActiveParent] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getCounsellorDeatils(id);
    }
  }, []);
  useEffect(() => {
    if (activeCounsellor) {
      let filename = activeCounsellor?.profilePicture?.filename || null;
      if (filename) {
        let URL = `${BASE_URL}${filename}`;
        setCounsellorImg(URL);
      }
    }
  }, [activeCounsellor]);
  // get parent data from LS
  useEffect(() => {
    let parentData = JSON.parse(localStorage.getItem("parentData")) || null;
    if (parentData) {
      setActiveParent(parentData);
    } else {
      console.log("Parent not logged in.");
      setActiveParent(null);
      navigate("/sign_in");
    }
  }, []);
  async function getCounsellorDeatils(id) {
    try {
      let res = await axiosInstance.get("viewCouncilarById/" + id);
      let data = res?.data?.data || null;
      if (data) {
        setActiveCounsellor(data);
      } else {
        setActiveCounsellor(null);
      }
    } catch (error) {
      console.log("Error on get counsellor details", error);
    }
  }
  const handleComplaint = async () => {
    if (!complaint) {
      alert("Please enter complaint");
      return;
    }
    let obj = {
      complaint,
      cId: id,
      parentId: activeParent?._id,
    };

    if (!obj.parentId) {
      alert("Please login to add complaint");
      return;
    }

    console.log("obj", obj);
   sendComplaint(obj)
  };
  const sendComplaint = async (data) => {
    try {
      let res = await axiosInstance.post("addCouncilorComplaint", data);
      console.log("ress", res)
      if (res.status === 201) {
        alert("Complaint added successfully. Our team will review it shortly.");
        setComplaint("")
        return;
      }
    } catch (error) {
      console.log("Error on adding complaint", error);
      alert("Something went wrong. Please try again later");

    }
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        style={{ minHeight: "300px", backgroundColor: "#f4f5e7" }}
        className=""
      >
        {!activeCounsellor && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              style={{ width: "300px", height: "300px" }}
              src={NoDataFound}
              alt="No data found"
            />
            <h3>No counsellor found</h3>
          </div>
        )}
        {activeCounsellor && (
          <div className="pt-3 ">
            <h1 className="text-center ">Counsellor Details </h1>
            <div
              style={{ width: "90%" }}
              className="mx-auto mt-5 view-counsellor pt-5 d-flex"
            >
              <div className="left p-0 d-flex justify-content-center  flex-row">
                <img
                  className="rounded-circle mb-3 me-5"
                  style={{ width: "200px", height: "200px" }}
                  src={counsellorImg}
                  alt="counsellor"
                />
                <div style={{ width: "400px" }}>
                  <h3>Name: {activeCounsellor?.name}</h3>
                  <p>Age: {activeCounsellor?.age}</p>
                  <p>Email: {activeCounsellor?.email}</p>
                  <p>Contact: {activeCounsellor?.contact}</p>
                  <p>Work Experience: {activeCounsellor?.experienceYear}</p>
                </div>
              </div>
              <div style={{ width: "800px" }}>
                <h3>Report any complaints </h3>
                <div className="d-flex justify-content-between p-0">
                  <input
                    onChange={(e) => {
                      setComplaint(e.target.value);
                    }}
                    className="w-75 ps-2"
                    type="text"
                    name="complaint"
                    value={complaint}
                    placeholder="Enter complaint here.."
                  />
                  <Button onClick={handleComplaint} className="bg-danger">
                    Send{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div></div>
      </div>

      <div>
        <CounsillarViewTutorials id={id} />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};
export default ViewCounsellorDeatils;

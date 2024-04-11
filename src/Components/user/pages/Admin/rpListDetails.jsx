import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import BASE_URL from "../../../../apis/baseUrl";
import img from "../../../../Assets/illustrators/man-placeholder.jpg";
import { useParams } from "react-router-dom";
import placeholderImg from "../../../../Assets/illustrators/img-placeholder.png";
import { Image } from "react-bootstrap";
import placeHolderImg from "../../../../Assets/illustrators/man-placeholder.jpg";
function RpListDetails() {
  const [rpData, setRpData] = useState(null);
  const [profilePic, setProfilePic] = useState(placeHolderImg);
  const [imgPlaceholder, setImgPlaceholder] = useState(placeholderImg);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);

  function getData() {
    axiosInstance
      .get("view-rp-by-id/" + id)
      .then((res) => {
        console.log("res", res);
        let rpData = res?.data?.data || [];
        setRpData(rpData);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  useEffect(() => {
    if (rpData) {
      console.log("rp dat", rpData);
      let pathname = rpData.profilePicture?.filename || null;
      if (pathname) {
        setProfilePic(BASE_URL + pathname);
      }

      let pathnameCert = rpData?.certificateImg?.filename || null;
      if (pathnameCert) {
        setImgPlaceholder(BASE_URL + pathnameCert);
      }
    }
  }, [rpData]);

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div
          style={{ maxWidth: "77%" }}
          className="shadow p-3 mt-5 d-flex container"
        >
          <div className="w-50">
            <h1> Resource Person </h1>
            <br />
            <div className="text-dark">
              <h5 style={{ color: "black" }}>Name: {rpData?.name}</h5>
              <h5 style={{ color: "black" }}>Email: {rpData?.email}</h5>
              <h5 style={{ color: "black" }}>
                Experience Year: {rpData?.experienceYear}
              </h5>
              <h5 style={{ color: "black" }}>
                Contact Number: {rpData?.contact}
              </h5>
              <h5 style={{ color: "black" }}>
                Current Rating: {rpData?.rating}
              </h5>
            </div>
          </div>
          <div
            style={{ height: "300px", backgroundColor: "#e9ecf1" }}
            className="d-flex justify-content-center align-items-center w-50"
          >
            <Image
              style={{ height: "260px", width: "260px" }}
              src={profilePic}
              roundedCircle
            />{" "}
          </div>
        </div>
        <h1
          style={{
            zIndex: 10,
            color: "black",
            fontSize: "41px",
            marginLeft: "297px",
            marginTop: "38px",
          }}
        >
          {" "}
          Certificate
        </h1>
        <div
          style={{
            maxWidth: "77%",
            position: "absolute",
            top: "550px",
            height: "500px",
            right: "36px",
          }}
          className="shadow p-3 mt-5 d-flex justify-content-center align-items-center container"
        >
          <Image
            style={{ height: "400px" }}
            className="w-75"
            src={imgPlaceholder}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default RpListDetails;

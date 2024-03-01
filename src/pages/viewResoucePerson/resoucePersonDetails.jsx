import Navbar from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../commonHomePage/Components/commonFooter";
import axiosInstance from "../../apis/axiosInstance";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

const ResoucePersonDetails = () => {
  const { id } = useParams();
  const [rpDetails, setRpDetails] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosInstance
      .get("smart_parent/view-rp-by-id/" + id)
      .then((res) => {
        console.log("res", res);
        let rpData = res?.data?.data || null;
        if (rpData) {
          setRpDetails(rpData);
        } else {
          console.log("can't fetch rp details");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  return (
    <div>
      <Navbar />

      <div className="p-5" style={{ minHeight: "500px" }}>
        <h1> View rp detials </h1>
      </div>
      <Footer />
    </div>
  );
};

export default ResoucePersonDetails;

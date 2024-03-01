import Navbar from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../commonHomePage/Components/commonFooter";
import axiosInstance from "../../apis/axiosInstance";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const ViewResourcePerson = () => {
  const navigate = useNavigate();
  

  const [rpLists, setRpLists] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
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

  function handleSubscribe(id) {}

  function handleViewRp(id) {
    console.log(id);
    navigate("/view-resource-person-details/" + id);
  }

  return (
    <div>
      <Navbar />

      <h1 className="text-center my-3"> View All Resouce Person</h1>
      <p className="text-center my-3">
        {" "}
        <i>From here you can subscribe resouce persons and get tasks.</i>
      </p>

      <div style={{ minHeight: "500px" }}>
        <Table
          striped
          bordered
          hover
          style={{ width: "75%" }}
          className="mx-auto"
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Experience Year</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {rpLists.map((rp, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{rp.name}</td>
                  <td>{rp.email}</td>
                  <td>{rp.experienceYear}</td>
                  <td>{rp.age}</td>
                  <td>{rp.contact}</td>
                  <td>
                    <button
                      className="btn btn-primary rp-request-handls-btn"
                      onClick={() => {
                        handleViewRp(rp._id);
                      }}
                    >
                      View More
                    </button>
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
};

export default ViewResourcePerson;

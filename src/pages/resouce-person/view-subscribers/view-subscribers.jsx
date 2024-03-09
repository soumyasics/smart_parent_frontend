import { Table } from "react-bootstrap";
import Rpnav from "../../../Components/resource_person/navbar/Rpnav";
import axiosInstance from "../../../apis/axiosInstance";
import Footer from "../../commonHomePage/Components/commonFooter";
import { useState, useEffect } from "react";
const RpViewSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [activeRpid, setActiveRpid] = useState(null);

  useEffect(() => {
    getRpId();
  }, []);

  useEffect(() => {
    if (activeRpid) {
      getData(activeRpid);
    }
  }, [activeRpid]);
  function getRpId() {
    let rpId = JSON.parse(localStorage.getItem("activeRp")) || null;
    if (rpId) {
      setActiveRpid(rpId._id);
    } else {
      console.log("Rp not logged in");
    }
  }

  async function getData(activeRpid) {
    try {
      const res = await axiosInstance.get(
        "get-all-subscriptions-by-rp-id/" + activeRpid
      );
      let subscribers = res?.data?.data || null;
      if (subscribers) {
        setSubscribers(subscribers);
      } else {
        console.log("can't fetch subscribers details");
      }
    } catch (error) {
      console.log("error on get all subscribers", error);
    }
  }
  console.log("sub", subscribers);
  return (
    <div>
      <div>
        <Rpnav />
      </div>
      <div
        className="mx-auto mt-5 pt-2"
        style={{
          minHeight: "500px",
          width: "95%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <h1 className="text-center mt-3"> Subscribers </h1>
        <Table
          className="mt-5 mx-auto"
          style={{ width: "95%" }}
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((sub, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{sub?.parentId?.name}</td>
                <td>{sub?.parentId?.email}</td>
                <td>{sub?.parentId?.contact}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};
export default RpViewSubscribers;

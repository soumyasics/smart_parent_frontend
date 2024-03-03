import { useState, useEffect } from "react";
import Navbar from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../../pages/commonHomePage/Components/commonFooter";
import { Table } from "react-bootstrap";
import axiosInstance from "../../apis/axiosInstance";
const MySubscriptions = () => {
  const [allSubscription, setAllSubscription] = useState([]);

  useEffect(() => {
    let id = getActiveUserId();
    if (id) {
      getData(id);
    } else {
      console.log("Parent data not available in the Local storage");
    }
  }, []);
  function redirectRpTask(id) {
    console.log("rpid", id);
  }
  function getActiveUserId() {
    let activeParent = JSON.parse(localStorage.getItem("parentData")) || null;
    if (activeParent && activeParent._id) {
      return activeParent._id;
    } else {
      return null;
    }
  }
  async function getData(id) {
    try {
      let res = await axiosInstance.get(
        "/smart_parent/get-all-subscriptions-by-parent-id/" + id
      );
      let rpData = res?.data?.data || null;
      if (rpData) {
        setAllSubscription(rpData);
      } else {
        console.log("can't fetch parent subscription details");
      }
    } catch (error) {
      console.log("error on get subscription data by parent id", error);
    }
  }

  useEffect(() => {
    console.log("alls ", allSubscription);
  }, [allSubscription]);
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "600px" }} className="mt-5">
        {allSubscription.length > 0 && (
          <h2 className="text-center text-primary">My Subscriptions</h2>
        )}

        <div
          style={{ width: "90%" }}
          className="subscriiption-table-container mt-5 mx-auto"
        >
          <div>
            {allSubscription.length === 0 && (
              <h1 className="text-center text-primary"> No Subscriptions</h1>
            )}
          </div>

          {allSubscription.length > 0 && (
            <Table className="shadow" striped bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Resouce Person Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Experience Year</th>
                </tr>
              </thead>
              <tbody>
                {allSubscription.length > 0 &&
                  allSubscription.map((item, index) => {
                    console.log("it,", item);
                    return (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item?.resourcePersonId?.name}</td>
                        <td>{item?.resourcePersonId?.contact}</td>
                        <td>{item?.resourcePersonId?.email}</td>
                        <td>{item?.resourcePersonId?.experienceYear}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MySubscriptions;

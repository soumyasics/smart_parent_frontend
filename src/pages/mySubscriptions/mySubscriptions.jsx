import { useState, useEffect } from "react";
import Navbar from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../../pages/commonHomePage/Components/commonFooter";
import { Table } from "react-bootstrap";
import axiosInstance from "../../apis/axiosInstance";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import BASE_URL from "../../apis/baseUrl";
import manPlaceHolderImg from "../../Assets/illustrators/man-placeholder-2.jpg";
const MySubscriptions = () => {
  const [allSubscription, setAllSubscription] = useState([]);
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("parentData")) {
      setActiveUser(JSON.parse(localStorage.getItem("parentData")));
    } else {
      console.log("Parent data not found in the local storage");
      alert("Please login first");
      navigate("/sign_in");
    }
  }, []);

  useEffect(() => {
    let id = getActiveUserId();
    if (id) {
      getData(id);
    } else {
      console.log("Parent data not available in the Local storage");
    }
  }, []);

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
        let reversedRpData = rpData.reverse();
        setAllSubscription(reversedRpData);
      } else {
        console.log("can't fetch parent subscription details");
      }
    } catch (error) {
      console.log("error on get subscription data by parent id", error);
    }
  }

  const ratingChanged = (newRating) => {
    console.log("new rating", newRating);
  };
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
            <div className="parent-subscription-container">
              {allSubscription.map((item, index) => {
                console.log("ti", item);
                let profilePictureUrl = manPlaceHolderImg;
                if (item?.resourcePersonId?.profilePicture) {
                  let filename =
                    item?.resourcePersonId?.profilePicture?.filename || null;
                  console.log("filename");
                  if (filename) {
                    profilePictureUrl = BASE_URL + filename;
                  }
                }
                console.log("pro pic", profilePictureUrl);
                return (
                  <Card key={index} className="mt-5">
                    <Card.Header>Resource Person</Card.Header>
                    <Card.Body className="">
                      <div
                        style={{
                          display: "inline-block",
                          position: "absolute",
                          right: "25px",
                        }}
                        className="mt-3"
                      >
                        <Card.Img
                          className="rounded-circle"
                          variant="top"
                          src={profilePictureUrl}
                          style={{
                            width: "160px",
                            height: "160px",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                          }}
                        />
                      </div>
                      <Card.Title>
                        Name: {item?.resourcePersonId?.name || "John Doe"}
                      </Card.Title>
                      <Card.Text>
                        Age: {item?.resourcePersonId?.age || 20}
                      </Card.Text>
                      <Card.Text>
                        Experience Year:{" "}
                        {item?.resourcePersonId?.experienceYear || 5}
                      </Card.Text>
                      <Card.Text>
                        Contact: {item?.resourcePersonId?.contact}
                      </Card.Text>
                      <Button variant="primary">View More</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <div className="d-flex ps-0">
                        <p className="mt-2">Rating:</p>
                        <div className="ms-3">
                          <ReactStars
                            count={5}
                            edit={false}
                            value={item?.resourcePersonId?.rating || 0}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                          />
                        </div>
                      </div>
                    </Card.Footer>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default MySubscriptions;

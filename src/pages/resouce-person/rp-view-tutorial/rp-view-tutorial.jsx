import Footer from "../../commonHomePage/Components/commonFooter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rpnav from "../../../Components/resource_person/navbar/Rpnav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import BASE_URL from "../../../apis/baseUrl";
const RpViewTutorials = () => {
  const navigate = useNavigate();
  const [allTutorials, setAllTutorials] = useState([]);

  useEffect(() => {
    let id = findActiveResourcePerson();
    if (id) {
      getData(id);
    } else {
      alert("Resource Person not logged in");
      setTimeout(() => {
        navigate("/admin");
      }, 5);
      console.log("Parent data not available in the Local storage");
    }
  }, []);
  useEffect(() => {
    console.log("alls ", allTutorials);
  }, [allTutorials]);
  async function getData() {
    try {
      const res = await axiosInstance.get("smart_parent/viewAllTutorials");
      let rpData = res?.data?.data || null;
      if (rpData) {
        let reverseRpData = rpData.reverse();
        setAllTutorials(reverseRpData);
      } else {
        console.log("can't fetch resource person tutorial details");
      }
    } catch (error) {
      console.log("error get all video tutorials", error);
    }
  }
  function findActiveResourcePerson() {
    let activeRp;
    if (localStorage.getItem("activeRp")) {
      activeRp = JSON.parse(localStorage.getItem("activeRp")) || null;
    } else {
      return null;
    }
    if (activeRp && activeRp._id) {
      return activeRp._id;
    } else {
      return null;
    }
  }

  function watchTutorial(id) {
    if (!id) {
      alert("Tutorial id not found");
      return;
    }
    navigate("/watch-tutorial/" + id);
  }

  return (
    <>
      <Rpnav />
      <div>
        {allTutorials.length > 0 && (
          <h1 className="text-center mt-5"> All Tutorials </h1>
        )}

        <div
          style={{
            width: "90%",
            minHeight: "500px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
          className=" video-tutorials mx-auto d-flex flex-wrap justify-content-center mt-4 p-4 gap-3"
        >
          {allTutorials.length === 0 && (
            <h1 className="text-center "> You don't have any tutorials</h1>
          )}
          {allTutorials?.map((tutorial, index) => {
            let thumbnailUrl;
            if (tutorial?.thumbnail?.filename) {
              if (/\.(jpeg|jpg|gif|png)$/.test(tutorial.thumbnail.filename)) {
                thumbnailUrl = `${BASE_URL}${tutorial.thumbnail.filename}`;
              } else {
                thumbnailUrl =
                  "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";
              }
            } else {
              thumbnailUrl =
                "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";
            }

            let title = tutorial?.title
              ? tutorial.title.length > 50
                ? tutorial.title.substring(0, 50) + "..."
                : tutorial.title
              : "Title";
            let description = tutorial?.description
              ? tutorial.description.length > 50
                ? tutorial.description.substring(0, 50) + "..."
                : tutorial.description
              : "Description";
            return (
              <Card key={index} style={{ width: "18rem", maxHeight: "400px" }}>
                <Card.Img
                  style={{ maxHeight: "50%" }}
                  className="h-50"
                  variant="top"
                  src={thumbnailUrl}
                />
                <Card.Body className="text-center">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>

                  <Button
                    variant="primary"
                    onClick={() => watchTutorial(tutorial?._id)}
                  >
                    Watch{" "}
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default RpViewTutorials;

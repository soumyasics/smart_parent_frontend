import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../../apis/axiosInstance";
import BASE_URL from "../../../../../apis/baseUrl";
const CounsilarTutorials = ({ id }) => {
  const navigate = useNavigate();
  const [allTutorials, setAllTutorials] = useState([]);
  useEffect(() => {
    if (id) {
      getCounsellorTutorials(id);
    }
  }, []);

  async function getCounsellorTutorials(id) {
    try {
      const res = await axiosInstance.get("viewTutorialByCounsellorId/" + id);
      let tutorials = res?.data?.data || null;
      if (tutorials) {
        let reverseTuto = tutorials.reverse();
        setAllTutorials(reverseTuto);
      } else {
        console.log("can't fetch resource person tutorial details");
      }
    } catch (error) {
      console.log("error get all video tutorials", error);
    }
  }

  function watchTutorial(id) {
    if (!id) {
      alert("Tutorial id not found");
      return;
    }
    navigate("/counselor-tutorial-video/" + id);
  }

  return (
    <>
      <div>
        {allTutorials.length > 0 && (
          <h1 className="text-center mt-5"> My Tutorials </h1>
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
            <h1 className="text-center "> No Tutorials Found</h1>
          )}
          {allTutorials?.map((tutorial, index) => {
            let thumbnailUrl =
              "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";
            if (tutorial?.thumbnail?.filename) {
              if (/\.(jpeg|jpg|gif|png)$/.test(tutorial.thumbnail.filename)) {
                thumbnailUrl = `${BASE_URL}${tutorial.thumbnail.filename}`;
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
    </>
  );
};

export default CounsilarTutorials;

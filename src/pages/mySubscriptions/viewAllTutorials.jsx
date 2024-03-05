import { Button, Card } from "react-bootstrap";
import BASE_URL from "../../apis/baseUrl";
import { useNavigate } from "react-router-dom";
const ViewAllTutorials = ({ allTutorials }) => {
  const navigate = useNavigate();
  function watchTutorial(id) {
    if (!id) {
      alert("Tutorial id not found");
      return;
    }
    navigate("/parent-tutorial-watch/" + id);
  }
  return (
    <>
      <div>
        <div
          style={{
            width: "90%",
            minHeight: "500px",
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
    </>
  );
};

export default ViewAllTutorials;

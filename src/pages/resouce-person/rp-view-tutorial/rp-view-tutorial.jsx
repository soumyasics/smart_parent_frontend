import Footer from "../../commonHomePage/Components/commonFooter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const RpViewTutorials = () => {
  return (
    <>
      <h1> Navbar Here </h1>
      <div>
        <h1 className="text-center"> Tutorials </h1>
        <div
          style={{ width: "90%", minHeight: "500px" }}
          className="bg-primary video-tutorials mx-auto d-flex flex-wrap p-4 gap-3"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
            return (
              <Card style={{ width: "18rem", maxHeight: "400px" }}>
                <Card.Img
                  style={{ maxHeight: "50%" }}
                  className="h-50"
                  variant="top"
                  src="https://media.istockphoto.com/id/1275089443/video/children-playing-with-funny-animals.jpg?s=640x640&k=20&c=o1zD8-WEbHt4XdpWHMPEpTa089MenK-wk6U7qV3JKNQ="
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
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

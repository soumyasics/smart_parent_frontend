import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import "./child-registration.css";
import axiosInstance from "../../../../../apis/axiosInstance";

const ChildRegistrationForm = ({ parentData }) => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [childData, setChildData] = useState({
    childName: "child1",
    childAge: "90",
    childHobbies: "playing",
    childGender: "male",
    childHeight: "120",
    childWeight: "50",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    const {
      childName,
      childAge,
      childHobbies,
      childHeight,
      childWeight,
      childGender,
    } = childData;
    if (
      !childName ||
      !childAge ||
      !childHobbies ||
      !childHeight ||
      !childWeight ||
      !childGender
    ) {
      console.log("All child fields are required");
      return;
    } else {
      sendDataToServer();
    }
  };

  const sendDataToServer = () => {
    let obj = { ...childData, ...parentData };
    console.log("obj", obj);
    axiosInstance
      .post(`smart_parent/registerParent`, obj)
      .then((res) => {
        console.log("res", res);
        let status = res?.data?.msg == "Inserted successfully";
        console.log("stat", res.data.data);
        if (status) {
          let userData = res?.data?.data || null;
         
          alert("Registration successfull.");

          setTimeout(() => {
            // here redirect parent login page
            navigate("/sign_in");
          }, 1500);
        }
      })
      .catch((err) => {
        console.log("error", err);

        if (err.message) {
          alert(err.message);
          return;
        }
      });
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setChildData((preData) => ({ ...preData, [name]: value }));
  };

  useEffect(() => {
    console.log("child data", childData);
  }, [childData]);

  return (
    <div className="child-registration-container">
      <h1> Child registration form</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="11">
            <Form.Label>Child Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={childData.childName}
              name="childName"
              placeholder="Child Name"
              onChange={handleChanges}
            />
            <Form.Control.Feedback type="invalid">
              Child Name is Required.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Label>Child Age</Form.Label>
          <Form.Group md="11" as={Col}>
            <Form.Control
              onChange={handleChanges}
              required
              value={childData.childAge}
              type="number"
              name="childAge"
              placeholder="Child Age"
            />
            <Form.Control.Feedback type="invalid">
              Child Age is Required!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="11">
            <Form.Select
              onChange={handleChanges}
              name="childGender"
              value={childData.childGender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Child Gender is Required!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="11" controlId="validationCustomUsername">
            <Form.Label>Child Height in CMs</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                onChange={handleChanges}
                type="text"
                placeholder="Eg: 150"
                value={childData.childHeight}
                aria-describedby="inputGroupPrepend"
                required
                name="childHeight"
              />
              <Form.Control.Feedback type="invalid">
                Child Height
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="11">
            <Form.Label>Child Weight in KGs</Form.Label>
            <Form.Control
              onChange={handleChanges}
              type="text"
              placeholder="Eg: 40"
              value={childData.childWeight}
              required
              name="childWeight"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="11" controlId="validationCustom05">
            <Form.Label>Child Hobbies</Form.Label>
            <Form.Control
              onChange={handleChanges}
              type="text"
              name="childHobbies"
              placeholder="Eg: 
              Singing, Reading,
              Playing, Dancing.. "
              value={childData.childHobbies}
              required
            />
            <Form.Control.Feedback type="invalid">
              Tell us your child hobbies.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
  );
};
export default ChildRegistrationForm;

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
const AddTaskForm = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [activeRpId, setActiveRpId] = useState(null);

  useEffect(() => {
    checkRpLoggedin();
  }, []);

  const [allTasks, setAllTasks] = useState({
    rpid: "",
    title: "",
    description: "",
    target: "",
    duration: "",
    qn1: "",
    op1_1: "",
    score1_1: "",
    op1_2: "",
    score1_2: "",
    op1_3: "",
    score1_3: "",
    op1_4: "",
    score1_4: "",
    qn2: "",
    op2_1: "",
    score2_1: "",
    op2_2: "",
    score2_2: "",
    op2_3: "",
    score2_3: "",
    op2_4: "",
    score2_4: "",
    qn3: "",
    op3_1: "",
    score3_1: "",
    op3_2: "",
    score3_2: "",
    op3_3: "",
    score3_3: "",
    op3_4: "",
    score3_4: "",
    qn4: "",
    op4_1: "",
    score4_1: "",
    op4_2: "",
    score4_2: "",
    op4_3: "",
    score4_3: "",
    op4_4: "",
    score4_4: "",
    qn5: "",
    op5_1: "",
    score5_1: "",
    op5_2: "",
    score5_2: "",
    op5_3: "",
    score5_3: "",
    op5_4: "",
    score5_4: "",
  });

  // const [allTasks, setAllTasks] = useState({
  //   rpid: "",
  //   title: "Hydration Goal: Drink 5 Liters of Water",
  //   description:
  //     "Stay hydrated throughout the day by drinking a total of 5 liters of water.",
  //   target: "Improve overall health and maintain hydration levels.",
  //   duration: "1 day",
  //   qn1: "How will you track your water intake?",
  //   op1_1: "Use a water bottle with measured markings",
  //   score1_1: "4",
  //   op1_2: "Use a hydration tracking app",
  //   score1_2: "3",
  //   op1_3: "Keep a written log",
  //   score1_3: "2",
  //   op1_4: "Count glasses of water",
  //   score1_4: "1",
  //   qn2: "What strategies will you use to ensure you drink enough water?",
  //   op2_1: "Set reminders throughout the day",
  //   score2_1: "4",
  //   op2_2: "Drink a glass of water before meals",
  //   score2_2: "3",
  //   op2_3: "Carry a water bottle everywhere",
  //   score2_3: "2",
  //   op2_4: "Drink flavored water for variety",
  //   score2_4: "1",
  //   qn3: "How will you handle any obstacles to reaching your water goal?",
  //   op3_1: "Keep a refillable water bottle nearby",
  //   score3_1: "4",
  //   op3_2: "Set a specific schedule for water breaks",
  //   score3_2: "3",
  //   op3_3: "Use hydration reminder apps",
  //   score3_3: "2",
  //   op3_4: "Reward yourself for meeting daily water goals",
  //   score3_4: "1",
  //   qn4: "What benefits do you expect to see from staying hydrated?",
  //   op4_1: "Improved focus and concentration",
  //   score4_1: "4",
  //   op4_2: "Increased energy levels",
  //   score4_2: "3",
  //   op4_3: "Healthier skin and hair",
  //   score4_3: "2",
  //   op4_4: "Better digestion",
  //   score4_4: "1",
  //   qn5: "How will you adjust if you don't reach your hydration goal?",
  //   op5_1: "Drink extra water the next day",
  //   score5_1: "4",
  //   op5_2: "Identify reasons for shortfall and adjust strategy",
  //   score5_2: "3",
  //   op5_3: "Track progress to understand patterns",
  //   score5_3: "2",
  //   op5_4: "Seek guidance from a healthcare professional",
  //   score5_4: "1",
  // });

  useEffect(() => {
    console.log("tas", allTasks);
  }, [allTasks]);
  const handleChanges = (e) => {
    setAllTasks({
      ...allTasks,
      [e.target.name]: e.target.value,
    });
  };

  function checkRpLoggedin() {
    const storedRpId = JSON.parse(localStorage.getItem("activeRp")) || null;
    if (storedRpId) {
      setActiveRpId(storedRpId._id);
      setAllTasks({ ...allTasks, rpid: storedRpId._id });
    } else {
      setActiveRpId(null);
      alert("Loggin Again");
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    }
  }
  const handleSubmit = (event) => {
    const {
      rpid,
      qn1,
      qn2,
      qn3,
      qn4,
      qn5,
      title,
      description,
      target,
      duration,
      op1_1,
      op1_2,
      op1_3,
      op1_4,
      op2_1,
      op2_2,
      op2_3,
      op2_4,
      op3_1,
      op3_2,
      op3_3,
      op3_4,
      op4_1,
      op4_2,
      op4_3,
      op4_4,
      op5_1,
      op5_2,
      op5_3,
      op5_4,
      score1_1,
      score1_2,
      score1_3,
      score1_4,
      score2_1,
      score2_2,
      score2_3,
      score2_4,
      score3_1,
      score3_2,
      score3_3,
      score3_4,
      score4_1,
      score4_2,
      score4_3,
      score4_4,
      score5_1,
      score5_2,
      score5_3,
      score5_4,
    } = allTasks;
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    if (
      rpid &&
      qn1 &&
      qn2 &&
      qn3 &&
      qn4 &&
      qn5 &&
      title &&
      duration &&
      target &&
      description &&
      op1_1 &&
      op1_2 &&
      op1_3 &&
      op1_4 &&
      op2_1 &&
      op2_2 &&
      op2_3 &&
      op2_4 &&
      op3_1 &&
      op3_2 &&
      op3_3 &&
      op3_4 &&
      op4_1 &&
      op4_2 &&
      op4_3 &&
      op4_4 &&
      op5_1 &&
      op5_2 &&
      op5_3 &&
      op5_4 &&
      score1_1 &&
      score1_2 &&
      score1_3 &&
      score1_4 &&
      score2_1 &&
      score2_2 &&
      score2_3 &&
      score2_4 &&
      score3_1 &&
      score3_2 &&
      score3_3 &&
      score3_4 &&
      score4_1 &&
      score4_2 &&
      score4_3 &&
      score4_4 &&
      score5_1 &&
      score5_2 &&
      score5_3 &&
      score5_4
    ) {
      sendTaskToServer();
    } else {
      alert("Please fill all fields.");
    }
  };

  async function sendTaskToServer() {
    try {
      let res = await axiosInstance.post("/addQuestions", allTasks);
      console.log("res", res);
      if (res.status === 200) {
        alert("Task added successfully");
        setTimeout(() => {
          navigate("/rp-view-tutorials");
        }, 1000);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log("error on add task", error);
      if (error.response.status === 422) {
        alert(error.response.data.message);
      }
    }
  }

  return (
    <div className="p-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 mt-5">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>
              <h3> Title</h3>
            </Form.Label>
            <FloatingLabel label="Task Title">
              <Form.Control
                as="textarea"
                placeholder="Task Title"
                required
                name="title"
                value={allTasks.title}
                onChange={handleChanges}
              />
              <Form.Control.Feedback type="invalid">
                Please provide task title.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>
              {" "}
              <h3> Duration (in minutes)</h3>
            </Form.Label>
            <Form.Control
              onChange={handleChanges}
              name="duration"
              required
              value={allTasks.duration}
              type="text"
              placeholder="Duration Eg: 50"
              style={{ height: "61px" }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide task duration.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>
              <h3> Target Childrens</h3>{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Target Childrens Eg: 3"
              required
              name="target"
              value={allTasks.target}
              onChange={handleChanges}
              style={{ height: "61px" }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide child target.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>
              <h3>Description</h3>
            </Form.Label>
            <FloatingLabel label="Task Description">
              <Form.Control
                as="textarea"
                placeholder="Task Description"
                style={{ height: "70px" }}
                required
                name="description"
                value={allTasks.description}
                onChange={handleChanges}
              />
              <Form.Control.Feedback type="invalid">
                Please provide task description
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row></Row>

        <Row className="mb-3 mt-5">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>
              <h3> Question 1</h3>
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Question 1">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "70px" }}
                required
                name="qn1"
                value={allTasks.qn1}
                onChange={handleChanges}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a question.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="Option 1"
              required
              name="op1_1"
              value={allTasks.op1_1}
              onChange={handleChanges}
            />
            <Form.Control.Feedback type="invalid">
              Please provide first option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 2</Form.Label>
            <Form.Control
              name="op1_2"
              value={allTasks.op1_2}
              onChange={handleChanges}
              type="text"
              placeholder="Option 2"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide second option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 3</Form.Label>
            <Form.Control
              name="op1_3"
              value={allTasks.op1_3}
              onChange={handleChanges}
              type="text"
              placeholder="Option 3"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide third option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 4</Form.Label>
            <Form.Control
              name="op1_4"
              value={allTasks.op1_4}
              onChange={handleChanges}
              type="text"
              placeholder="Option 4"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide fourth option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mt-3">
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 1</Form.Label>
            <Form.Select
              required={true}
              name="score1_1"
              onChange={handleChanges}
              value={allTasks.score1_1}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 2</Form.Label>
            <Form.Select
              name="score1_2"
              value={allTasks.score1_2}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 3</Form.Label>
            <Form.Select
              name="score1_3"
              value={allTasks.score1_3}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 4</Form.Label>
            <Form.Select
              name="score1_4"
              value={allTasks.score1_4}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 mt-5">
          <Form.Group as={Col} md="12">
            <Form.Label>
              <h3> Question 2</h3>
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Question 2">
              <Form.Control
                name="qn2"
                value={allTasks.qn2}
                onChange={handleChanges}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "70px" }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a question.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 1</Form.Label>
            <Form.Control
              name="op2_1"
              value={allTasks.op2_1}
              onChange={handleChanges}
              type="text"
              placeholder="Option 1"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide first option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 2</Form.Label>
            <Form.Control
              name="op2_2"
              value={allTasks.op2_2}
              onChange={handleChanges}
              type="text"
              placeholder="Option 2"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide second option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 3</Form.Label>
            <Form.Control
              name="op2_3"
              value={allTasks.op2_3}
              onChange={handleChanges}
              type="text"
              placeholder="Option 3"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide third option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 4</Form.Label>
            <Form.Control
              name="op2_4"
              value={allTasks.op2_4}
              onChange={handleChanges}
              type="text"
              placeholder="Option 4"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide fourth option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mt-3">
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 1</Form.Label>
            <Form.Select
              name="score2_1"
              value={allTasks.score2_1}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 2</Form.Label>
            <Form.Select
              name="score2_2"
              value={allTasks.score2_2}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 3</Form.Label>
            <Form.Select
              name="score2_3"
              value={allTasks.score2_3}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 4</Form.Label>
            <Form.Select
              name="score2_4"
              value={allTasks.score2_4}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 mt-5">
          <Form.Group as={Col} md="12">
            <Form.Label>
              <h3> Question 3</h3>
            </Form.Label>
            <FloatingLabel label="Question 3">
              <Form.Control
                name="qn3"
                value={allTasks.qn3}
                onChange={handleChanges}
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "70px" }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a question.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 1</Form.Label>
            <Form.Control
              name="op3_1"
              value={allTasks.op3_1}
              onChange={handleChanges}
              type="text"
              placeholder="Option 1"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide first option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 2</Form.Label>
            <Form.Control
              name="op3_2"
              value={allTasks.op3_2}
              onChange={handleChanges}
              type="text"
              placeholder="Option 2"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide second option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 3</Form.Label>
            <Form.Control
              name="op3_3"
              value={allTasks.op3_3}
              onChange={handleChanges}
              type="text"
              placeholder="Option 3"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide third option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 4</Form.Label>
            <Form.Control
              name="op3_4"
              value={allTasks.op3_4}
              onChange={handleChanges}
              type="text"
              placeholder="Option 4"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide fourth option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mt-3">
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 1</Form.Label>
            <Form.Select
              name="score3_1"
              value={allTasks.score3_1}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 2</Form.Label>
            <Form.Select
              name="score3_2"
              value={allTasks.score3_2}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 3</Form.Label>
            <Form.Select
              name="score3_3"
              value={allTasks.score3_3}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 4</Form.Label>
            <Form.Select
              name="score3_4"
              value={allTasks.score3_4}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 mt-5">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>
              <h3> Question 4</h3>
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Question 4">
              <Form.Control
                as="textarea"
                name="qn4"
                value={allTasks.qn4}
                onChange={handleChanges}
                placeholder="Leave a comment here"
                style={{ height: "70px" }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a question.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 1</Form.Label>
            <Form.Control
              name="op4_1"
              value={allTasks.op4_1}
              onChange={handleChanges}
              type="text"
              placeholder="Option 1"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide first option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 2</Form.Label>
            <Form.Control
              name="op4_2"
              value={allTasks.op4_2}
              onChange={handleChanges}
              type="text"
              placeholder="Option 2"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide second option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 3</Form.Label>
            <Form.Control
              name="op4_3"
              value={allTasks.op4_3}
              onChange={handleChanges}
              type="text"
              placeholder="Option 3"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide third option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 4</Form.Label>
            <Form.Control
              name="op4_4"
              value={allTasks.op4_4}
              onChange={handleChanges}
              type="text"
              placeholder="Option 4"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide fourth option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mt-3">
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 1</Form.Label>
            <Form.Select
              name="score4_1"
              value={allTasks.score4_1}
              onChange={handleChanges}
              required={true}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 2</Form.Label>
            <Form.Select
              name="score4_2"
              value={allTasks.score4_2}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 3</Form.Label>
            <Form.Select
              name="score4_3"
              value={allTasks.score4_3}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 4</Form.Label>
            <Form.Select
              name="score4_4"
              value={allTasks.score4_4}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 mt-5">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>
              <h3> Question 5</h3>
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Question 5">
              <Form.Control
                as="textarea"
                name="qn5"
                value={allTasks.qn5}
                onChange={handleChanges}
                placeholder="Leave a comment here"
                style={{ height: "70px" }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a question.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 1</Form.Label>
            <Form.Control
              name="op5_1"
              value={allTasks.op5_1}
              onChange={handleChanges}
              type="text"
              placeholder="Option 1"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide first option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 2</Form.Label>
            <Form.Control
              name="op5_2"
              value={allTasks.op5_2}
              onChange={handleChanges}
              type="text"
              placeholder="Option 2"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide second option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 3</Form.Label>
            <Form.Control
              name="op5_3"
              value={allTasks.op5_3}
              onChange={handleChanges}
              type="text"
              placeholder="Option 3"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide third option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Option 4</Form.Label>
            <Form.Control
              name="op5_4"
              value={allTasks.op5_4}
              onChange={handleChanges}
              type="text"
              placeholder="Option 4"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide fourth option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mt-3">
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 1</Form.Label>
            <Form.Select
              name="score5_1"
              value={allTasks.score5_1}
              onChange={handleChanges}
              required={true}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 2</Form.Label>
            <Form.Select
              name="score5_2"
              value={allTasks.score5_2}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 3</Form.Label>
            <Form.Select
              name="score5_3"
              value={allTasks.score5_3}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Score for option 4</Form.Label>
            <Form.Select
              name="score5_4"
              value={allTasks.score5_4}
              required={true}
              onChange={handleChanges}
            >
              <option value="">Choose Score </option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a score for this option.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <div className="mt-5 d-flex justify-content-center">
          <Button type="submit">Submit Tasks</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTaskForm;

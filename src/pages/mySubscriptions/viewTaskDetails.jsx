import { Button, Card, Col, Form, Row } from "react-bootstrap";
import BASE_URL from "../../apis/baseUrl";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../commonHomePage/Components/Comp1";
import { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import axiosInstance from "../../apis/axiosInstance";
import Footer from "../commonHomePage/Components/commonFooter";
import "./task.css";
const ViewAllTasks = () => {
  const { taskId } = useParams();
  const [taskData, setTaskData] = useState(null);
  const [btnContent, setBtnContent] = useState("Accept Task");
  const [taskAccepted, setTaskAccepted] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (taskId) {
      getTaskData();
    }
  }, []);
  async function getTaskData() {
    try {
      let res = await axiosInstance.get("viewTaskQnById/" + taskId);
      if (res.status === 200) {
        let data = res.data?.data || null;
        if (data) {
          setTaskData(data);
        }
      }
    } catch (error) {
      console.log("error on get task data", error);
    }
  }
  console.log("td", taskData);
  function taskStatusSwitch() {
    if (btnContent === "Accept Task") {
      setBtnContent("Cancel Task");

      setTaskAccepted(true);
    } else {
      setBtnContent("Accept Task");

      setTaskAccepted(false);
    }
  }
  return (
    <div>
      <Navbar />

      <div className="view-task-details p-5" style={{ minHeight: "500px" }}>
        <div className="w-75 mx-auto  text-center"></div>
        <h3 className="text-center "> {taskData?.title} </h3>
        <p className="text-center">
          <i>{taskData?.description} </i>{" "}
        </p>
        <Row>
          <Col xs={10}>
            {" "}
            <b>Task Duration:</b> {taskData?.duration}
          </Col>
          <Col>
            {" "}
            <Button
              variant={btnContent === "Cancel Task" ? "danger" : "primary"}
              onClick={taskStatusSwitch}
            >
              {btnContent}
            </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={10}>
            {" "}
            <b>Task Target:</b> {taskData?.target}
          </Col>
        </Row>

        {taskAccepted && (
          <>
            <div className="w-75 mx-auto mt-5 text-center">
              <h4>
                After Completing the task you should answer the following
                questions and submit the form
              </h4>
            </div>

            <form className="mt-5">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h6> Question 1: {taskData?.qn1} </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Choose one of these options. </p>
                    <Form.Check
                      inline
                      label={`1. ${taskData?.op1_1}`}
                      name="ques1"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`2. ${taskData?.op1_2}`}
                      name="ques1"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`3. ${taskData?.op1_3}`}
                      name="ques1"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`4. ${taskData?.op1_4}`}
                      name="ques1"
                      type="radio"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <h6> Question 2: {taskData?.qn2} </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Choose one of these options. </p>
                    <Form.Check
                      inline
                      label={`1. ${taskData?.op2_1}`}
                      name="ques2"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`2. ${taskData?.op2_2}`}
                      name="ques2"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`3. ${taskData?.op2_3}`}
                      name="ques2"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`4. ${taskData?.op2_4}`}
                      name="ques2"
                      type="radio"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h6> Question 3: {taskData?.qn3} </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Choose one of these options. </p>
                    <Form.Check
                      inline
                      label={`1. ${taskData?.op3_1}`}
                      name="ques3"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`2. ${taskData?.op3_2}`}
                      name="ques3"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`3. ${taskData?.op3_3}`}
                      name="ques3"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`4. ${taskData?.op3_4}`}
                      name="ques3"
                      type="radio"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h6> Question 4: {taskData?.qn4} </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Choose one of these options. </p>
                    <Form.Check
                      inline
                      label={`1. ${taskData?.op4_1}`}
                      name="ques4"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`2. ${taskData?.op4_2}`}
                      name="ques4"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`3. ${taskData?.op4_3}`}
                      name="ques4"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`4. ${taskData?.op4_4}`}
                      name="ques4"
                      type="radio"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h6> Question 5: {taskData?.qn5} </h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Choose one of these options. </p>
                    <Form.Check
                      inline
                      label={`1. ${taskData?.op5_1}`}
                      name="ques5"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`2. ${taskData?.op5_2}`}
                      name="ques5"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`3. ${taskData?.op5_3}`}
                      name="ques5"
                      type="radio"
                    />
                    <Form.Check
                      inline
                      label={`4. ${taskData?.op5_4}`}
                      name="ques5"
                      type="radio"
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="text-center mx-auto">
                <Button className="btn btn-primary mt-3 " type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default ViewAllTasks;

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
  const [answerData, setAnswerData] = useState({
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: "",
    parentid: "",
  });

  useEffect(() => {
    let parentId = JSON.parse(localStorage.getItem("parentData")) || null;
    console.log("parnt id", parentId);
    if (parentId) {
      setAnswerData({ ...answerData, parentid: parentId._id });
      if (taskId) {
        getTaskData();
      } else {
        alert("Task Id not found");
        return;
      }
    } else {
      alert("Parent not logged in");
      navigate("/sign_in");
      return;
    }
  }, []);
  useEffect(() => {
    console.log("ans", answerData);
  }, [answerData]);
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
  function taskStatusSwitch() {
    if (btnContent === "Accept Task") {
      setBtnContent("Cancel Task");

      setTaskAccepted(true);
    } else {
      setBtnContent("Accept Task");

      setTaskAccepted(false);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!answerData.ans1) {
      alert("Please answer question 1");
      return;
    }
    if (!answerData.ans2) {
      alert("Please answer question 2");
      return;
    }
    if (!answerData.ans3) {
      alert("Please answer question 3");
      return;
    }
    if (!answerData.ans4) {
      alert("Please answer question 4");
      return;
    }
    if (!answerData.ans5) {
      alert("Please answer question 5");
      return;
    }

    sendDataToServer(answerData);
  }

  const sendDataToServer = async (answerData) => {
    try {
      let res = await axiosInstance.post("addAnswers/" + taskId, answerData);
      if (res.status === 200) {
        let status = res?.data?.data?.comments || "Answer added successfully";
        alert(status);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      if (error.response.status === 500) {
        alert(error.response.data.message);
      }
      if (error.response.status === 400) {
        alert(error.response.data.message);
      }
      console.log("error on add answer", error);
    }
  };

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
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans1: taskData?.op1_1,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`2. ${taskData?.op1_2}`}
                      name="ques1"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans1: taskData?.op1_2,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`3. ${taskData?.op1_3}`}
                      name="ques1"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans1: taskData?.op1_3,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`4. ${taskData?.op1_4}`}
                      name="ques1"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans1: taskData?.op1_4,
                        });
                      }}
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
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans2: taskData?.op2_1,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`2. ${taskData?.op2_2}`}
                      name="ques2"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans2: taskData?.op2_2,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`3. ${taskData?.op2_3}`}
                      name="ques2"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans2: taskData?.op2_3,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`4. ${taskData?.op2_4}`}
                      name="ques2"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans2: taskData?.op2_4,
                        });
                      }}
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
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans3: taskData?.op3_1,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`2. ${taskData?.op3_2}`}
                      name="ques3"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans3: taskData?.op3_2,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`3. ${taskData?.op3_3}`}
                      name="ques3"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans3: taskData?.op3_3,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`4. ${taskData?.op3_4}`}
                      name="ques3"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans3: taskData?.op3_4,
                        });
                      }}
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
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans4: taskData?.op4_1,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`2. ${taskData?.op4_2}`}
                      name="ques4"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans4: taskData?.op4_2,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`3. ${taskData?.op4_3}`}
                      name="ques4"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans4: taskData?.op4_3,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`4. ${taskData?.op4_4}`}
                      name="ques4"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans4: taskData?.op4_4,
                        });
                      }}
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
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans5: taskData?.op5_1,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`2. ${taskData?.op5_2}`}
                      name="ques5"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans5: taskData?.op5_2,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`3. ${taskData?.op5_3}`}
                      name="ques5"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans5: taskData?.op5_3,
                        });
                      }}
                    />
                    <Form.Check
                      inline
                      label={`4. ${taskData?.op5_4}`}
                      name="ques5"
                      type="radio"
                      onChange={() => {
                        setAnswerData({
                          ...answerData,
                          ans5: taskData?.op5_4,
                        });
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="text-center mx-auto">
                <Button
                  className="btn btn-primary mt-3"
                  onClick={handleSubmit}
                  type="submit"
                >
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

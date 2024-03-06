import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const AddTaskForm = () => {
  const [validated, setValidated] = useState(false);
  const [allTasks, setAllTasks] = useState({
    title: "",
    description: "",
    duration: "",
    target: "",
    points: "",
    qn1: "",
    op1_1: "",
    op1_2: "",
    op1_3: "",
    op1_4: "",
    ans1: "",
    qn2: "",
    op2_1: "",
    op2_2: "",
    op2_3: "",
    op2_4: "",
    ans2: "",
    qn3: "",
    op3_1: "",
    op3_2: "",
    op3_3: "",
    op3_4: "",
    ans3: "",
    qn4: "",
    op4_1: "",
    op4_2: "",
    op4_3: "",
    op4_4: "",
    ans4: "",
    qn5: "",
    op5_1: "",
    op5_2: "",
    op5_3: "",
    op5_4: "",
    ans5: "",
  });
  useEffect(() => {
    console.log("tas", allTasks);
  }, [allTasks]);
  const handleChanges = (e) => {
    setAllTasks({
      ...allTasks,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="p-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 mt-5">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>
              <h3> Title</h3>
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Task Title">
              <Form.Control
                as="textarea"
                placeholder="Task Title"
                style={{ height: "70px" }}
                required
                name="title"
                value={allTasks.title}
                onChange={handleChanges}
              />
              <Form.Control.Feedback type="invalid">
                Please specify task in a detailed way.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>
              <h3>Description</h3>
            </Form.Label>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Task Description"
            >
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
                Please specify task in a detailed way.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md="4">
            <Form.Label>Duration (in minutes)</Form.Label>
            <Form.Control
              onChange={handleChanges}
              name="duration"
              required
              value={allTasks.duration}
              type="text"
              placeholder="Duration Eg: 50"
            />
            <Form.Control.Feedback type="invalid">
              Please provide task duration.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Target Childrens</Form.Label>
            <Form.Control
              type="text"
              placeholder="Target Childrens Eg: 3"
              required
              name="target"
              value={allTasks.target}
              onChange={handleChanges}
            />
            <Form.Control.Feedback type="invalid">
              Please provide child target.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Points</Form.Label>
            <Form.Control
              type="text"
              placeholder="Points Eg: 100"
              required
              name="points"
              value={allTasks.points}
              onChange={handleChanges}
            />
            <Form.Control.Feedback type="invalid">
              Please provide child points.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

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
                Please specify task in a detailed way.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="2">
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
          <Form.Group as={Col} md="2">
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
          <Form.Group as={Col} md="2">
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
          <Form.Group as={Col} md="2">
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

          <Form.Group as={Col} md="4">
            <Form.Label>Select Answer</Form.Label>
            <Form.Select
              required={true}
              name="ans1"
              value={allTasks.ans1}
              onChange={handleChanges}
            >
              <option value="">Choose Answer option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide which option is right?
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
                Please specify task in a detailed way.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="2">
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
          <Form.Group as={Col} md="2">
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
          <Form.Group as={Col} md="2">
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
          <Form.Group as={Col} md="2">
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

          <Form.Group as={Col} md="4">
            <Form.Label>Select Answer</Form.Label>
            <Form.Select
              required={true}
              name="ans2"
              value={allTasks.ans2}
              onChange={handleChanges}
            >
              <option value="">Choose Answer option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide which option is right?
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 mt-5">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>
              <h3> Question 3</h3>
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Question 3">
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
                Please specify task in a detailed way.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md="2">
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
          <Form.Group as={Col} md="2">
            <Form.Label>Option 2</Form.Label>
            <Form.Control type="text" placeholder="Option 2" required />
            <Form.Control.Feedback type="invalid">
              Please provide second option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Option 3</Form.Label>
            <Form.Control type="text" placeholder="Option 3" required />
            <Form.Control.Feedback type="invalid">
              Please provide third option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Option 4</Form.Label>
            <Form.Control type="text" placeholder="Option 4" required />
            <Form.Control.Feedback type="invalid">
              Please provide fourth option.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Select Answer</Form.Label>
            <Form.Select required={true}>
              <option value="">Choose Answer option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide which option is right?
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
                placeholder="Leave a comment here"
                style={{ height: "70px" }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please specify task in a detailed way.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="2">
            <Form.Label>Option 1</Form.Label>
            <Form.Control type="text" placeholder="Option 1" required />
            <Form.Control.Feedback type="invalid">
              Please provide first option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Option 2</Form.Label>
            <Form.Control type="text" placeholder="Option 2" required />
            <Form.Control.Feedback type="invalid">
              Please provide second option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Option 3</Form.Label>
            <Form.Control type="text" placeholder="Option 3" required />
            <Form.Control.Feedback type="invalid">
              Please provide third option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Option 4</Form.Label>
            <Form.Control type="text" placeholder="Option 4" required />
            <Form.Control.Feedback type="invalid">
              Please provide fourth option.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Select Answer</Form.Label>
            <Form.Select required={true}>
              <option value="">Choose Answer option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide which option is right?
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
                placeholder="Leave a comment here"
                style={{ height: "70px" }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please specify task in a detailed way.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="2">
            <Form.Label>Option 1</Form.Label>
            <Form.Control type="text" placeholder="Option 1" required />
            <Form.Control.Feedback type="invalid">
              Please provide first option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Option 2</Form.Label>
            <Form.Control type="text" placeholder="Option 2" required />
            <Form.Control.Feedback type="invalid">
              Please provide second option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Option 3</Form.Label>
            <Form.Control type="text" placeholder="Option 3" required />
            <Form.Control.Feedback type="invalid">
              Please provide third option.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Option 4</Form.Label>
            <Form.Control type="text" placeholder="Option 4" required />
            <Form.Control.Feedback type="invalid">
              Please provide fourth option.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Select Answer</Form.Label>
            <Form.Select required={true}>
              <option value="">Choose Answer option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide which option is right?
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

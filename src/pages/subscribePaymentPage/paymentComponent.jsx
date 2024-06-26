import { useState, useEffect, useContext } from "react";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useParentLoggedIn from "../../customHooks/checkParentLoggedIn";
import axiosInstance from "../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import "./payment-page.css";
const PaymentForm = () => {
  const navigate = useNavigate();
  const { rpId } = useParams();
  const [validated, setValidated] = useState(false);
  const isParentLoggedin = useParentLoggedIn();

  const [userAcDetails, setUserAcDetails] = useState({
    acHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    amount: "999",
  });

  const doPayment = async () => {
    let activeParent = JSON.parse(localStorage.getItem("parentData")) || null;
    if (activeParent && activeParent._id) {
      let requiredData = {
        ...userAcDetails,
        resourcePersonId: rpId,
        parentId: activeParent._id,
      };
      try {
        const subscriptionData = await axiosInstance.post(
          "new-subscription",
          requiredData
        );
        console.log("data:", subscriptionData);
        if (subscriptionData.status === 201) {
          console.log("payment success");
          alert("Payment Successful.");

          setTimeout(() => {
            navigate("/user-my-subscription");
          }, 1500);
        }
      } catch (error) {
        console.log("error from subscription", error);
        if (error.response.status === 500) {
          alert("Server error. Please try again later");
          return;
        }
        if (error.response.status === 400) {
          let errorMsg = error.response?.data?.message || "Payment Failed";
          alert(errorMsg);
          return;
        }
      }
    } else {
      console.log("active parent not found, login again");
    }
  };

  const handleSubmitPayment = (event) => {
    event.preventDefault();
    if (!isParentLoggedin) {
      alert("Please login to subscribe");
      return;
    }

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    const { acHolderName, cardNumber, expiryDate, cvv } = userAcDetails;

    const checkTypes = () => {
      const convertCardNumber = Number(cardNumber);
      if (isNaN(convertCardNumber)) {
        console.log("Check your card number");
        return false;
      }
      const convertCvv = Number(cvv);
      if (isNaN(convertCvv)) {
        console.log("Check your cvv");
        return false;
      }
      return true;
    };

    if (
      !acHolderName ||
      !cardNumber ||
      !expiryDate ||
      !cvv ||
      cvv.length !== 3 ||
      cardNumber.length !== 16
    ) {
      console.log("all fields are mandatory");
      return;
    } else {
      if (checkTypes()) {
        doPayment();
      } else {
        console.log("check types failed");
      }
    }
  };

  const handleChange = (e) => {
    setUserAcDetails({
      ...userAcDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelAction = () => {
    setUserAcDetails({
      ...userAcDetails,
      acHolderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      amount: 999,
    });

    setValidated(false);
  };

  return (
    <div
      id="subscribe-payment-container"
      style={{ width: "35rem" }}
      className="mt-4 py-3"
    >
      <Form noValidate validated={validated} onSubmit={handleSubmitPayment}>
        <h4 className="text-center text-dark"> Payment Overview </h4>
        <p className="text-center text-dark">
          Please fill your payment details.
        </p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Card Holder Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="acHolderName"
            value={userAcDetails.acHolderName}
            type="text"
            placeholder="Card Holder Name"
            autoFocus
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide card holder name
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col>
            {" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                name="cardNumber"
                value={userAcDetails.cardNumber}
                type="text"
                placeholder="Card Number"
                pattern="[0-9]{16}"
                minLength={16}
                maxLength={16}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide 16 digits card number
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                value={userAcDetails.expiryDate}
                name="expiryDate"
                type="date"
                pattern="[0-9]{2}/[0-9]{2}"
                required
                placeholder="MM/YY"
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide expiry date.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                value={userAcDetails.cvv}
                onChange={handleChange}
                placeholder="CVV"
                name="cvv"
                pattern="[0-9]{3}"
                type="text"
                required
                minLength={3}
                maxLength={3}
              />
              <Form.Control.Feedback type="invalid">
                Please provide CVV
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-3 d-flex justify-content-between align-items-center">
          <Button
            style={{
              width: "10rem",
              height: "50px",

              fontSize: "20px",
            }}
            onClick={handleCancelAction}
            variant="warning"
          >
            {" "}
            Cancel
          </Button>
          <Button type="submit" style={{ width: "10rem", height: "50px" }}>
            {" "}
            Pay ₹ 999{" "}
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default PaymentForm;

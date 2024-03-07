import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Footer from "../../Pages/Listener/Footer";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Baseurl";
import { toast } from "react-toastify";
import { BsArrowClockwise } from "react-icons/bs";
import { useParams } from 'react-router-dom';

function Paymentform() {
  const [cardholdername, setCardholdername] = useState("");
  const [creaditcardnumber, setCredictcardnumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [CVV, setCVV] = useState("");
  const [creditcard,setCredictcard]=useState({
    no:123456789012,
    cvv:111,
    date:"2024-01",
    name:"ajeena"
  })
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePayment=async()=>{
    if(cardholdername==creditcard.name && creaditcardnumber==creditcard.no && expirationDate==creditcard.date && CVV==creditcard.cvv){
        console.log("nbchdbv");
    
    try {
        const result = await axiosInstance.post("/subscribePodcast", {
            listenerid:localStorage.getItem("listenerid"),
            podcastid:id,
            paymentstatus:true
        });
        if (result.status == 200) {
            alert('Payment Sucess');
            navigate('/listenersubscription')
        }
      } catch (err) {
        console.log("Error:", err);
        if (err.response && err.response.data && err.response.data.message) {
          document.getElementById("alertuser").innerHTML =
            err.response.data.message;
        } else {
          document.getElementById("alertuser").innerHTML =
            "An error occurred. Please try again.";
        }
      }} else {
        alert('invalid payment details');
      }

  }
  return (
    <div>
      <div className="paymentmain">
        <div className="row">
          <div className="col">
            <div className="listenerlogin_form">
              <form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    placeholder="cardholdername"
                    value={cardholdername}
                    onChange={(e) => setCardholdername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="number"
                    placeholder="creaditcardnumber"
                    value={creaditcardnumber}
                    onChange={(e) => setCredictcardnumber(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="month"
                   
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                  />
                </Form.Group><Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="CVV"
                  value={CVV}
                  onChange={(e) => setCVV(e.target.value)}
                />
              </Form.Group>
                <div id="alertuser"></div>
                <div>
                  <button type="button" onClick={handlePayment} className="listenerloginbtn mb-2 p-1">
                    proceed to payment
                  </button>{" "}
                </div>
                <div>
                  <button
                    type="reset"
                    className="listenercancelbtn p-1"
                    variant="secondary"
                  >
                    Cancel
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paymentform;

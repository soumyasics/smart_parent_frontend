import "./rplist.css";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import BASE_URL from "../../../../apis/baseUrl";
import img from "../../../../Assets/illustrators/man-placeholder.jpg";
import { useNavigate } from "react-router-dom";
function PaymentList() {
  const navigate = useNavigate();
  const [paymentList, setpaymentList] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axiosInstance
      .get("get-all-subscription")
      .then((res) => {
        console.log("res", res);
        let payments = res?.data?.data || [];
        
        console.log(payments, "data");
        setpaymentList(payments);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }




  
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div style={{ maxWidth: "77%" }} className="container">
          {paymentList.length === 0 && (
            <h1 className="mt-5"> No Resource Person Requests Found</h1>
          )}
          {paymentList.length > 0 && (
            <div>
              <h3 className="mt-5 ms-3">Payment Details</h3>
              <Table
                striped
                bordered
                hover
                className="mt-5 ms-3"
                style={{ width: "100%" }}
              >
                <thead style={{ height: "50px" }}>
                  <tr>
                    <th>No</th>
                    <th>A/C Holder Name</th>
                    <th>Resource Person Name</th>
                    <th>Amount</th>
                    <th>Card Number</th>
                    <th>CVV</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentList.map((payment, index) => {
                    return (
                      <tr key={index} className="mt-4">
                        <td>{index + 1}</td>
                        <td>{payment?.acHolderName}</td>
                        <td>{payment?.resourcePersonId?.name}</td>
                        <td>{payment?.amount}</td>
                        <td>{payment?.cardNumber}</td>
                        <td>{payment?.cvv}</td>

                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentList;

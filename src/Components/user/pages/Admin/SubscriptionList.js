import "./bloglist.css";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import react, { useState, useEffect } from "react";
import BASE_URL from "../../../../apis/baseUrl";

function SubscriptionList() {
  const [subscription, setSubscription] = useState([]);

  const subscriptionData = async () => {
    try {
      const response = await axiosInstance.get("get-all-subscription");
      setSubscription(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    subscriptionData();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-8">
          {subscription.map((item, index) => (
            <div></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubscriptionList;

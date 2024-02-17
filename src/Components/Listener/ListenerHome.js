import React, { useEffect } from "react";
import LandingPage from "../../Pages/Listener/LandingPage";
import { useNavigate } from "react-router-dom";

function ListenerHome() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("listenerid") !== null) {
      navigate("/listenerhome");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default ListenerHome;

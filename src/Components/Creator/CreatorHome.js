import React,{useEffect} from 'react'
import { Container } from 'react-bootstrap'
import img from "../../Assest/Group 1.png";
import LandingPage from '../../Pages/Listener/LandingPage'
import { useNavigate } from 'react-router-dom';
function CreatorHome() {
  const navigate=useNavigate()

  useEffect(() => {
    if (localStorage.getItem("creatorid") !== null) {
      navigate("/creatorhome");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div>
    <LandingPage/>
    </div>
  )
}

export default CreatorHome

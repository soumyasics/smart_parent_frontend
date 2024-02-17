import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function ListenerSubscription() {
  const navigate=useNavigate()

  useEffect(() => {
    if (localStorage.getItem("listenerid") !== null) {
      navigate("/listenersubscription");
    } else {
      navigate("/");
    }
  }, []);
  
  return (
    <div>
      
    </div>
  )
}

export default ListenerSubscription

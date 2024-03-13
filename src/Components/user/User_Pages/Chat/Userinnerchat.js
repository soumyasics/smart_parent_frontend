// import React, { useEffect, useRef, useState } from 'react'; import "./Userinnerchat.css"
// import innerchatimg from "../../../../Assets/test.jpg"
// import axiosInstance from "../../../../apis/axiosInstance";
// import { IoSend } from "react-icons/io5";
// import { CiTimer } from "react-icons/ci";

// function Userinnerchat({ selectedRecipient }) {

//   const id = localStorage.getItem("userdetails");

//   const [data,setdata]=useState(false)

//   const [ids, setIds] = useState({
//     rpid: '',
//     parentid: id
//   });
//   useEffect(() => {
//     if (selectedRecipient != null)
//       setIds({ ...ids, rpid: selectedRecipient._id })
//   }, [selectedRecipient])


//   console.log('ids', ids);
// const [message,setMessage]=useState({
//     rpid: '',
//     parentid: id,
//     content: '',
//     sender:"parent"

// })

// useEffect(() => {
//   if (selectedRecipient != null)
//     setMessage({ ...message, rpid: selectedRecipient._id })
// }, [selectedRecipient])

//   const [profile, setProfile] = useState({});
//   const [chats, setChats] = useState([]);
//   console.log(chats);

//   useEffect(() => {
//     console.log("ids", ids);
//     axiosInstance.post(`/viewChatBerweenParentAndRp`, ids)
//       .then((res) => {
//         if (res.data.status == 200) {
//           setChats(res.data.data);  
//         } else {
//           setChats([])
//         }
//         console.log(res, "data");

//       })
//       .catch((err) => {
//         console.log(err, "error");
//       });
//     console.log(id);
//   }, [ids,data]);


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setMessage({ ...message, [name]: value });
//     console.log(message);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('mesg', message)

//       axiosInstance
//         .post("/chattingParentRp", message)
//         .then((res) => {
//           console.log("Response:", res);
//           setdata(prev=>!prev)
//           setMessage({ ...message, content: '' }); 

//           scrollToBottom();
//           // setTimeout(() => {
//           //   navigate("/admin");
//           // }, 1500);
//         })
//         .catch((err) => {
//           console.error("Error:", err);
//         });

//       }
//       const messagesEndRef = useRef(null);

//       const scrollToBottom = () => {
//         messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//       };

//   console.log("data", selectedRecipient);
//   return (
//     <div className='innerchat'>

//       <div className='innerchathead'>
//         <div className='innersubhead'>
//           <div className='innerchatprofile'>
//             <img src={innerchatimg} alt='' />
//           </div>
//           <h1>Adrian Gomez</h1>
//         </div>
//       </div>

//       <div className='user_chat '>
//         <div className='row chat_view' >
//           {
//             chats.length ? chats.map((e) => {
//               // chattingParentRp
//               return (
//                 <>
//                   <div className='innerchatmsg col-6'>
//                     <p>{e.sender === 'rp' ? e.content : ''}</p>
//                     <small>
//                       {e.sender === 'rp' ? <><CiTimer /> {e.createdAt.slice(11, 16)}</> : ''}
//                     </small>
//                   </div>
//                   <div className='inneruserchatmsg col-6'>
//                     <p className='parent_chat_box'>{e.sender === 'parent' ? e.content : ''}</p>
//                     <small className={e.sender === 'parent' ? 'time-right' : ''}>
//                       {e.sender === 'parent' ? <><CiTimer /> {e.createdAt.slice(11, 16)}</> : ''}
//                     </small>
//                   </div>
//                 </>
//               );
              
//             }) : ''
//           }

//         </div>




//       </div>


//       <div className="row innerchatsearch ">
//         <div className='col-10' >
//           <input
//             type="text"
//             placeholder="write Something"
//             className=""
//             name="content"
//             value={message.content}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className='col-2 chat_send_button' >
//           <button onClick={handleSubmit}><IoSend /></button>

//         </div>
//       </div>



//     </div>

//   )
// }

// export default Userinnerchat





















import React, { useEffect, useState, useRef } from 'react';
import "./Userinnerchat.css"
import innerchatimg from "../../../../Assets/test.jpg"
import axiosInstance from "../../../../apis/axiosInstance";
import { IoSend } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";

function Userinnerchat({ selectedRecipient }) {

  const id = localStorage.getItem("userdetails");

  const [data, setData] = useState(false)

  const [ids, setIds] = useState({
    rpid: '',
    parentid: id
  });

  useEffect(() => {
    if (selectedRecipient != null)
      setIds({ ...ids, rpid: selectedRecipient._id })
  }, [selectedRecipient])

  console.log('ids', ids);

  const [message, setMessage] = useState({
    rpid: '',
    parentid: id,
    content: '',
    sender: "parent"
  })

  useEffect(() => {
    if (selectedRecipient != null)
      setMessage({ ...message, rpid: selectedRecipient._id })
  }, [selectedRecipient])

  const [profile, setProfile] = useState({});
  const [chats, setChats] = useState([]);
  console.log(chats);

  useEffect(() => {
    console.log("ids", ids);
    axiosInstance.post(`/viewChatBerweenParentAndRp`, ids)
      .then((res) => {
        if (res.data.status == 200) {
          setChats(res.data.data);
        } else {
          setChats([])
        }
        console.log(res, "data");

      })
      .catch((err) => {
        console.log(err, "error");
      });
    console.log(id);
  }, [ids, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
    console.log(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('mesg', message)

    axiosInstance
      .post("/chattingParentRp", message)
      .then((res) => {
        console.log("Response:", res);
        setData(prev => !prev);
        setMessage({ ...message, content: '' }); // Clear the content field
        // scrollToBottom(); // Scroll to the bottom after sending message
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        // setTimeout(() => {
        //   navigate("/admin");
        // }, 1500);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  const scrollRef = useRef(null);

 


  console.log("data", selectedRecipient);
  return (
    <div className='innerchat'>

      <div className='innerchathead'>
        <div className='innersubhead'>
          <div className='innerchatprofile'>
            <img src={innerchatimg} alt='' />
          </div>
          <h1>Adrian Gomez</h1>
        </div>
      </div>

      <div className='user_chat ' ref={scrollRef}>
        <div className='row chat_view' >
          {
            chats.length ? chats.map((e) => {
              return (
                <>
                  <div className='innerchatmsg col-6'>
                    <p>{e.sender === 'rp' ? e.content : ''}</p>
                    <small>
                      {e.sender === 'rp' ? <><CiTimer /> {e.createdAt.slice(11, 16)}</> : ''}
                    </small>
                  </div>
                  <div className='inneruserchatmsg col-6'>
                    <p className='parent_chat_box'>{e.sender === 'parent' ? e.content : ''}</p>
                    <small className={e.sender === 'parent' ? 'time-right' : ''}>
                      {e.sender === 'parent' ? <><CiTimer /> {e.createdAt.slice(11, 16)}</> : ''}
                    </small>
                  </div>
                </>
              );
            }) : ''
          }
       
        </div>
      </div>

      <div className="row innerchatsearch ">
        <div className='col-10' >
          <input
            type="text"
            placeholder="write Something"
            className=""
            name="content"
            value={message.content}
            onChange={handleInputChange}
          />
        </div>
        <div className='col-2 chat_send_button' >
          <button onClick={handleSubmit}><IoSend /></button>
        </div>
      </div>
    </div>
  )
}

export default Userinnerchat;

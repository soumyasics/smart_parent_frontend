import React, { useEffect, useState, useRef } from "react";
import innerchatimg from "../../../../Assets/test.jpg";
import axiosInstance from "../../../../apis/axiosInstance";
import { IoSend } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import chatIllus from "../../../../Assets/illustrators/chat-2.jpg";
import manPlaceholder from "../../../../Assets/illustrators/man-placeholder.jpg";
import "./Userinnerchat.css";
import BASE_URL from "../../../../apis/baseUrl";
function Userinnerchat({ activeRpId }) {
  const [activeParent, setActiveParent] = useState(null);
  const [activeRpData, setActiveRpData] = useState(null);
  const [rpProfilePicture, setRpProfilePicture] = useState(manPlaceholder);
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    rpid: "",
    parentid: "",
    content: "",
    sender: "parent",
  });

  const [rpAndParentIds, setRpAndParentIds] = useState({
    parentid: null,
    rpid: null,
  });

  // get parent data from LS
  useEffect(() => {
    let parentData = JSON.parse(localStorage.getItem("parentData")) || null;
    if (parentData) {
      setActiveParent(parentData);
    } else {
      console.log("Parent not logged in.");
      setActiveParent(null);
      navigate("/sign_in");
    }
  }, []);

  // update parent id
  useEffect(() => {
    let parentId = activeParent?._id || null;

    if (parentId) {
      setMessage({ ...message, parentid: parentId });
      setRpAndParentIds({ ...rpAndParentIds, parentid: parentId });
    }
  }, [activeParent]);

  // update rp id & get rp data
  useEffect(() => {
    if (activeRpId) {
      setMessage({ ...message, rpid: activeRpId });
      setRpAndParentIds({ ...rpAndParentIds, rpid: activeRpId });
      getRpData();
    }
  }, [activeRpId]);

  // get all chats
  useEffect(() => {
    if (rpAndParentIds.parentid && rpAndParentIds.rpid) {
      getChatHistory();
    }
  }, [rpAndParentIds]);

  async function getChatHistory() {
    try {
      let res = await axiosInstance.post(
        "get-chat-between-parent-and-rp",
        rpAndParentIds
      );
      let data = res?.data?.data || null;
      if (data) {
        console.log("hist data", data);
        setChatHistory(data);
      } else {
        console.log("Data not found on get chat history");
        setChatHistory([]);
      }
    } catch (error) {
      console.log("Error on getting chats", error);
    }
  }
  async function getRpData() {
    try {
      let res = await axiosInstance.get("view-rp-by-id/" + activeRpId);
      let data = res?.data?.data || null;
      if (data) {
        setActiveRpData(data);
        let filename = data?.profilePicture?.filename || null;
        if (filename) {
          let url = `${BASE_URL}${filename}`;
          setRpProfilePicture(url);
        }
      } else {
        console.log("Data not found on get rp data");
      }
    } catch (error) {
      console.log("error on getting rp data", error);
    }
  }

  function handleSubmit() {
    if (message.content) {
      sendMessage();
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (message.content) {
        sendMessage();
      }
    }
  }
  async function sendMessage() {
    try {
      let res = await axiosInstance.post("chattingParentRp", message);
      if (res.status === 200) {
        getChatHistory();
        setMessage({ ...message, content: "" });
      }
    } catch (error) {
      console.log("error on sending message", error);
    }
  }
  if (!activeRpId) {
    return (
      <div className="w-100 mx-auto mt-5 d-flex flex-column justify-content-center">
        <h2 className="text-center"> Chat With Subscribed Resouce Persons</h2>
        <img className="w-50 mx-auto mt-5" src={chatIllus} alt="chat" />
      </div>
    );
  }

  return (
    <div className="innerchat">
      <div className="innerchathead ">
        <div className="innersubhead  ps-3">
          <div className="innerchatprofile">
            <img src={rpProfilePicture} alt="Resource_person" />
          </div>
          <h1>{activeRpData?.name || ""}</h1>
        </div>
      </div>

      <div className="user_chat rounded" style={{ height: "550px" }}>
        {chatHistory?.map((chat) => {
          return (
            <div
              className={
                chat.sender === "parent"
                  ? "parent-chat-section"
                  : "rp-chat-section"
              }
              key={chat?._id}
            >
              <p className="m-0" style={{ height: "auto" }}>
                {chat.content}
              </p>
            </div>
          );
        })}
      </div>

      <div className="row innerchatsearch">
        <div className="col-11">
          <input
            type="text"
            placeholder="Ask Something.."
            className=""
            name="content"
            value={message.content}
            onChange={(e) => {
              setMessage({ ...message, content: e.target.value });
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="col-1 chat_send_button">
          <button onClick={handleSubmit}>
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Userinnerchat;

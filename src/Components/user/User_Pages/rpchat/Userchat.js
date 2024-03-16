import React, { useEffect, useState } from "react";
import "./Userchat.css";
// import chatimg from "../../../../Assets/test.jpg";
import axiosInstance from "../../../../apis/axiosInstance";
import chatimg from "../../../../Assets/illustrators/man-placeholder.jpg";
import BASE_URL from "../../../../apis/baseUrl";
import Userinnerchat from "./Userinnerchat";
import { Link } from "react-router-dom";

function Userchat({ onSelectRecipient, subscribers }) {
  return (
    <div className="row mt-2">
      <div className="chatsearch ">
        <input
          style={{ width: "95%" }}
          type="text"
          placeholder="Search Parents"
          className="search_icon_input ms-3"
        />
      </div>
      <div
        className="chatfriends p-4 overflow-auto"
        style={{ height: "600px" }}
      >
        <div className="friendsimg">
          {subscribers?.map((parent, index) => {
            let name = parent?.parentId?.name || "";
            let mail = parent?.parentId?.email || "";
            let parentId = parent?.parentId?._id || null;
            let rpProfilePicture = chatimg;
            
            return (
              <div
                className="chat-persons list_view mb-3"
                
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  onSelectRecipient(parentId);
                }}
                key={index}
              >
                <img src={rpProfilePicture} alt="subscriber" />
                <div>
                  <p className="list_view_title m-0">{name} </p>
                  <p className="m-0">
                    <small>{mail}</small>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-8">{/* <Userinnerchat /> */}</div>
    </div>
  );
}

export default Userchat;

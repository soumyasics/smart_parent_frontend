import { useState, useEffect } from "react";
import chatimg from "../../../../Assets/illustrators/man-placeholder.jpg";
import BASE_URL from "../../../../apis/baseUrl";
import "./Userchat.css";

function Userchat({ onSelectRecipient, subscribers }) {
  const [allSubscribers, setAllSubscribers] = useState([]);
  const [varyingSubs, setVaryingSubs] = useState([]);
  useEffect(() => {
    setAllSubscribers(subscribers);
    setVaryingSubs(subscribers);
  }, [subscribers]);

  const [search, setSearch] = useState("");

  const handleChanges = (event) => {
    
    setSearch(event.target.value);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!search) {
        setVaryingSubs(allSubscribers);
        return;
      }
      const filteredSubscribers = allSubscribers.filter((sub) => {
        return sub.resourcePersonId?.name
          ?.toLowerCase()
          .includes(search.toLowerCase());
      });
      setVaryingSubs(filteredSubscribers);
      return;
    }
  };
  return (
    <div className="row mt-2">
      <div className="chatsearch ">
        <input
          style={{ width: "95%" }}
          type="text"
          placeholder="Search Resource Persons"
          className="search_icon_input ms-3"
          value={search}
          onChange={handleChanges}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div
        className="chatfriends p-4 overflow-auto"
        style={{ height: "600px" }}
      >
        <div className="friendsimg">
          {varyingSubs?.map((rp, index) => {
            let name = rp?.resourcePersonId?.name || "";
            let rpId = rp?.resourcePersonId?._id || null;
            let pathname =
              rp?.resourcePersonId.profilePicture?.filename || null;
            let mail = rp?.resourcePersonId?.email || "";
            let rpProfilePicture = chatimg;
            if (pathname) {
              rpProfilePicture = BASE_URL + pathname;
            }
            return (
              <div
                className="chat-persons list_view mb-3"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  onSelectRecipient(rpId);
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

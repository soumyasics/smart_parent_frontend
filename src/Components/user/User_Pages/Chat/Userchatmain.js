import React, { useState } from "react";
import Userinnerchat from "./Userinnerchat";
import Userchat from "./Userchat";

function Userchatmain() {
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  // Function to handle recipient selection
  const handleRecipientSelection = (rr) => {
    console.log("Selected recipient:", rr);
    setSelectedRecipient(rr); // Set the selected recipient
  };
  const add = () => {
    console.log("add");
  };

  return (
    <div className="row">
      <div className="col-4 bg-primary">
        <Userchat onSelectRecipient={handleRecipientSelection} />
      </div>
      <div className="col-8">
        <Userinnerchat selectedRecipient={selectedRecipient} />
      </div>
    </div>
  );
}

export default Userchatmain;

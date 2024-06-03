import React from "react";

const User = ({userId}) => {
    let userName;
    switch (userId){
        case 1: userName = "Dolphin";
        break;
        case 2: userName = "NoobMaster";
        break;
        case 3: userName = "Thorfin";
        break;
        case 4: userName = "Saitama";
        break;
        case 5: userName = "Gintoki";
        break;
        default: userName = "Unknown"
    }
  return (
    <>
      <p> Posted by <span className="username">{userName}</span></p>
    </>
  );
};

export default User;

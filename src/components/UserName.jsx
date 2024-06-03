import React from "react";

const UserName = (props) => {
  let userName;
  switch (props.id) {
    case 1:
      userName = props.name;
      break;
    case 2:
      userName = props.name;
      break;
    case 3:
      userName = props.name;
      break;
    case 4:
      userName = props.name;
      break;
    case 5:
      userName = props.name;
      break;
    case 6:
      userName = props.name;
      break;
    case 7:
      userName = props.name;
      break;
    case 8:
      userName = props.name;
      break;
    case 9:
      userName = props.name;
      break;
    case 10:
      userName = props.name;
      break;
      default:
      userName = "Unknown";
  }
  return <p>Detail information of - {userName} </p>;
};

export default UserName;

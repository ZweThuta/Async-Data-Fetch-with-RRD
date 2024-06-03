import React from "react";
import { useNavigate, useLoaderData,json } from "react-router-dom";
import UserName from "../components/UserName";

const UserDetail = () => {
  const post = useLoaderData();
  
  const { username, email, address, id, name } = post;
  const { street, city } = address;

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/user");
  };
  return (
    <>
      <div className="pro-bg">
        <h1>Username - {username}</h1>
        <p>Email - {email}</p>
        <p>Street - {street}</p>
        <p>City - {city}</p>
         <UserName id={id} name={name}/>
        <button onClick={navigateHandler}>Go Back to Users</button>
      </div>
    </>
  );
};
export default UserDetail;
export const loader = async ({ request, params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userID}`
  );
  if (!response.ok) {
    throw json({ message: "Can't find user." }, { status: 404 });
  } else {
    const post = await response.json();
    return post;
  }
};

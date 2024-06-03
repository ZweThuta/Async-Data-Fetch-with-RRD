import { Link, json, useLoaderData } from "react-router-dom"
import UserName from "../components/UserName";

const UserTen = () => {
  const USERS = useLoaderData();
  return (
    <>
    {
      USERS.map((user)=>(
        <Link to={`/user/${user.id}`} key={user.id}>
          <div className="pro-card">
           <h1>{user.name}</h1>
           <UserName id = {user.id} name= {user.name}/>
          </div>
        </Link>
      ))
    }
    </>
  )
}

export default UserTen

export const loader = async() =>{
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  if(!response.ok){
    throw json({message: "Users have not found!"}, {status: 500}
    )
  }
  else{
    const user = await response.json();
    return user;
  }
}
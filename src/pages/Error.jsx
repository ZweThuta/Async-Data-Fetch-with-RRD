import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let title = "Unknown Error.";
  if (error.status === 500) {
    title = error.data.message;
  }
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <>
      <div className="pro-bg">
        <h1>{title}</h1>
        <button onClick={navigateHandler}>Go to Home</button>
      </div>
    </>
  );
};

export default Error;

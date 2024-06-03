import { json, useLoaderData, useNavigate } from "react-router-dom";
import User from "../components/User";

const ProductsDetail = () => {
  const post = useLoaderData();
  const { title, body, userId } = post;
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <>
      <div className="pro-bg">
        <h1>{title}</h1>

        <User userId={userId} />
        <p>{body}</p>
        <button onClick={navigateHandler}>Go to Post</button>
      </div>
    </>
  );
};

export default ProductsDetail;
export const loader = async ({ request, params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );

  if (!response.ok) {
    throw json({ message: " Can't find post." }, { status: 404 });
  } else {
    const post = await response.json();
    return post;
  }
};

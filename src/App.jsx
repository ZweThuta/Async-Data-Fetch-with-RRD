import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as productsLoader } from "./pages/Products";
import { loader as productDetailLoader } from "./pages/ProductsDetail";
import { loader as userLoader } from "./pages/UserTen";
import { loader as userDetailLoader } from "./pages/UserDetail";
import Main from "./layouts/Main";
import {
  ProductsDetail,
  Products,
  Home,
  About,
  Error,
  UserTen,
  UserDetail,
} from "./pages/indexpages";
const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products />, loader: productsLoader },
      {
        path: "/products/:postID",
        element: <ProductsDetail />,
        loader: productDetailLoader,
      },
      { path: "/user", element: <UserTen />, loader: userLoader },
      {
        path: "/user/:userID",
        element: <UserDetail />,
        loader: userDetailLoader,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

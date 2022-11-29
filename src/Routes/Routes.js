import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import BuyerSignUp from "../Pages/SignUp/BuyerSignUp BuyerSignUp/BuyerSignUp";
import SellerSignUp from "../Pages/SignUp/SellerSignUp/SellerSignUp";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
    children: [
      {
        path: "/signUp/buyer",
        element: <BuyerSignUp></BuyerSignUp>,
      },
      {
        path: "/signUp/seller",
        element: <SellerSignUp></SellerSignUp>,
      },
    ],
  },
]);

export default router;

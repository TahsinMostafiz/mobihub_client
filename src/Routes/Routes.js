import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageProducts from "../Pages/Dashboard/MangeProducts/ManageProducts";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Products/Category/Category";
import BuyerSignUp from "../Pages/SignUp/BuyerSignUp BuyerSignUp/BuyerSignUp";
import SellerSignUp from "../Pages/SignUp/SellerSignUp/SellerSignUp";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

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
      {
        path: "/logIn",
        element: <Login></Login>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivetRoute>
            <Category></Category>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
    children: [
      {
        path: "/signUp",
        element: <BuyerSignUp></BuyerSignUp>,
      },
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
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/manageProducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;

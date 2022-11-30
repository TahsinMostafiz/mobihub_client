import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import NavBar from "../../Shared/NavBar/NavBar";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-slate-100 p-5">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-secondary">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content ">
            {isAdmin && (
              <>
                <li>
                  <Link
                    className="text-white font-semibold"
                    to="/dashboard/myOrders"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/addProduct"
                    className="text-white font-semibold"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageProducts"
                    className="text-white font-semibold"
                  >
                    Mange products
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white font-semibold"
                    to="/dashboard/allUsers"
                  >
                    All Users
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

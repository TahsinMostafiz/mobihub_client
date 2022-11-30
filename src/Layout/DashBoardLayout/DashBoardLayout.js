import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";

const DashBoardLayout = () => {
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
                  className="text-white font-semibold"
                  to="/dashboard/allUsers"
                >
                  All Users
                </Link>
              </li>
              <li>
                <Link className="text-white font-semibold">Add Product</Link>
              </li>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

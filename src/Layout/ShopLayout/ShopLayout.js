import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import { Outlet, Link } from "react-router-dom";

const ShopLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile ">
        <input id="shop-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-100 p-5">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-accent ">
          <label htmlFor="shop-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 text-base-content ">
            <li>
              <h2 className="text-white text-2xl font-bold">Categories</h2>
            </li>
            <>
              <li>
                <Link className="text-white font-semibold" to="/shop/apple">
                  Apple
                </Link>
              </li>
              <li>
                <Link className="text-white font-semibold" to="/shop/samsung">
                  Samsung
                </Link>
              </li>
              <li>
                <Link className="text-white font-semibold" to="/shop/onePlus">
                  OnePlus
                </Link>
              </li>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;

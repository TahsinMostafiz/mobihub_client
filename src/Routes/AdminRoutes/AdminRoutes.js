import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || adminLoading) {
    return <Loading></Loading>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;

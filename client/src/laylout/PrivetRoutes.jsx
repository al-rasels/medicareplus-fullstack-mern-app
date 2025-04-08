import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUserAccessStore from "../store/userAccessStore";

function PrivetRoutes() {
  const { IsLogin } = useUserAccessStore();
  return IsLogin() ? <Outlet /> : <Navigate to="/acess" />;
}

export default PrivetRoutes;

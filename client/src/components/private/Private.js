import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const isAuth = useSelector(async (state) => await state.user.isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default Private;

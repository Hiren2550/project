import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);
  if (!currentUser) {
    return <Navigate to={"/sign-in"} replace={true}></Navigate>;
  }

  return children;
};

export default PrivateRoute;

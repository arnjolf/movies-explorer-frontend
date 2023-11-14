import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ element: Component, ...props }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.loggedIn) {
      console.log(props.loggedIn);
      navigate("/", { replace: true });
    }
  }, [props.loggedIn, navigate]);

  return props.loggedIn ? <Component {...props} /> : null;
};

export default ProtectedRoute;

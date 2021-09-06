import React from "react";
import "./Logout.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        <span className="user__name"> welcome Exhibyte Solution</span>
        <button className="logout__button" onClick={handleLogout}>
          Logout
        </button>
      </h1>
    </div>
  );
};

export default Logout;

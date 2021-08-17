import React from "react";
import "./Logout.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDeafult();
    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        welcome
        <span className="user__name">Exhibyte Solution</span>
        <button className="logout__button" onClick={(e) => handleLogout(e)}>
          Logout
        </button>
      </h1>
    </div>
  );
};

export default Logout;

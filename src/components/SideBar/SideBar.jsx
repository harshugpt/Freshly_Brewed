import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../SideBar/SideBar.css";

const SideBar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2 className="sidebar-heading">Your Application Name</h2>
      <ul className="navigation">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={location.pathname === "/schedule" ? "active" : ""}>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li className={location.pathname === "/preparation" ? "active" : ""}>
          <Link to="/preparation">Preparation</Link>
        </li>
        <li className={location.pathname === "/playback" ? "active" : ""}>
          <Link to="/playback">Playback</Link>
        </li>
        <li className={location.pathname === "/account" ? "active" : ""}>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

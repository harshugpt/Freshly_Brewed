import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">{/* Sidebar component */}</div>
      <div className="main-content">
        <div className="header">{/* Header content goes here */}</div>
        <div className="content">
          <h1>Dashboard</h1>
          <p>Content</p>
          <img src="path/to/image.gif" alt="GIF" />
          <button>Schedule mock interview</button>
          <i className="video-icon"></i>
          <p>Additional content</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

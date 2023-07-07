import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Schedule from "./pages/Schedule";
import Preparation from "./pages/Preparation";
import Playback from "./pages/Playback";
import Account from "./pages/Account";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <div className="main-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/preparation" component={Preparation} />
          <Route path="/playback" component={Playback} />
          <Route path="/account" component={Account} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

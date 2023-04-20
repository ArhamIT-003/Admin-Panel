import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-items">
          <span className="logo">Arhamdev</span>
        </div>
        <div className="navbar-items">
          <div className="navbar-icons">
            <SettingsIcon style={{ color: "#0052CC" }} />
          </div>
          <div className="navbar-icons">
            <NotificationsIcon style={{ color: "#0052CC" }} />
            <span className="navbar-badge">3</span>
          </div>
          <div className="navbar-icons">
            <LanguageIcon style={{ color: "#0052CC" }} />
            <span className="navbar-badge">3</span>
          </div>
          <img
            className="navbar-profile-img"
            alt=""
            src="https://b.fssta.com/uploads/application/soccer/headshots/885.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

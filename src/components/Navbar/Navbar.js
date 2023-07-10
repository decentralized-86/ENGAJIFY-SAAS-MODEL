import React from "react";
import "./Navbar.css"
export default function Navbar(){
    return (
        <nav className="navbar">
        <div className="navbar__logo">
          <img src="/path/to/logo.png"  />
        </div>
        <div className="navbar__text">
          <span>Dashboard</span>
        </div>
        <div className="navbar__search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar__actions">
          <button className="navbar__notifications">
            <img src="/path/to/notifications.png" alt="Notifications" />
          </button>
          <button className="navbar__dropdown">
            <img src="/path/to/dropdown.png" alt="Dropdown" />
          </button>
        </div>
      </nav>
    )
}
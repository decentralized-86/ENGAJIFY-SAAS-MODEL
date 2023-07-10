import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__item">
          <NavLink exact={true.toString()} to="/" className="sidebar__link" activeclassname="active">
            <span className="sidebar__text">Dashboard</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/Campaign" className="sidebar__link" activeclassname="active">
            <span className="sidebar__text">Campaign</span>
          </NavLink>
        </li>
      </ul>
      <a href="/CampaignPreviewpage" className="sidebar__anchor">
        <FontAwesomeIcon icon={faGlobe} className="sidebar__icon" />
        <span className="sidebar__text">Preview Campaign</span>
      </a>
    </div>
  );
}

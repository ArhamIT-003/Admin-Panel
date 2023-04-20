import React from "react";
import "./sidebar-menu.css";
import { Link } from "react-router-dom";
const SidebarMenu = ({
  title,
  L1,
  L2,
  L3,
  L4,
  link1,
  link2,
  link3,
  link4,
  Icon1,
  Icon2,
  Icon3,
  active,
}) => {
  return (
    <div className="sidebar-menu">
      <h3 className="sidebar-title">{title}</h3>
      <ul className="sidebar-list">
        <li className={`sidebar-list-items ${active}`}>
          <Icon1 className="sidebar-icons" />{" "}
          <Link to={link1} className="links">
            {L1}
          </Link>
        </li>
        <li className="sidebar-list-items">
          <Icon2 className="sidebar-icons" />
          <Link to={link2} className="links">
            {L2}
          </Link>
        </li>
        <li className="sidebar-list-items">
          <Icon3 className="sidebar-icons" />
          <Link to={link3} className="links">
            {L3}
          </Link>
        </li>
        {L4 && (
          <li className="sidebar-list-items">
            <Icon1 className="sidebar-icons" />
            <Link to={link4} className="links">
              {L4}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SidebarMenu;

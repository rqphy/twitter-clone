import React from "react";
import "../styles/SidebarOption.css";

function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebar__option">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;

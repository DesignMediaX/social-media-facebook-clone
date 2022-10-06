import React from "react";
import "./menuLink.scss";

const MenuLink = ({ Icon, text }) => {
  return (
    <div className="menuLink">
      {Icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">{text === "Logout" && "(Amber)"}</span>
    </div>
  );
};

export default MenuLink;

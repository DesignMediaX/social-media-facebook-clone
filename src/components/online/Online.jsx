import React from "react";
import "./online.scss";

const Online = ({ onlineuser }) => {
  return (
    <div className="online">
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={onlineuser.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{onlineuser.username}</span>
      </li>
    </div>
  );
};

export default Online;

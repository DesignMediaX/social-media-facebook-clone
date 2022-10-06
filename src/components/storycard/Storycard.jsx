import React from "react";
import "./storycard.scss";

const Storycard = ({ user }) => {
  return (
    <div className="storyCard">
      <div className="overlay"></div>
      <img src={user.profilePicture} alt="" className="storyProfile" />
      <img src={user.profilePicture} alt="" className="storybackground" />
      <span className="text">{user.username}</span>
    </div>
  );
};

export default Storycard;

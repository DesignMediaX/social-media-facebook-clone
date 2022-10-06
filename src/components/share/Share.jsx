import {
  Close,
  EmojiEmotions,
  PermMedia,
  VideoCameraFront,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./share.scss";

const Share = () => {
  const [file, setFile] = useState(null);

  const removeImage = () => {
    setFile(null);
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/user.jpg"
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder="What's on your mind Amber ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <Close className="shareCancelImg" onClick={removeImage} />
          </div>
        )}
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoCameraFront
                className="shareIcon"
                style={{ color: "#bb0000f2" }}
              />
              <span className="shareOptionText">Live Video</span>
            </div>
            <label htmlFor="file" className="shareOption">
              <PermMedia className="shareIcon" style={{ color: "#2e0196f1" }} />
              <span className="shareOptionText">Photo/Video</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <EmojiEmotions
                className="shareIcon"
                style={{ color: "#bfc600ec" }}
              />
              <span className="shareOptionText">Feelings/Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

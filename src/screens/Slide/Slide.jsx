import React from "react";
import "./style.css";

export const Slide = () => {
  return (
    <div className="slide">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
              <div className="ellipse-2" />
            </div>
          </div>
          <div className="frame">
            <p className="text-wrapper">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <h1 className="h-1">aaal.net.tr</h1>
          </div>
          <img
            className="img"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/9933b99aec303f06feeefeefe189ffef/img/group-2.png"
          />
        </div>
      </div>
    </div>
  );
};

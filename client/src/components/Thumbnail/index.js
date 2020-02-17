import React from "react";
import "./style.css";

function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Book Image"
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
}

export default Thumbnail;

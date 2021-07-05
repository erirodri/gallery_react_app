import React from "react";

const Loading = () => {
  return (
    <div
      className="spinner-grow text-info text-center"
      role="status"
      style={{ width: "10rem", height: "10rem" }}
    >
      <span className="sr-only"></span>
    </div>
  );
};

export default Loading;

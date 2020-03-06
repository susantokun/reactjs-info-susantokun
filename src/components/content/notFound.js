import React from "react";
import "./style.css";

export const NotFoundContent = ({ className = "" }) => {
  return (
    <div className={className}>
      <span role="img" aria-label="cryingFace">
        &#128546;
      </span>{" "}
      Sorry, data not found{" "}
      <span role="img" aria-label="cryingFace">
        &#128546;
      </span>
    </div>
  );
};

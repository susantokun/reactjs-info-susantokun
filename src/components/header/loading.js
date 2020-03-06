import React from "react";
import { Eclipse } from "react-loading-io";

export const LoadingHeader = ({ srcLoadingHeader = "" }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {/* <Image src={srcLoadingHeader} size="small" centered circular /> */}
      <Eclipse size={150} color="#da262c" />
    </div>
  );
};

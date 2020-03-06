import React from "react";
import { Image } from "semantic-ui-react";

export const ImageHeader = ({ profile = [], srcProfileHeader = "" }) => {
  return (
    <div className="circular--portrait">
      {profile.map((item, i) => (
        <Image
          key={i}
          src={srcProfileHeader + item.avatar}
        />
      ))}
    </div>
  );
};

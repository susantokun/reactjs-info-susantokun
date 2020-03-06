import React from "react";
import { Image } from "semantic-ui-react";
import NotFoundImage from "../../assets/images/not-founds/no_image.png";

export const NotFoundHeaderImage = () => {
  return (
    <Image
      src={NotFoundImage}
      size="small"
      centered
      circular
      alt="loading..."
    />
  );
};

import React from "react";
import { Img } from "./CardImageStyle.js";

const CardImage = (props) => {
  return <Img src={props.filePath} alt={`${props.name} image`} />;
};

export default CardImage;

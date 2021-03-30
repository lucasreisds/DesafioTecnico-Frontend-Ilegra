import React from "react";
import { removeWhitespaces } from "../../utils/removeWhitespaces";
import { Img } from "./ItemImageStyle";

const ItemImage = (props) => {
  ///\.(jpg|png|svg)$/
  const filename = removeWhitespaces(props.name);
  const filePath = require(`../../assets/images/${props.category}/${filename}.${props.type}`);
  return <Img src={filePath.default} alt={`${props.name} image`} />;
};

export default ItemImage;

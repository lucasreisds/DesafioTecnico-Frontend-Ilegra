import React from "react";
import { Item, ItemImg, ItemInfo } from "./ItemContantStyle";
import ItemImage from "../ItemImage/ItemImage";
const ItemContent = (props) => {
  return (
    <Item>
      <ItemImg>
        <ItemImage
          name={props.name}
          category={props.category}
          type={props.type}
        />
      </ItemImg>
      <ItemInfo>{props.children}</ItemInfo>
    </Item>
  );
};

export default ItemContent;

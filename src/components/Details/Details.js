import React from "react";
import ItemImage from "../ItemImage/ItemImage";
import { Container, Image, Info, Openning } from "./DetailsStyle";
const Details = (props) => {
  return (
    <Container>
      <Image>
        <ItemImage
          name={props.name}
          category={props.category}
          type={props.type}
        />
      </Image>
      <Info>
        {props.children}
        {props.intro !== undefined ? (
          <Openning>
            <p>{props.intro}</p>
          </Openning>
        ) : null}
      </Info>
    </Container>
  );
};

export default Details;

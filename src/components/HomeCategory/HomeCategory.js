import React from "react";
import {
  Container,
  Img,
  Title,
  ContainerImg,
  containerAnimation,
} from "./HomeCategoryStyle";

const HomeCategory = (props) => {
  return (
    <Container variants={containerAnimation}>
      <ContainerImg>
        <Img src={props.image} />
        <Title>{props.title}</Title>
      </ContainerImg>
    </Container>
  );
};

export default HomeCategory;

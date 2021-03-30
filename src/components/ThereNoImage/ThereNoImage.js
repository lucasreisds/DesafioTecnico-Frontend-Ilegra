import React from "react";
import { Container, Image, Title } from "./ThereNoImageStyle";
import thereIsNoImage from "../../assets/images/thereIsNoImage.jpg";
const ThereIsNoImage = () => {
  return (
    <Container>
      <Image src={thereIsNoImage} />
      <Title>There is no image</Title>
    </Container>
  );
};

export default ThereIsNoImage;

import React from "react";
import { Container } from "./ContentStyle";
const Content = (props) => {
  return <Container>{props.children}</Container>;
};

export default Content;

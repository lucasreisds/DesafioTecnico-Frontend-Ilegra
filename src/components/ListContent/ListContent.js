import React from "react";
import styled from "styled-components";

const ListContent = (props) => {
  return <Content>{props.children}</Content>;
};

export default ListContent;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
  max-width: 1567px;
`;

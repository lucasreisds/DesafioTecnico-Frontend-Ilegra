import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 0px;
  left: 13%;
  width: 7%;
  font-size: 16px;
  box-shadow: 0.2rem 0.8rem 1.6rem #1a1a1ad4;
  padding: 10px;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #1b2c40;
  border-style: none;
  color: #fff;
  font-family: monospace;
  min-width: 90px;
  &:hover {
    background-color: #484848;
  }
  @media (max-width: 1060px) {
    top: 0%;
    left: 9%;
  }
  @media (max-width: 830px) {
    position: relative;
    left: 2px;
  }
`;

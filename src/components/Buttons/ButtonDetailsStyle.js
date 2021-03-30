import styled from "styled-components";

export const Button = styled.button`
  background-color: #1b2c40;
  border-style: none;
  height: 26px;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  a {
    list-style: none;
    text-decoration: none;
    color: #fff;
    width: 100%;
    font-family: monospace;
  }
  &:hover {
    background-color: var(--hover-blue);
  }
`;

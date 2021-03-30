import styled from "styled-components";

export const Container = styled.div`
  font-family: monospace;
  font-size: 17px;
  .paginationButtons {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    @media (max-width: 600px) {
      display: flex;
      flex-wrap: wrap;
      height: 140px;
    }
  }
  .paginationButtons a {
    padding: 10px;
    margin: 8px;
    border-radius: 8px;
    background-color: #1b2c40;
    color: #dadada;
    cursor: pointer;
    &:hover {
      color: #eef310;
    }
  }
  .paginationActive a {
    background-color: var(--hover-blue);
    outline: none;
  }
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

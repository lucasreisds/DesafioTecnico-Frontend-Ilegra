import styled from "styled-components";

export const Container = styled.section`
  max-width: 1175px;
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 30px 30px 50px 30px;
  padding: 30px;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Image = styled.div`
  display: flex;
  width: 40%;
  min-width: 333px;
  @media (max-width: 850px) {
    width: auto;
    min-height: 444px;
    max-width: 429px;
    max-height: 480px;
  }
  @media (max-width: 330px) {
    min-width: 300px;
  }
`;
export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
  background-color: #1a1a1acf;
  color: #fff;
  width: 90%;
  padding: 25px;
  @media (max-width: 850px) {
    width: auto;
    min-width: 284px;
    max-width: 379px;
  }
  @media (max-width: 330px) {
    min-width: 250px;
  }
`;
export const Openning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background-color: black;
  color: yellow;
  p {
    padding: 5px;
    font-family: monospace;
  }
`;

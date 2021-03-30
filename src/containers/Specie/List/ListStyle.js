import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 25%;
  max-width: 255px;
  min-width: 255px;
  min-height: 438px;
`;
export const ItemImg = styled.section`
  display: flex;
  max-width: 300px;
  height: 320px;
  box-shadow: 0.2rem 0.8rem 1.6rem #148baf2b;
`;
export const ItemInfo = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 300px;
  min-height: 60px;
  border-radius: 0 0 8px 8px;
  background-color: #1a1a1acf;
  color: #ffff;
`;

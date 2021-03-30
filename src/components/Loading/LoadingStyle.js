import styled from "styled-components";
export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 6%;
`;
export const ImgLoading = styled.img`
  width: 50%;
  border-radius: 8px;
  box-shadow: 0.2rem 0.8rem 1.6rem #081f29;
`;
export const TextLoading = styled.h2`
  position: absolute;
  top: 75%;
  color: #fff;
  @media (max-width: 680px) {
    top: 67%;
  }
`;

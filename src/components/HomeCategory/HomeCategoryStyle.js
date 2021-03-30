import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 30px 10px 10px 10px;
  min-width: 252px;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 96%;
  }
`;
export const Title = styled.h3`
  display: flex;
  justify-content: center;
  position: absolute;
  font-family: Dosis;
  font-size: 18px;
  letter-spacing: 3px;
  color: #fff;
  top: 76%;
  width: 100%;
  background-color: #00000085;
  @media (max-width: 500px) {
    width: 96%;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  box-shadow: 0.2rem 0.8rem 1.6rem #ffffff0a;
  @media (max-width: 500px) {
    width: 96%;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const containerAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

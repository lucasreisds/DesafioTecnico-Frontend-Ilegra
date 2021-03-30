import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  // min-height: 90vh;
  a {
    display: flex;
  }
`;

export const Cards = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: row wrap;
  max-width: 1567px;
`;
export const Logo = styled.img`
  width: 21%;
  min-width: 220px;
`;

export const cardAnimation = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

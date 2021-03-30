import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  display: flex;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: no-wrap;
  border: solid 1px;
  background-color: #322d344a;
  color: #fff;
  border: none;
  img {
    width: 50%;
  }
`;
export const NavLinks = styled.ul`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  li {
    margin-bottom: 0;
    letter-spacing: 0;
  }
`;
export const Item = styled(motion.li)`
  list-style: none;
  color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  font-family: Dosis;
  font-size: 18px;
  letter-spacing: 2px;
  a {
    list-style: none;
    width: 100%;
    color: #fff;
    text-decoration: none;
  }
`;

export const VerticalMenu = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  left: 1px;
  height: auto;
  width: 217px;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364);
  background: linear-gradient(to right, #0f2027, #203a43, #162f41);
  border: 1px solid #ffffff00;
  z-index: 2;
  border-radius: 0px 8px 8px 0px;
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 84px;
    list-style: none;
  }
`;
export const MenuButton = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  position: absolute;
  top: 20px;
  left: 5px;
  border-color: yellow;
  background-color: black;
  color: white;
  font-family: monospace;
  border-style: solid;
  cursor: pointer;
  z-index: 2;
`;

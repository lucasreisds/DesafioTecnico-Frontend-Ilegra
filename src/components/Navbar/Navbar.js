import React, { useEffect, useState } from "react";

import {
  Nav,
  NavLinks,
  VerticalMenu,
  MenuButton,
  Container,
  Item,
} from "./NavbarStyle";
import handleWindowWidth from "../../utils/handleWindowWidth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    handleWindowWidth(setIsNavOpen);
    window.addEventListener("resize", () => handleWindowWidth(setIsNavOpen));
  }, [setIsNavOpen]);
  return (
    <Container>
      {isNavOpen ? (
        <Nav>
          <h3>Star Wars Wiki</h3>
          <NavLinks>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/characters"> Characters </Link>
            </Item>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/films"> Films</Link>
            </Item>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/planets"> Planets</Link>
            </Item>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/species"> Species</Link>
            </Item>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/starships"> Starships</Link>
            </Item>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/vechiles"> Vehicles</Link>
            </Item>
          </NavLinks>
        </Nav>
      ) : isMenuOpen ? (
        <VerticalMenu>
          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>X</MenuButton>
          <ul>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/characters"> Characters </Link>
            </Item>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/films"> Films</Link>
            </Item>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/planets"> Planets</Link>
            </Item>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/species"> Species</Link>
            </Item>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/starships"> Starships</Link>
            </Item>
            <Item whileHover={{ scale: 1.2 }}>
              <Link to="/vechiles"> Vehicles</Link>
            </Item>
          </ul>
        </VerticalMenu>
      ) : (
        <MenuButton name="Open" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Open
        </MenuButton>
      )}
    </Container>
  );
};

export default Navbar;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 1.52m;
  text-align: center;
  color: rgb(245, 245, 245);
`;

const BarWrapper = styled.div`
  background: rgb(45, 45, 45);
`;
const Menu = styled.ul``;
const MenuItem = styled.li``;

const MenuBar = () => (
  <BarWrapper>
    <Title>andrewt.xyz</Title>
    <Menu>
      <MenuItem>
        <Link to="/">About</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/portfolio">Portfolio</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/contact">Contact</Link>
      </MenuItem>
    </Menu>
  </BarWrapper>
);

export default MenuBar;

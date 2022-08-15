import React from "react";
import Pages from "./pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

export default function App() {
  return (
    <Router>
      <Nav>
        <Logo to={"/"}>
          <GiKnifeFork />
          Deliciouss
        </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </Router>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  font-style: italic;
  color: #313131;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
    color: #313131;
  }
`;

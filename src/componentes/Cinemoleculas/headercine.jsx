import styled from "styled-components";
import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'; 
import logocineplanet from "../../assets/logocineplanet.svg"

export function Headercine() {
  return (
    <Container>
      <HeaderWrapper>
        <Logo>
          <img
            src= {logocineplanet}
            alt="Cineplanet Logo"
          />
        </Logo>

        <NavLinks>
          <ul>
            <li>
              <a href="/Películas">Películas</a>
            </li>
            <li>
              <a href="/Cines">Cines</a>
            </li>
            <li>
              <a href="/Promociones">Promociones</a>
            </li>
            <li>
              <a href="/Socio">Socio</a>
            </li>
            <li>
              <a href="/Dulcería">Dulcería</a>
            </li>
            <li>
              <a href="/Corporativo">Corporativo</a>
            </li>
            <li>
              <a href="/Blog">Blog</a>
            </li>
          </ul>
        </NavLinks>

        <IconContainer>
          <FiUser aria-label="Cuenta de usuario" />
          <FiSearch aria-label="Buscar" />
          <FiShoppingCart aria-label="Carrito de compras" />
        </IconContainer>
      </HeaderWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-width: 1100px;
  margin: 0 auto;
  height: 70px;
`;

const Logo = styled.div`
  img {
    height: 90px;
    width: auto;
  }
`;

const NavLinks = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 25px;
    margin: 0;
  }

  a {
    font-family: "Lato", sans-serif;
    color: #405064;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
    font-weight: 300;
    padding-bottom: 5px;
    border-bottom: 3px solid transparent; 

    &:hover {
      color:  #001e44; 
      font-weight: 500;
      padding-bottom: 23px; 
      border-bottom: 4px solid red; 
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    cursor: pointer;
    font-size: 1.8rem;
    color: #627081;
    transition: color 0.3s ease;

    &:hover {
      color: #001e44;
    }
  }
`;

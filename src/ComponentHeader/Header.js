import React, { useState } from "react";
import ninjas from "./labeninjas2-PNG.png";
import "./Header.css";
import styled from "styled-components";
import carrinho_svg from "./carrinho_svg.svg";
import Carrinho from "./Carrinho";

const Button = styled.button`
  display: block;
  background-color: #d977ff;
  padding: 14px 20px;
  color: black;
  font-size: 17px;
  text-decoration: none;
  border: none;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;

const ButtonCarrinho = styled.div`
  display: flex;
  flex-direction: row;
  width: 10vw;
  gap: 10px;
  background-color: white;
  padding: 14px 20px;
  color: black;
  font-size: 17px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  height: 20px;
  border-radius: 20px;
  margin-top: 5px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: mediumpurple;
    color: white;
    height: 20px;
  }
`;
const ImagemLogo = styled.img`
  width: 200%;
`;
class Header extends React.Component {
  render() {
    return (
      <nav id="hambu">
        <div id="tab">
          <ImagemLogo id="logo" src={ninjas} alt="lagos" />
          <label htmlFor="drop" className="toggle">
            <svg id="hamb" viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20" rx="8"></rect>
              <rect y="30" width="100" height="20" rx="8"></rect>
              <rect y="60" width="100" height="20" rx="8"></rect>
            </svg>
          </label>
        </div>
        <input type="checkbox" id="drop" />
        <ul className="menu">
          <li>
            <Button onClick={this.props.irParaCadastroNinjas}>
              Seja um Profissional
            </Button>
          </li>
          <li>
            <ButtonCarrinho onClick={this.props.irParaCarrinho}>
              <img src={carrinho_svg} alt="icone-carrinho" />
              Carrinho
              <p>({this.props.carrinho.length})</p>
            </ButtonCarrinho>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;

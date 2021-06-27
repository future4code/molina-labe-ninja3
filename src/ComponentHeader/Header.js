import React, { useState } from "react";
import logo from "./logo.png";
import "./Header.css";
import styled from "styled-components";
import carrinho_svg from "./carrinho_svg.svg";

const ButtonNinja = styled.button`
  display: flex;
  background-color: lavender;
  padding: 14px 20px;
  color: mediumpurple;
  font-size: 17px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  align-items: center;
  height: 48px;
  border-radius: 20px;
  margin-right: 20px;
  font-weight: bold;
  background-color: white;
  position: relative;
  bottom: 60px;

  :hover {
    background-color: mediumpurple;
    color: white;
  }
`;

const ButtonCarrinho = styled.div`
  display: flex;
  flex-direction: row;
  width: 10vw;
  height: 20px;
  gap: 10px;
  background-color: white;
  padding: 14px 20px;
  color: mediumpurple;
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 60px;

  :hover {
    background-color: mediumpurple;
    color: white;
    height: 20px;
  }
`;

const ContainerLogo = styled.div`
  display: flex;

  img {
    position: relative;
    right: 10px;
    height: 45px;
  }

  button {
    width: 5vw;
    border: none;
    background-color: lavender;
    cursor: pointer;
    position: relative;
    left: 30px;

    :hover {
      background-color: whitesmoke;
      border-radius: 50px;
    }
  }
`;

class Header extends React.Component {
  render() {
    return (
      <nav id="hambu">
        <ContainerLogo id="tab">
          <button onClick={this.props.irParaCardsCategorias}>
            <img id="logo" src={logo} alt="lago" />
          </button>
        </ContainerLogo>
        <ul className="menu">
          <li>
            <ButtonNinja onClick={this.props.irParaCadastroNinjas}>
              Seja um Profissional
            </ButtonNinja>
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

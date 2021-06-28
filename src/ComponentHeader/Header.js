import React, { useState } from "react";
import logo from "./logo.png";
import styled from "styled-components";
import carrinho_svg from "./carrinho_svg.svg";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 20vh;
  background-color: lavender;
  align-items: center;
`;

const BotoesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50vw;
  margin-right: 40px;
`;

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
  font-weight: bold;
  background-color: white;
  position: relative;
  margin-right: 20px;

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
  align-items: center;
  justify-content: center;
  position: relative;

  :hover {
    background-color: mediumpurple;
    color: white;
    height: 20px;
  }
`;

const ContainerLogo = styled.div`
  display: flex;
  width: 50vw;
  justify-content: center;

  img {
    position: relative;
    right: 10px;
    height: 150px;
  }

  button {
    width: 150px;
    border: none;
    background-color: lavender;
    cursor: pointer;
    position: relative;

    :hover {
      background-color: whitesmoke;
      border-radius: 50px;
    }
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <ContainerLogo id="tab">
          <button onClick={this.props.irParaCardsCategorias}>
            <img src={logo} alt="logo" />
          </button>
        </ContainerLogo>
        <BotoesContainer>
          <ButtonNinja onClick={this.props.irParaCadastroNinjas}>
            Seja um Profissional
          </ButtonNinja>
          <ButtonCarrinho onClick={this.props.irParaCarrinho}>
            <img src={carrinho_svg} alt="icone-carrinho" />
            Carrinho
            <p>({this.props.carrinho.length})</p>
          </ButtonCarrinho>
        </BotoesContainer>
      </HeaderContainer>
    );
  }
}

export default Header;

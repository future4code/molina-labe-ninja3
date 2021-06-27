import React from "react";
import logo from "./logo.png";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  justify-items: center;
  grid-auto-columns: 1fr;
  grid-template-rows: 200px 200px 90px;
  

  h2 {
    text-align: center;
    height: 30px;
    justify-content: center;
  }

  img {
    width: 300px;
    height: 300px;
    /* filter: hue-rotate(240deg); */
  }
`;

const CardsContainer2 = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  
`;

const Card1 = styled.div`
  width: 250px;
  height: 220px;
  /* box-shadow: 5px 5px gray;
  border: 2px solid black;
  border-radius: 10px; */
  top: 300px;
  right: 200px;
 
`;

const ButtonContratar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: lavender;
  padding: 14px 20px;
  color: mediumpurple;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 40px;
  width: 15vw;
  height: 5vh;
  align-items: center;
  border: none;
  cursor: pointer;

  :hover {
    background-color: mediumpurple;
    color: white;
  }
`;


export default class CardsCategorias extends React.Component {
 

  render() {
    return (
      <CardsContainer>
        <ButtonContratar onClick={this.props.irParaClientesHome}> Quero Contratar um Ninja </ButtonContratar>
        <CardsContainer2>
          <Card1>
          <img src={logo} alt="icone-lixeira" />
          </Card1>
        </CardsContainer2>
      </CardsContainer>
    );
  }
}

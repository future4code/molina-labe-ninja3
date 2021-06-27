import React from "react";
import aulas from "./images/aulas.svg";
import autos from "./images/autos.svg";
import consultoria from "./images/consultoria.svg";
import modaebeleza from "./images/modaebeleza.svg";
import designetecnologia from "./images/designetecnologia.svg";
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
    width: 120px;

    filter: hue-rotate(240deg);
  }
`;

const CardsContainer2 = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  
`;

const Card1 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  cursor: pointer;
`;
const Card2 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  cursor: pointer;
`;
const Card3 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  cursor: pointer;
`;
const Card4 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  cursor: pointer;
`;
const Card5 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  top: 300px;
  right: 200px;
  border-radius: 10px;
  cursor: pointer;
`;

const ButtonStyle = styled.button`
  height: 180px;
  width: 200px;
  background-color: white;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: MediumPurple;
  }
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
  border-radius: 20px;
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
            <ButtonStyle onClick={this.props.irParaCardAulas}>
              <img src={aulas} alt="icone-aulas" />
            </ButtonStyle>
          </Card1>
          <Card2>
            <ButtonStyle onClick={this.props.irParaCardAutos}>
              <img src={autos} alt="icone-autos" />
            </ButtonStyle>
          </Card2>
          <Card3>
            <ButtonStyle onClick={this.props.irParaCardConsultoria}>
              <img src={consultoria} alt="icone-consultoria" />
            </ButtonStyle>
          </Card3>
          <Card4>
            <ButtonStyle onClick={this.props.irParaCardDesign}>
              <img src={designetecnologia} alt="icone-designetecnologia" />
            </ButtonStyle>
          </Card4>
          <Card5>
            <ButtonStyle onClick={this.props.irParaCardModaeBeleza}>
              <img src={modaebeleza} alt="icone-modaebeleza" />
            </ButtonStyle>
          </Card5>
        </CardsContainer2>
      </CardsContainer>
    );
  }
}

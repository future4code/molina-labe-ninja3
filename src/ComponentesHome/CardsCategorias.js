import React from "react";
import aulas from "./images/aulas.svg";
import autos from "./images/autos.svg";
import consultoria from "./images/consultoria.svg";
import modaebeleza from "./images/modaebeleza.svg";
import designetecnologia from "./images/designetecnologia.svg";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100vw;
  height: 900px;
  
  justify-content: center;
  align-items: center;
  justify-items: center;
  text-align: center;
  align-content: center;
  background-color: salmon;

  h2 {
    text-align: center;
    background-color: red;
    height: 30px;
    justify-content: center;
    background-color: blue;
  }

  img {
    width: 120px;
  }
`;
const Card1 = styled.div`
  width: 200px;
  height: 180px;
  box-shadow: 5px 5px gray;
  border: 2px solid black;
  position: relative;
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
  position: relative;
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
  position: relative;
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
  position: relative;
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
  position: relative;
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

  :hover{
    background-color: MediumPurple;
  }
`;

export default class CardsCategorias extends React.Component {
  render() {
    return (
      <CardsContainer>
        <h2>Todas as Categorias de Serviços</h2>
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
          <ButtonStyle onClick={this.props.irParaCardModaeBeleza }>
            <img src={modaebeleza} alt="icone-modaebeleza" />
          </ButtonStyle>
        </Card5>
      </CardsContainer>
    );
  }
}

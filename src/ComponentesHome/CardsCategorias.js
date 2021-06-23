import React from "react";
import aulas from "./images/aulas.svg";
import autos from "./images/autos.svg";
import consultoria from "./images/consultoria.svg";
import modaebeleza from "./images/modaebeleza.svg";
import designetecnologia from "./images/designetecnologia.svg";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  position: relative;
  top: 150px;
  width: 101%;
  background-color: blueviolet;

  h2 {
    position: relative;
    left: 600px;
    top: 180px;
  }

  img {
    width: 120px;
    position: relative;
    top: 25px;
    left: 40px;
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

export default class CardsCategorias extends React.Component {
  render() {
    return (
      <div>
        <CardsContainer>
          <h2>Todas as Categorias de Serviços </h2>

          <Card1>
            <button onClick={this.props.irParaCardAulas}>
              <img src={aulas} alt="icone-aulas" />
            </button>
          </Card1>
          <Card2>
            <button onClick={this.props.irParaCardAutos}>
              <img src={autos} alt="icone-autos" />
            </button>
          </Card2>
          <Card3>
            <button onClick={this.props.irParaConsultoria}>
              <img src={consultoria} alt="icone-consultoria" />
            </button>
          </Card3>
          <Card4>
            <button onClick={this.props.irParaCardDesign}>
              <img src={designetecnologia} alt="icone-designetecnologia" />
            </button>
          </Card4>
          <Card5>
            <button>
              <img src={modaebeleza} alt="icone-modaebeleza" />
            </button>
          </Card5>
        </CardsContainer>
      </div>
    );
  }
}

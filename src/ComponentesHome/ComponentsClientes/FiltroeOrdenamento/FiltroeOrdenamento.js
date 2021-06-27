import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  background-color: #d977ff;
  height: 70vh;
  width: 20vw;
  position: relative;
  right: 600px;
  bottom: 435px;
  border-radius: 20px;
`;

const TituloFiltroH3 = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconeFiltro = styled.img`
  width: 8%;
`;

const OrdenacaoProdutos = styled.h3`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default class FiltroeOrdenamento extends React.Component {
  render() {
    return (
      <Container>
        <TituloFiltroH3>
          <IconeFiltro
            src="https://image.flaticon.com/icons/png/512/223/223420.png"
            alt="icone filtro"
          />{" "}
          <p>Filtros</p>{" "}
        </TituloFiltroH3>

        <div>
          <p>Valor minimo:</p>
          <input type="number" />
        </div>

        <div>
          <p>Valor máximo:</p>
          <input type="number" />
        </div>

        <div>
          <p>Buscar por Título:</p>
          <input type="text" />
        </div>
        <OrdenacaoProdutos>
          <p>
            Ordenação:
            <select>
              <option value="">Selecionar</option>
              <option value="crescente">Título</option>
              <option value="decrescente">Preço</option>
              <option value="prazo">Prazo</option>
            </select>
          </p>
        </OrdenacaoProdutos>
      </Container>
    );
  }
}

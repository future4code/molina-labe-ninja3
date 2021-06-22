import React from "react";
import CardAulas from "./componentsBruno/CardAulas/CardAulas";
import CardsCategorias from "./ComponentesHome/CardsCategorias";
import CardDesign from "./ComponentesSuzana/CardDesign";
import styled from 'styled-components'

const AppContainerHome = styled.div `
	
	height: 200rem;

 `

export default class App extends React.Component {


	render () {
		return (
			<AppContainerHome>

			<CardAulas />
			<CardDesign />
			<CardsCategorias/>
			

			</AppContainerHome>
		) 
	}
	
  

}



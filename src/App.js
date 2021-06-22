import React from "react";
import AppContainer from "./ComponentesHome/AppContainer";
import CardAulas from "./componentsBruno/CardAulas/CardAulas";
import CardsCategorias from "./ComponentesHome/CardsCategorias";
import styled from 'styled-components'

const AppContainerHome = styled.div `
	
	height: 100rem;
	

 `

export default class App extends React.Component {


	render () {
		return (
			<AppContainerHome>

			<AppContainer/>

			<CardAulas />
			<CardsCategorias/>

			</AppContainerHome>
		) 
	}
	
  

}



import React from "react";
import Icon from './consultoria.svg'
import Consultoria from './Consultoria.js'


export default class Consultorias extends React.Component {
    constructor(props) {
        super(props);
        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleOpenCard = this.handleOpenCard.bind(this);
        this.state = {isOpened: false};
      }
    
      handleGoBack() {
        this.setState({isOpened: true});
      }
    
      handleOpenCard() {
        this.setState({isOpened: false});
      }
    
      render() {
        const isOpened = this.state.isOpened;
        let icon;
    
        if (isOpened) {
          icon = <OpenCard onClick={this.handleOpenCard} />;
        } else {
          icon = <GoBack onClick={this.handleGoBack} />;
        }
    
        return (
          <div>
                          {icon}

            <Greeting isOpened={isOpened} />
          </div>
        );
      }
    }
    
    function CardOpened(props) {
      return <Consultoria/>;
    }
    
    function CardClosed(props) {
      return '';
    }
    
    function Greeting(props) {
      const isOpened = props.isOpened;
      if (isOpened) {
        return <CardOpened />;
      }
      return <CardClosed />;
    }
    
    function GoBack(props) {
      return (
        <img src={Icon} onClick={props.onClick}/>

      );
    }
    
    function OpenCard(props) {
      return (
        <img src={Icon} onClick={props.onClick}/>
         
      );
    }
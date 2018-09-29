import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component{
    constructor(){
        super()
    
        this.state = {
          clicked : "false"
        }
      } 
    
      render(){
        return (
          <img {...this.props} className="imageSize" src={this.props.imageSrc} ></img>
        );
      }
}

export default Card;

// {...this.props} binds all the functions from the parent onto the child
import React, { Component } from "react";
{
  /*import the Card.css styling*/
}
import "../styles/Card.css";

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    {
      /* return an image tag that gets the props from parent via the spread operator, which will also bind all the functions from the parent onto the child*/
    }
    return (
      <img {...this.props} className="imageSize" src={this.props.imageSrc} />
    );
  }
}

export default Card;

{
  /* {...this.props} binds all the functions from the parent onto the child */
}

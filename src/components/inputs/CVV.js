import React, { Component } from "react";

class CardHolderName extends Component {

    render() {
      return (
              <input type="text" name={this.props.CVV} required pattern="[0-9]+" maxLength="3" size="3"/>
      );
    }
}


export default CardHolderName;
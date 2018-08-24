import React, { Component } from "react";

class CardNumber extends Component {

    render() {
      return (
              <input type="text" name="cardNumber" placeholder="* CARD HOLDER" pattern="[0-9]+" required maxLength="16"/>
      );
    }
}


export default CardNumber;


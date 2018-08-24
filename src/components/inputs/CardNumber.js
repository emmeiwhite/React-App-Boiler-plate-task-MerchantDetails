import React, { Component } from "react";

class CardNumber extends Component {

    render() {
      return (
          <div>
              <input type="text" name={this.props.cardNumber} placeholder="* CARD HOLDER" pattern="[0-9]+" required maxlength="16"/>
         </div>
      );
    }
}


export default CardNumber;


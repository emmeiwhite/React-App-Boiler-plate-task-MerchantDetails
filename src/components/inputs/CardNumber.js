import React, { Component } from "react";

class CardNumber extends Component {

  onNumberInput= (event)=>{
    console.log("User Provided User Details");
    const answer = document.querySelector( "[id=cardNumber]" );
    answer.addEventListener( "input", ( event ) => {
     if ( answer.validity.patternMismatch ) {
       answer.setCustomValidity("Only Numbers are allowed [0-9]");
     } else {
      answer.setCustomValidity( "" );
     }
    });
      
    }

    render() {
      return (
              <input type="text" name="cardNumber" id="cardNumber" placeholder="* CARD HOLDER" pattern="[0-9]+" required maxLength="16" required  onInput={this.onNumberInput.bind(this)} />
      );
    }
}


export default CardNumber;


import React, { Component } from "react";

class CardHolderName extends Component {
  
  onTextInput(event){
    
    const answer = document.querySelector( "[id=cardHolderName]" );
    answer.addEventListener( "input", ( event ) => {
     if ( answer.validity.patternMismatch ) {
      console.log("User Provided User Details");
       answer.setCustomValidity("Name field cannot be empty");
     } else {
      answer.setCustomValidity( "" );
     }
    });
      
  }
  
  onInvalidText(){
    console.log("OnInvalidText also getting invoked");
    const answer = document.querySelector( "[id=cardHolderName]" );
    answer.addEventListener( "input", ( event ) => {
      if (answer.validity.patternMismatch ) {
        answer.setCustomValidity("Name cannot be EMPTY and Name cannot contain Speacial Characters and Numbers");
      } else {
       answer.setCustomValidity( "" );
      }
     });
    
  }


    render() {
      return (
        <div className="cardHolderName">
              <input type="text" name={this.props.cardHolderName}  id="cardHolderName" required onInvalid={this.onInvalidText.bind(this)} onInput={this.onTextInput.bind(this)} pattern="[a-zA-Z]+" />      
        </div>
      );
    }
}


export default CardHolderName;

// onInput={this.onTextInput.bind(this)}
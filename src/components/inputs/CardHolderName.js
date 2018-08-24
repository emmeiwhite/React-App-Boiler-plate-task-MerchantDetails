import React, { Component } from "react";

class CardHolderName extends Component {

    render() {
      return (
          <div>
              <input type="text" name={this.props.cardHolderName} required pattern = "[a-zA-Z\s]+"/>
         </div>
      );
    }
}


export default CardHolderName;
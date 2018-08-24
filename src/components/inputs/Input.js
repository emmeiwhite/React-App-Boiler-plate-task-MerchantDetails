import React, { Component } from "react";

class Input extends Component {

    render() {
      return (
          <div>
              <input type="text" name={this.props.billingAddress}/>
         </div>
      );
    }
}


export default Input;

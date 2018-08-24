import React, { Component } from "react";

class Input extends Component {

    onChangeInput = (e) => {
        this.props.handleOnChange(e.target.value);
    }

    render() {
      return (
              <input type="text" name={this.props.billingAddress} onChange={this.onChangeInput} />
      );
    }
}


export default Input;

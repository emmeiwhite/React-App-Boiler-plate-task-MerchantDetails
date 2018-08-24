import React, { Component } from "react";


class Zip extends Component {

    render() {
        
      return (     
        <input type="text" name={this.props.zip} required pattern = "[0-9]+" size="6" maxLength="6" />         
      );
    }
}


export default Zip;

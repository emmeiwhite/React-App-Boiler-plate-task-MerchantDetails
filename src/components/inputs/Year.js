import React, { Component } from "react";

class Year extends Component {

    render() {
        
      return (
         
              <select name="expireYear" required>
              {this.props.years.map((year,index)=>{
                  console.log(year);
                 return <option value={year} key={index}>{year}</option>
              })}
              
              </select>
            
        
      );
    }
}


export default Year;


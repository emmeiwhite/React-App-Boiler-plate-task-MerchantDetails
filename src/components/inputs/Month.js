import React, { Component } from "react";

class Month extends Component {

    render() {
        
      return (     
              <select name="expireMonth">
                {this.props.months.map((month,index)=>{
                    console.log(month);
                    return <option value={month} key={index}>{month}</option>
                })}
              </select>          
      );
    }
}


export default Month;

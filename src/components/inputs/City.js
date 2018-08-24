import React, { Component } from "react";


class City extends Component {

    render() {
        
      return (     
              <select name="city" required>
                {this.props.city.map((city,index)=>{
                    // console.log(city);
                    return <option value={city} key={index}>{city}</option>
                })}
              </select>          
      );
    }
}


export default City;

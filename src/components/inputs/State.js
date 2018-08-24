import React, { Component } from "react";


class City extends Component {

    render() {
        
      return (     
              <select name="state" required>
                {this.props.state.map((state,index)=>{
                    // console.log(state);
                    return <option value={state} key={index}>{state}</option>
                })}
              </select>          
      );
    }
}


export default City;

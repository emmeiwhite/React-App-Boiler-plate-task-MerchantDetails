import React, { Component } from "react";

class CardHolderName extends Component {
  constructor(props){
    super(props);
    this.state = {
        popUp:false
      }
    }

  onChangeTextInput= (event)=>{
    let nameTyped = event.target.value;
    let pattChar = /[a-zA-Z]/g; 
    
    if(nameTyped.match(pattChar)){
      console.log("Pattern Matched");
      this.props.handleOnChange(nameTyped);
    }else{  
      console.log("Pattern Didn't Match !!!");
      let doesPopUp = this.state.popUp;
      this.setState({
       popUp:true }) 
      
    }
    
  }
    render() {
      return (
        <div className="cardHolderName">
              <input type="text" name={this.props.cardHolderName} required onChange={this.onChangeTextInput}/>      
               { this.state.popUp? 
                <div clasName="PopUp">
                 <p>Please Provide Characters [a-z or A-Z] for CardHolderName</p>
               </div>
               :null     
             }
        </div>
      );
    }
}


export default CardHolderName;
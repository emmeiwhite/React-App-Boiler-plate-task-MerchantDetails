import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "./../../../components/buttons/Button";
import Logo from "./../../../components/Logo";
import Input from "./../../../components/inputs/Input";
import CardNumber from "./../../../components/inputs/CardNumber";
import Month from "./../../../components/inputs/Month";
import Year from "./../../../components/inputs/Year";
import CardHolderName from "./../../../components/inputs/CardHolderName";
import Asterix from "./../../../components/inputs/Asterix";
import CVV from "./../../../components/inputs/CVV";
import City from "./../../../components/inputs/City";
import State from "./../../../components/inputs/State";
import Zip from "./../../../components/inputs/Zip";


import './../css/AddMerchantDetails.css';

class AddMerchantDetails extends Component {
    // Merchant State Management:
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
            cardHolderName:"",
            cardNumber:"",
            billingAddressOne:"", 
            billingAddressTwo:"",
            years:[2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028],
            months:[1,2,3,4,5,6,7,8,9,10,11,12],
            CVV:"",
            cities:["xsd","hghj","kajh","kajh","kasjd"],
            states:["oioi","oidu","xsd","hghj","kajh","kajh","kasjd"],
            zip:""
           
        }
    }

    onChangeAddressOne = (address) => {
        this.setState({
            billingAddressOne: address
        });
    }

    onChangeAddressTwo = (address) => {
        this.setState({
            billingAddressTwo: address
        });
    }
   
    //  CardHolder Name
    onChangeCardeHolderName =(holderName)=>{
        this.setState({
            cardHolderName:holderName
        })
    }


    // submit form validation

    handleSubmit(e){
        e.preventDefault();
        console.log("Submit Handler Invoked !!!");
        const errors = [];
        let cardHolderName = document.getElementById('cardHolderName');
        console.log(cardHolderName);
    };

    render() {
       
      return (
        <div>
            <nav className="navbar navbar-default main-header">
                    <div className="container">
                        <div className="navbar-header logo-div">
                            <h1><a href="#" className="navbar-brand logo"><Logo/></a></h1>
                        </div>
                        
                        <ul className="nav navbar-nav navbar-right">
                        <h2>Need Help? Click Here Existing User? LogIn</h2>
                        </ul>                  
                    </div>
            </nav>
            
            <div className="container">
                <form>
                <div className="row">
                   
                        <div className="col-md-6">
                            <h4>Enter Debit Card Details</h4>

                            <div className="form-element">
                                <Asterix/>Card Holder Name: <CardHolderName cardHolderName={this.state.cardHolderName} handleOnChange={this.onChangeCardeHolderName}/>
                            </div>

                            <div className="form-element">
                                <Asterix/>Card Number: <CardNumber cardNumber={this.state.cardNumber}/>
                            </div>

                             <div className="form-element">
                                <Asterix/>Expiration Date: <Month months={this.state.months}/><span className="redColor">/</span>
                                <Year years={this.state.years}/>
                            </div>

                             <div className="form-element">
                                <Asterix/>CVV <CVV cardNumber={this.state.CVV_Number}/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-element">
                                <input type="checkbox" name="checkIt"/>
                                <strong>Use Business Address:</strong>
                            </div>
                            
                            <div className="form-element">
                                 <Asterix/>Billing Address 1: <Input billingAddress={this.state.billingAddressOne} handleOnChange={this.onChangeAddressOne}/>
                            </div>
                            
                            <div className="form-element">
                                Billing Address 2: <Input billingAddress={this.state.billingAddressTwo} handleOnChange={this.onChangeAddressTwo} />
                            </div>
                             
                            <div className="form-element">
                                <Asterix/>City: <City city={this.state.cities}/>
                            </div>

                             <div className="form-element">
                                <Asterix/>State: <State state={this.state.states}/>
                                <Asterix/>Zip:<Zip zip={this.state.zip}/>
                             </div>
                            
                             
                             <div className="form-element">
                               {/* <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit.bind(this)}>SUBMIT</button> */}
                               {/* <Button buttonName="Submit" onClick={this.handleSubmit} type="submit"/> */}
                               <button type="submit" onSubmit={this.handleSubmit}>SUBMIT</button>
                             </div>
                             

                        </div>
                    
                </div>
                </form>
            </div>

        {/* 
        
        
            <div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div>
                                Step 2 of 3
                                <h2>FundsAdvance-Enrollment</h2>
                                <h4>Enroll now to get access to your funds today!</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6">
                            <div>
                                    <div className="datafetched">
                                        <h3>Business Name: AVALON MEAT CANDY</h3>
                                    <div>

                                    <div className="datafetched">
                                        <h3>Business Address:</h3>
                                        <h3>9770 S MARYLAND PKWY 1</h3>
                                        <h3>LAS VEGAS, NV.89183</h3>
                                    <div>
                            </div>
                        </div>

                        <div className="col-xs-6">
                            <div>
                            
                            </div>
                        </div>
                    </div>

            </div> */}


            
            

        </div>       
      );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AddMerchantDetails);

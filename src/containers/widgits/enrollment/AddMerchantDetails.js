import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "./../../../components/buttons/Button";
import Logo from "./../../../components/Logo";
import Input from "./../../../components/inputs/Input";
import CardNumber from "./../../../components/inputs/CardNumber";
import Month from "./../../../components/inputs/Month";
import Year from "./../../../components/inputs/Year";
import CardHolderName from "./../../../components/inputs/CardHolderName";

import './../css/AddMerchantDetails.css';

class AddMerchantDetails extends Component {
    // Merchant State Management:
    constructor(){
        super();
        this.state = {
            cardHolderName:"name",
            cardNumber:"cardNumber",
            billingAddress:"address", // Shall I keep other Component
        }
    }
   

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
            
                <div className="row">
                    <form action="">
                        <div className="col-md-6">
                            <h4>Enter Debit Card Details</h4>
                            <span className="redAsterix">&#42;</span>Card Holder Name:<CardHolderName cardHolderName={this.state.cardHolderName}/>
                            <span className="redAsterix">&#42;</span>Card Number<CardNumber cardNumber={this.state.cardNumber}/>
                            <span className="redAsterix">&#42;</span>Expiration Date:<Month/> 
                            <span className="redAsterix">&#42;</span>CVV<Input/>
                        </div>
                        <div className="col-md-6">
                            <input type="checkbox" />
                             <h4>Enter Debit Card Details</h4>
                             <span className="redAsterix">&#42;</span>Billing Address 1<Input billingAddress={this.state.billingAddress}/>
                             <span className="redAsterix">&#42;</span>Billing Address 2<Input billingAddress={this.state.billingAddress}/>
                             <span className="redAsterix">&#42;</span>City<Input/>
                             <span className="redAsterix">&#42;</span>State<Input/>
                             <span className="redAsterix">&#42;</span>Zip<Input/>
                             <span className="redAsterix">&#42;</span><Button buttonName="Submit"/>

                        </div>
                    </form>
                </div>
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

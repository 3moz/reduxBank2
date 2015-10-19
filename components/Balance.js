import React, { Component, PropTypes } from 'react';
var classNames = require('classnames');

export default class Balance extends Component {
  
  render() {
    
    var balanceClass = classNames({
      "bg-danger":  this.props.balance<0,
      "bg-success": this.props.balance>0,
    }); 

    return (

      <h2 className={balanceClass}>Balance: {this.props.balance.toFixed(2)}</h2>
    );
  }
}

Balance.propTypes = {
  balance: PropTypes.number.isRequired
}
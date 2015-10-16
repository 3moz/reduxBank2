import React, { Component, PropTypes } from 'react';

export default class Balance extends Component {
  
  render() {
    
    return (

      <span>Balance: {this.props.balance}</span>
    );
  }
}

Balance.propTypes = {
  balance: PropTypes.number.isRequired
}
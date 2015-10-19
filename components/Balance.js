import React, { Component, PropTypes } from 'react';

export default class Balance extends Component {
  
  render() {
    
    return (

      <h2>Balance: {this.props.balance}</h2>
    );
  }
}

Balance.propTypes = {
  balance: PropTypes.number.isRequired
}
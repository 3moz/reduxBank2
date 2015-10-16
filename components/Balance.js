import React, { Component, PropTypes } from 'react';

export default class Balance extends Component {
  
  render() {
    
    return (

      <p>Balance: {this.props.balance}</p>
    );
  }
}

Balance.propTypes = {
  balance: PropTypes.number.isRequired
}
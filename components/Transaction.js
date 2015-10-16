import React, { Component, PropTypes } from 'react';

export default class Transaction extends Component {

  render(){

    return (

      <li>
        {this.props.value}
      </li>
    );
  }
}

Transaction.propTypes = {
  value: PropTypes.number.isRequired
}
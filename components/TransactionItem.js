import React, {Component, PropTypes } from 'react';
import TransactionInput from './TransactionInput';

class TransactionItem extends Component {
  //TransactionItem gets from TransactionInput:
  //- value (number)
  //- onsave(value) (func) <--onSave() not defined as of here
  //- placeholder (string)

  render() {

    console.log(this); 

    return (

      <li>
        transactionItem = {this.state.value}
      </li>
    );

  }
}

TransactionItem.propTypes = {
  transactionItem: PropTypes.number
}

export default TransactionItem;
import React, {Component, PropTypes} from 'react';
import Transaction from './Transaction';

export default class Ledger extends Component {
  render() {
    
    console.log(this.props);
    return (

      <ul>
        Transaction Ledger:
        
        {this.props.transactions.map(
         (transaction, index) => <Transaction key={index} value={transaction}/>
        )}
      </ul>
    );
  }
}

Ledger.propTypes = {
  transactions: PropTypes.array.isRequired
}


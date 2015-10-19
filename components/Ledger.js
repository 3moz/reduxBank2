import React, {Component, PropTypes} from 'react';
import Transaction from './Transaction';

export default class Ledger extends Component {
  render() {
    
    return (

      <ul className="list-unstyled bg-info">
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


import React, {Component, PropTypes} from 'react';
import TransactionItem from './TransactionItem';

class Ledger extends Component {

  //receives transactionItem, which is a value, which in turn comes from state

  render() {
    
    console.log('Ledger props: ');
    console.log(this.props);

    return(
      
      <ul>
        {transactions.map(
          transaction => <TransactionItem/>)
        }
      </ul>

    );
  }

}

Ledger.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default Ledger;
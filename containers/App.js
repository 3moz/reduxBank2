import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddTransaction from '../components/AddTransaction';
import Balance from '../components/Balance';
import Ledger from '../components/Ledger';
import Transaction from '../components/Transaction';
import {addTransaction} from '../actions/transactions';

// var Stylesheet = require('react-style');

// var styles = Stylesheet.create({
//   app:{
//     textAlign: 'center',
//     backgroundColor: 'green'
//   }
// })

export class App extends Component {

 

  render(){
    //injected by connect() call;

    const {dispatch, transactions, balance} = this.props;

    return (

      <div className="row">

        <div className="col-sm-4 col-sm-offset-4 form-group">

          <div className="text-center">

            <Balance balance={balance}/>
            
            <AddTransaction onAddClick={value => dispatch(addTransaction(parseInt(value)))}/>
            
            <div>
              <h4>
                <Ledger transactions={transactions}/>
              </h4>
            </div>

          </div>

        </div>

      </div>    
    )
  }
}

App.propTypes = {
  transactions: PropTypes.array.isRequired,
  balance: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  // console.log(state.transactions[state.transactions.length-1].transactions); 
  // console.log(state.transactions[state.transactions.length-1].balance);
  return {
    transactions: state.transactions[state.transactions.length-1].transactions, //[]
    balance: state.transactions[state.transactions.length-1].balance // number
  }
}

export default connect(mapStateToProps)(App)
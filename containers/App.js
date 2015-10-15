import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Ledger from '../components/Ledger';
import * as TransactionActions from '../actions/transactions';

class App extends Component {

  render(){

    console.log(this);

    const {transactionItems, dispatch} = this.props;
    const actions = bindActionCreators(TransactionActions, dispatch);

    return (

      <div>
        <Header addTransaction={actions.addTransaction}/>
        <Ledger transactionItems={transactions}/>
      </div>
    );
  }
}

App.propTypes = {
  transactionItems: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    transactionItems: state.transactionItems
  }
}

export default connect(mapStateToProps)(App)
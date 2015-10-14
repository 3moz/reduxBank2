import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Transactor from '../components/Transactor';
import * as TransactorActions from '../actions/transactor';

function mapStatetoProps(state) {
  return {
    balance: state.balance
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(TransactorActions, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(Transactor);
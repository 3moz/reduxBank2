import React, { PropTypes, Component } from 'react';
import TransactionInput from './TransactionInput';

class Header extends Component {

  //Header gets from TransactionInput:
  //- value (number)
  //- onsave(value) (func) <--onSave() not defined as of here
  //- placeholder (string)

  handleSave(value){
    if (value!==null) {
      this.props.addTransaction(value);
      //value from TransactionInput field being sent to a TransactionItem
      //which will be part of the Ledger
    } 
  }

  render() {

    console.log('Header props: ');
    console.log(this.props);
    
    return(
      <header>
        <h2>balance: here will be component to show the balance</h2>
        <TransactionInput 
          onSave={this.handleSave.bind(this)}
          placeholder='enter amount to deposit or withdraw'/>
      </header>
    );
  }

}

Header.propTypes = {
  addTransaction: PropTypes.func.isRequired
}

export default Header;
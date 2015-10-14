import React, {Component, PropTypes} from 'react';

class Transactor extends Component{
  render() {
    const {balance, deposit, withdraw} = this.props;
    return (
      <div>
        <p>balance equals: {balance} </p>

        <input
          id='inputAmount' 
          placeholder="transaction amount">
        </input>

        <button onClick={deposit}>deposit</button>
        <button onClick={withdraw}>withdraw</button>    

      </div>
    );
  }
}

Transactor.propTypes = {
  deposit: PropTypes.func.isRequired,
  withdraw: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired
};

export default Transactor;
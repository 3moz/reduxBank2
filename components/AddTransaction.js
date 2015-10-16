import React, {Component, PropTypes} from 'react';

export default class AddTransaction extends Component {

  render() {
    return (

      <div>
        <input 
        type='number' 
        ref='input'
        autofocus='true'
        placeholder='enter amount'/>
        <button onClick = {element => this.handleClick(element)}>
        Add Transaction
        </button>
      </div>

    );
  }

  handleClick(element) {
    const node = this.refs.input;
    const value = node.value.trim();
    this.props.onAddClick(value);
    node.value = null;
  }
}

AddTransaction.propTypes = {
  onAddClick: PropTypes.func.isRequired
};


import React, {Component, PropTypes} from 'react';

export default class AddTransaction extends Component {

  render() {
    return (

      <div className="form-horizontal">
      
        <div className="form-group">
    
          <div>
            <input
            className="form-control" 
            type='number' 
            ref='input'
            autofocus='true'
            placeholder='enter amount'/>
          </div>  
    
          <div>
            <button 
            className="btn btn-primary" type="submit" value="Submit"
            onClick = {element => this.handleClick(element)}>
            Add Transaction
            </button>
          </div>
    
        </div>

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


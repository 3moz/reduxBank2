import React, {Component, PropTypes} from 'react';

class TransactionInput extends Component{
  
  constructor(props, context) {
    super(props, context);
    this.state = {value: this.props.value || null};
  }

  handleSubmit(element){
    const val = element.target.value.trim();
    if (element.which===13) {//enter key
      this.props.onSave(val)
      this.setState({ value: null });
      }
    }
  

  render() {
    
    console.log('TransactionInput props: ');
    console.log(this.props);

    return (
      <input
        type='number'
        value={this.state.value}
        placeholder={this.props.placeholder}
        onKeyDown={this.handleSubmit.bind(this)}/>
    );
  }
}

TransactionInput.propTypes = {
  value:PropTypes.number,
  onSave: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default TransactionInput;
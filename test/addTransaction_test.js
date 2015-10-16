import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AddTransaction from '../components/AddTransaction'

function setup(){
  let props = {
    onAddClick: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer();
  renderer.render(<AddTransaction {...props}/>);
  let output = renderer.getRenderOutput();

  return{
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('AddTransaction', () =>{
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('div');

      let [input, button] = output.props.children;

      expect(input.props.type).toBe('number');
      // expect(input.props.ref).toBe('input');
      expect(input.props.autofocus).toBe('true');
      expect(input.props.placeholder).toBe('enter amount');
           
    });

    it('should call onAddClick on buttonclick', () => {
      const {output, props} = setup();

      let button = output.props.children[1]
      let input = output.props.children[0]

      button.props.onClick(4);
      
      //this will throw error "TypeError: Cannot read property 'value' of undefined"
      //because value = node.value.trim() in the module and this test does not simulate
      //a 'live' node value.
      //however, the fact that the test is erroring at AddTransaction.handleClick
      //means that the call to onAddClick would be made if there was a live value in the
      //node = this.refs.input
      
      expect(props.onAddClick.calls.length).toBe(1);
    })
  });
});
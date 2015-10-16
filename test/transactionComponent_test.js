import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Transaction from '../components/Transaction'

function setup(){
  let props = {
    value: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer();
  renderer.render(<Transaction {...props}/>);
  let output = renderer.getRenderOutput();

  return{
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('Transaction', () =>{
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('li');

      
    });
  });
});
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Ledger from '../components/Ledger'

function setup(){
  let props = {
    transactions: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer();
  renderer.render(<Ledger {...props}/>);
  let output = renderer.getRenderOutput();

  return{
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('Ledger', () =>{
    it('should render correctly', () => {
      const {output} = setup();

      //this test throws error "TypeError: this.props.transactions.map is not a function"
      //I think this is because at this point, this.props.transactions is undefined

      expect(output.type).toBe('ul');


    });
  });
});
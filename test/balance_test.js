import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Balance from '../components/Balance'

function setup(){
  let props = {
    balance: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer();
  renderer.render(<Balance {...props}/>);
  let output = renderer.getRenderOutput();

  return{
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('Balance', () =>{
    it('should render correctly', () => {
      const {output} = setup();

      expect(output.type).toBe('p');

      
    });
  });
});
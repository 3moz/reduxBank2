import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {App} from '../containers/App'

function setup(){
  let props = {
    transactions: expect.createSpy(),
    balance: expect.createSpy()
  }

  let renderer = TestUtils.createRenderer();
  renderer.render(<App {...props}/>);
  let output = renderer.getRenderOutput();

  return{
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('App', () =>{
    it('should render correctly', () => {
      const {output} = setup();
    });
  });
});
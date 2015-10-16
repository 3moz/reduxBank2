import expect from 'expect';
import * as actions from '../actions/transactions'
import * as types from '../actions/transactions'

describe('addTransaction', () => {
  it('should create an action to add a transaction', () => {
    const value = 5;
    const expectedAction = {type: types.ADD_TRANSACTION, value};

    expect(actions.addTransaction(value)).toEqual(expectedAction);
  });
});
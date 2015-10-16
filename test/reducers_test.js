import expect from 'expect';
import reducer from '../reducers/transactions';
import * as types from '../actions/transactions';

describe('transactions reducer', () => {
  
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
      ).toEqual([{
        balance: 0,
        transactions: [0]
      }]);
  });

  it('should handle ADD_TRANSACTION', () => {
    expect(
      reducer(
        [
          {
            balance:0,
            transactions:[0]
          }
        ],{
            type: types.ADD_TRANSACTION,
            value: 5
          }
      )
    ).toEqual(
      [
        {
          balance: 0,
          transactions: [0]
        },
        {
          balance: 5,
          transactions: [5,0]
        }
      ]
    );

    expect(
      reducer(
        [{
          balance: 0,
          transactions: [0]
        },{
          balance: 5,
          transactions: [5,0]
        }],{
          type: types.ADD_TRANSACTION,
          value: 3
      })
    ).toEqual(
      [{
        balance: 0,
        transactions: [0]
      },{
        balance: 5,
        transactions: [5,0]
      },{
        balance: 8,
        transactions: [3,5,0]
      }]
    )
  });
}); 
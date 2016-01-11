import {ADD_TRANSACTION} from '../actions/transactions';

const initialState = [{
  balance: 0,
  transactions: [0]
}];

function transactions(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [...state,{
        balance: state[state.length-1].transactions.reduce((a,b)=>a+b)+action.value,
        transactions: [action.value, ...state[state.length-1].transactions]
      }];
    default:
      return state;
  }
}

export default transactions

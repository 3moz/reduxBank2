import {ADD_TRANSACTION} from '../constants/ActionTypes';

const initialState = [{
  value: null
}];

export default function transactions(state = initialState, action) {

  console.log(state);

  switch(action.type) {
    case ADD_TRANSACTION:
      return [{
        id: state.reduce((maxId, transaction) => Math.max(transaction.id, maxId), -1) +1,
        value: action.value},
        ...state];

    default:
      return state;
  }
}
import * as types from '../constants/ActionTypes';

export function addTransaction(value) {
  return{ type: types.ADD_TRANSACTION, value };
}
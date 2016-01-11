//action types
export const ADD_TRANSACTION = "ADD_TRANSACTION";

//action creators
//add transaction to the ledger list and use it to update balance total 
//(ie, balance += action.value)
export function addTransaction(value) {
  return {type: ADD_TRANSACTION, value}
}

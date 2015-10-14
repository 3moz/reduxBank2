import { DEPOSIT, WITHDRAW } from '../actions/transactor';



export default function balance(state = 0, action){
  switch (action.type){
    
    case DEPOSIT:
      console.log(state);
      return state+=action.payload;
      
    case WITHDRAW:
      console.log(state);
      return state-=action.payload;

    // case DEPOSIT:
    //   console.log(state);
    //   console.log(action.payload);
    //   return [{
    //     balance: state[0].balance+action.payload},
    //      ...state];
    default:
      return state; 
  }
}
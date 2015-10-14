export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";

export function deposit(){
  
  return {
    type: DEPOSIT,
    payload: parseInt(document.getElementById('inputAmount').value.trim())
  }
};

export function withdraw(){
  
  return {
    type: WITHDRAW,
    payload: parseInt(document.getElementById('inputAmount').value.trim())
  }
};

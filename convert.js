const EXCHANGE_RATE = 27.0;
const convert = inr => {
  if (isNaN(inr)) { 
      throw "Invalid amount"; 
  } else { 
      return (inr / EXCHANGE_RATE).toFixed(2); 
  }  
} 
module.exports = convert;

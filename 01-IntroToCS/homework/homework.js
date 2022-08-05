'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numR = num.split('').reverse().join('');
  let acc = [];
  for(let i = 0; i<numR.length; i++){
    acc.push(numR[i] * (2**i));
  }
  return parseInt(acc.reduce((acc,e) => acc + e));
}
// console.log(BinarioADecimal('111'));

function DecimalABinario(num) {
  // tu codigo aca
  return num.toString(2);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
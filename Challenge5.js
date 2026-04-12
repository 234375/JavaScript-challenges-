//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function Seven(arr){
  for(let i= 0; i< arr.length ; i++){
    if(arr[i]===7){
      return "Boom🌟🌟🌟🌟"
    }
  }
  return "There is no 7 in the array"
  
}
console.log(Seven([12,7,3,4]));
console.log(Seven([77]));
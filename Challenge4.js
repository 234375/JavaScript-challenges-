//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function MinMax(arr){
  let min = arr[0];
  let max = arr[0];
  for(let i =1; i< arr.length ; i++){
    if(
      arr[i]<min
      ){
        min = arr[i];
      }
      if(arr[i]> max)
      {
        max = arr[i];
      }
  }
  return `The minimum value is ${min}
  \n The maximum value is ${max}`;
}
console.log(MinMax([0,3,8,100,15]));

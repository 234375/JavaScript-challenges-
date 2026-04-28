//We’ll create a coin-flip game.Generate a random number with Math.random(). Save it in a variable.
//Create an if-statement and check:
//If the number is less than 0.5, then display ‘heads’ in the console.
//Else display ‘tails’ in the console.
//Instead of displaying ‘heads’ or ‘tails’ in the console, save the result in a variable called ‘result’.
//Let’s say we’re trying to guess the result. Create a variable called ‘guess’ and save your guess (‘heads’ or ‘tails’).
//If your guess matches the result, display ‘You win!’ in the console
//If your guess does not match the result, display ‘You lose!’

const random=Math.random();
let result='';
if(random<0.5){
  result='heads';
  console.log(result);
}else{
  result='tails';
  console.log(result);
}
const guess='heads';
if(result===guess){
  console.log('you win');
}else{
  console.log('you lose');
}
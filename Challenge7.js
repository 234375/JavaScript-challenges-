//Write a function redundant that takes in a string str and returns a function that returns str.

function Redundant(str) {
  function inner() {
    return str;
  }
  return inner;
}
const func = Redundant("apple");
console.log(func());
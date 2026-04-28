//Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older).
// Create a variable ‘age’ and save a person’s age inside.
//Create an if-statement that checks if the person qualifies for a discount. If they do, display 'Discount' in the console. Otherwise, display 'No discount' in the console.
//let’s say the discount is only available if it is not a holiday. Create a variable: const isHoliday = true;
//Update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday.
  let age=85;
  const isHoliday=true;
  if((age<=6 || age>=65)&& isHoliday){
    console.log('Discount');
  }
  else {
    console.log('No Discount!');
  }
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignment/tree/main/1-JavaScript/Week3#exercise-2-dog-years

You know how old your dog is in human years, but what about dog years? Let's
calculate it!

1. Complete the function named `calculateDogAge`.

  - It takes one parameter: your (fictional) puppy's age (number).
  - Calculate your dog's age based on the conversion rate of 1 human year to
    7 dog years.
  - Return a string: "Your doggie is `age` years old in dog years!"

2. Use `console.log` to display the result of the function for three different
   ages.
-----------------------------------------------------------------------------*/

export function calculateDogAge(number) {
  return `Your doggie is ${7 * number} years old in dog years!`;
}
 
 console.log(calculateDogAge(1)); // For a 1-year-old dog
 console.log(calculateDogAge(3)); // For a 3-year-old dog
 console.log(calculateDogAge(5)); 
 // ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}

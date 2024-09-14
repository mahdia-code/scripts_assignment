// 1. Problem: Calculate Difference
function calculateDifference(num1, num2) {
    return num1 - num2; 
  }
  
  const difference = calculateDifference(1000, 998); 
  console.log(difference);


// 2. Problem: Check if a number is Odd
function isOdd(number) {
    return number % 2 !== 0; 
  }
  
  console.log(isOdd(1998)); 
  console.log(isOdd(2003));

  // 3. problem: Find the Minimum Number in an Array

  function findMin(numbers) {
    if (numbers.length === 0) {
      return undefined; 
    }
  
    let min = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i]; 
      }
    }
  
    return min; 
  }
  const myNumbers = [10, 5, 20, 3, 15];
  const smallestNumber = findMin(myNumbers);
  console.log(smallestNumber);

  // 4. Problem: Filter Even Numbers from an Array

function filterEvenNumbers(numbers) {
    const evenNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) { 
        evenNumbers.push(numbers[i]);
      }
    }
  
    return evenNumbers;
  }
  
  const numbersArrayForEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  const evenNumbersArray = filterEvenNumbers(numbersArrayForEven);  
  console.log(evenNumbersArray); 

  // 5. Problem: Sort Array in Descending Order

  function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
  }
  
  const numbersToSort = [10, 5, 20, 3, 15]; 
  const sortedNumbers = sortArrayDescending(numbersToSort);
  console.log(sortedNumbers);

  // 6. Problem: Lowercase the First Letter of a String
  function lowercaseFirstLetter(str) {
    if (str.length === 0) {
      return str; 
    }
    return str[0].toLowerCase() + str.slice(1);
  }
  console.log(lowercaseFirstLetter("Hello"));
  console.log(lowercaseFirstLetter("Web")); 
  console.log(lowercaseFirstLetter("Developer"));
  console.log(lowercaseFirstLetter(""));

  // 7. Problem: Count Vowels in a String

  function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  console.log(countVowels("Hello Developer"));
  console.log(countVowels("JavaScript"));
  console.log(countVowels("Programming"));

  // 8. Problem: Find Average of Numbers in an Array

  function findAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum / numbers.length;
  }
  const numbersToAverage = [10, 5, 20, 8, 7];
  const average = findAverage(numbersToAverage);
  console.log(average);
  
  // Life in weeks an interesting problem

  function lifeInWeeks(age) {
    const yearsRemaining = 90 - age;
    const days = yearsRemaining * 365; 
    const weeks = yearsRemaining * 52; 
    const months = yearsRemaining * 12; 
  
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
  }
  
  
  lifeInWeeks(25);
  
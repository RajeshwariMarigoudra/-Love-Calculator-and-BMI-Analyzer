function calculateLoveAndBMI() {
    // Get input values
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
  
    // Random Number Generation for Love Calculator
    const loveScore = Math.floor(Math.random() * 100);
  
    // BMI Calculator Advanced (IF/ELSE)
    const bmi = calculateBMI(height, weight);
    let bmiCategory;
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi < 25) {
      bmiCategory = "Normal weight";
    } else if (bmi < 30) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }
  
    // Leap Year Code Challenge
    const isLeapYear = isLeapYearCheck(new Date().getFullYear());
    let leapYearMessage;
    if (isLeapYear) {
      leapYearMessage = "This is a leap year!";
    } else {
      leapYearMessage = "This is not a leap year.";
    }
  
    // Collections: Working with JavaScript Arrays
    const fibonacciSequence = generateFibonacciSequence(10);
    let fibonacciMessage = "The first 10 Fibonacci numbers are: " + fibonacciSequence.join(", ");
  
    // Control Statements: While Loops
    let i = 0;
    let bottles = 99;
    while (bottles > 0) {
      console.log(`${bottles} bottles of beer on the wall...`);
      bottles--;
      i++;
    }
  
    // Control Statements: For Loops
    const lunchBuyers = ["Alice", "Bob", "Charlie"];
    let lunchMessage = "The lunch buyers are: ";
    for (let j = 0; j < lunchBuyers.length; j++) {
      lunchMessage += lunchBuyers[j] + " ";
    }
  
    // Display results
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
      <p>Love Score: ${loveScore}%</p>
      <p>BMI: ${bmi.toFixed(2)} (${bmiCategory})</p>
      <p>${leapYearMessage}</p>
      <p>${fibonacciMessage}</p>
      <p>${lunchMessage}</p>
    `;
  }
  
  // Helper functions
  function calculateBMI(height, weight) {
    return weight / (height * height);
  }
  
  function isLeapYearCheck(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  function generateFibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
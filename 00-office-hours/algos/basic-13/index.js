/*
  1. Print 1-255
  print1To255()
  Print all the integers from 1 to 255.
*/

// function declaration
function print1To255() {
  var int = 1;
  while (int <= 255) {
    console.log(int);
    int++;
  }
}

// function invocation
print1To255();

/*
  2. Print Odds 1-255
  printOdds1To255()
  Print all odd integers from 1 to 255.
*/

function printOdds1To255() {
  var int = 1;
  while (int <= 255) {
    if (int % 2 !== 0) {
      console.log(int);
    }
    int++;
  }
}

printOdds1To255();

/*
  3. Print Ints and Sum 0-255
  printIntsAndSum0To255()
  Print integers from 0 to 255, and with
  each integer print the sum so far.
*/

function printIntsAndSum0To255() {
  var int = 1;
  var sum = 0;

  while (int <= 255) {
    console.log(int);
    sum += int;
    console.log(sum);
    int++;
  }
}

printIntsAndSum0To255();

/*
  4. Iterate and Print Array
  printArrayVals(arr)
  Iterate through a given array, printing
  each value.
*/

function printArrayVals(arr) {
  var idx = 0;
  while (idx < arr.length) {
    console.log(arr[idx]);
    idx++; // i = i + 1
  }
}

var colors = ['red', 'blue', 'green'];
printArrayVals(colors);

function printArrayValsTrad(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrayValsTrad(colors);

/*
  5. Find and Print Max
  printMaxOfArray(arr)
  Given an array, find and print its largest
  element.
*/

function printMaxOfArray(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

let nums = [3, 7, 1, 9, 3, 4, 6];
printMaxOfArray(nums);

/*
  6. Get and Print Average
  printAverageOfArray(arr)
  Analyze an array’s values and print the
  average.
*/

/*
  7. Array with Odds
  returnOddsArray1To255()
  Create an array with all the odd integers
  between 1 and 255 (inclusive).
*/

/*
  8. Square the Values
  squareArrayVals(arr)
  Square each value in a given array, returning
  that same array with changed values.
*/

/*
  9. Greater than Y
  printArrayCountGreaterThanY(arr, y)
  Given an array and a value Y, count and print
  the number of array values greater than Y.
*/

/*
  10. Zero Out Negative Numbers
  zeroOutArrayNegativeVals(arr)
  Return the given array, after setting any
  negative values to zero.
*/

/*
  11. Max, Min, Average
  printMaxMinAverageArrayVals(arr)
  Given an array, print the max, min and
  average values for that array
*/

/*
  12. Shift Array Values
  shiftArrayValsLeft(arr)
  Given an array, move all values forward
  (to the left) by one index, dropping the
  first value and leaving a 0 (zero) value
  at the end of the array.
*/

/*
  13. Swap String For Array Negative Values
  swapStringForArrayNegativeVals(arr)
  Given an array of numbers, replace any
  negative values with the string 'Dojo'.
*/

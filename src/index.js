import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

import emojipedia from "./emojipedia";

ReactDom.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// var newNumbers = [];
// function doubleX(x) {
//   newNumbers.push(2 * x);
// }

// numbers.forEach(doubleX);
const newNumber2 = numbers.filter((num) => num > 10);

const newNumber3 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

const findOrNot = numbers.find((num) => num > 10);

const findIndex = numbers.findIndex((num) => num > 10);
// //var doubleNumbers = numbers.map(doubleX);
// console.log(newNumbers);
// console.log(newNumber2);
// console.log(newNumber3);
// console.log(findOrNot);
// console.log(findIndex);
// //console.log(doubleNumbers);

// const results = emojipedia.map(function (emoji) {
//   return emoji.meaning.substring(0, 100);
// });

// console.log(results);

// var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

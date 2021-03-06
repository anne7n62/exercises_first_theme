"use strict";

window.addEventListener("DOMContentLoaded", arrayCounter);

const arr = [];
let counter = 0;

function arrayCounter() {
    //Add item in the beginning of the array with unshift
  arr.unshift(counter);
  //Add +1s
  counter++;

  //Array can not be longer than 9 items
  //Extract item from the end of the array if the counter is bigger than 9
  if (counter > 9) {
    arr.pop(arr);
  }

  //Counter 1000 ms = 1 s
  setTimeout(arrayCounter, 1000);

  //Write the array in the console
  console.log(arr);
}
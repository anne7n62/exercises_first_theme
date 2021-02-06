"use strict";

// Vi kan skrive \n \ for at få sætningen splittet op
const longline = " A very, very, very, longline of text, that spands across the width of the editor";

// Vi kan indsætte i strings. I den med dollar - kan man lave line-break
const name = "Peter";
const drink = "Pepsi";
 
console.log (`Hello ${name}, would you like a ${drink}?`);
console.log("Hello "+name+", would you like a "+drink+"?");

//Exercise
const firstname = "Annemette";
const animal = "dog";
const animalname = "Balder";

console.log (`My name is ${firstname}.
I have a ${animal} called ${animalname}.`);
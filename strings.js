"use strict";

// Vi kan skrive \n \ for at få sætningen splittet op
const longline = " A very, very, very, longline of text, that spands across the width of the editor";

// Vi kan indsætte i strings. I den med dollar - kan man lave line-break
const name = "Longer Peter";
const drink = "Pepsi";
 
console.log (`Hello ${name}, would you like a ${drink}?`);
console.log("Hello "+name+", would you like a "+drink+"?");

//Exercise - indsæt variabel
const firstname = "Annemette";
const animal = "dog";
const animalname = "Balder";

console.log (`My name is ${firstname}.
I have a ${animal} called ${animalname}.`);

//Exercise - længden
const len = name.length;
console.log(`${name} is ${len} characters long`);

const letter = name[2];
console.log (`the first letter of ${name} is ${letter}`);

//Exercise - with .lenght and [index]
const wizardName = 'Albus Percival Wulfric Brian Dumbledore';
const længde = wizardName.length; 
//What is the total no of characters incl spaces?
console.log(`${wizardName} is ${længde} characters long`);

const bogstav = wizardName[38];
console.log (`the first letter of ${wizardName} is ${bogstav}`);

// med trim() fjernes space fra start og slut i stringen
const str1 = " There is     space here \n   ";
const str2 = str1.trim(); 

console.log (str2);

// parameteres
const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0,5);
console.log (firstName);

const albus = wizardName.substring(29,39);
console.log (albus);
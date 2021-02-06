"use strict";

console.log("We are running");

//Different datatypes
//Write bool, etc., to see the data in the console

const bool = true;
const num = 27;
const str = "Annemette";
const obj = {
    dogs: 2,
    bike: 1
};
const nothing = null;
let undf;
const symbol = symbol("symbol");

//We can also use typeof in the console - will tell you what type it is
typeof bool;
typeof num;

// testing concatenation
const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

n1 + n2;
s1 + s2;

n1 + s2;
s1 + n2;
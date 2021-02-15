"use strict";

function capitalize(str) {
console.log(str);
    
    const first = str.substring(0,1).toUpperCase();
    const second = str.substring(1,9).toLowerCase();
    const result = `${first}${second}`

    console.log (result);
}
const str = "anNeMette";
capitalize(str);



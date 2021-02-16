"use strict";

function capitalize(str) {
    
    str = str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
    return `Hello ${str}`;
}

const strname = capitalize("AnneMEtte");
console.log(strname);

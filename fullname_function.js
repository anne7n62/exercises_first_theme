"use strict";

function fullname (lastName, firstName, middleName) {
let result = "";

    if(middleName) {
        result = `${firstName}
    }

}







function getNameParts(lastName, firstName, middleName) {
    console.log();

console.log(firstName, middleName, lastName);

}

const fullname = ("Harry James Potter");
const firstSpace = fullname.indexOf(" ");
const lastSpace = fullname.lastIndexOf(" ");

const firstName = fullname.substring (0,firstSpace);
const middleName = fullname.substring (firstSpace, lastSpace).trim();
const lastName = fullname.substring(lastSpace).trim();

getNameParts(firstName, middleName, lastName);
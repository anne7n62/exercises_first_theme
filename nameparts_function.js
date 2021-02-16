"use strict";

function getNameParts(fullname) {
    console.log(fullname);

const firstSpace = fullname.indexOf(" ");
const lastSpace = fullname.lastIndexOf(" ");

const firstName = fullname.substring (0,firstSpace);
const middleName = fullname.substring (firstSpace, lastSpace).trim();
const lastName = fullname.substring(lastSpace).trim();

console.log({ firstName, middleName, lastName });

}

const fullname = "Annemette Mygind Haarh";
getNameParts(fullname);
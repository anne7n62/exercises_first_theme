
"use strict";

function nameParts(fullName) {
  let firstSpace = fullName.indexOf(" ");
  let lastSpace = fullName.lastIndexOf(" ");

  let firstName = capitalize(fullName.substring(0, firstSpace));
  let middleName = capitalize(fullName.substring(firstSpace + 1, lastSpace));
  let lastName = capitalize(fullName.substring(lastSpace + 1));


  return { firstName, middleName, lastName };
}

const theFullName = nameParts("AnneMEtte MYGind Haarh");
console.log(theFullName);

function capitalize(str) {
  str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return `${str}`;
}

// "use strict";

// function capitalize(str) {
// result = str.substring(0,1).toUpperCase() + str.substring(1,9).toLowerCase();
// return result; 
// }

// const fullname = ("Annemette MYgid hAarh");

// const firstSpace = fullname.indexOf(" ");
// const lastSpace = fullname.lastIndexOf(" ");

// const firstName = capitalize(fullname.substring (0,firstSpace));
// const middleName = capitalize(fullname.substring (firstSpace, lastSpace));
// const lastName = capitalize(fullname.substring(lastSpace));

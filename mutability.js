//Alt der gøres ved person1 sker med person2
//fordi det er det samme objekt. begge varibaler peger på samme objekt
// const person1 = {
//     firstName: "Peter",
//     age: 29,
//     student: false
// };

// const person2 = person1;

// person2.firstName ="other Peter";
// console.log(person1.firstName);

// //Peger også på samme objekt 
// let person3 = person1;
//______________________________________________

let person1 = {
        firstName: "Peter",
        age: 29,
        student: false
    };

let person2 = {
        firstName: "Peter",
        age: 29,
        student: false
    };

    // person1 og 3 ændres
let person3 = person1;
person3.firstName="Changed";

//person3 får navnet peter tlbage
person3 = person2;

// alle ændres - alle peger på person2, derfor smides person ud, den er gone!
person2.firstName = "Also changed";
person1 = person3;
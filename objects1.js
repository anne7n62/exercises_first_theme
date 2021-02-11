//tilføjer en property, der ikke findes
const person1 = {
    firstName: "Peter",
    age: 29,
    student: false
};

console.log (person1.lastName);
person1.lastName ="Lind";
console.log(person1.lastName);

//properties can also be removed
//den første eksistere stadig i arrayet, men vises som undefined
//den anden vises ikke, 
person1.lastName = undefined; 
console.log(person1.lastName);
console.log(person1.middleName);

//med delete fjernes property helt - man bruger det ikke?
delete person1.lastName;
console.log(person1.lastName);

//Man kan ændre objekt, selvom det er konst
person1.age++;
console.log(person1);

//Med en konst kan man ikke sige den anden er lig - ikke ændre objekt
const person2 = {
    firstName: "Annemette",
    age: 27,
    student: true
};
//Dette virker altså ikke
person1 = person2;

// Men man kan ændre propertier i objekt
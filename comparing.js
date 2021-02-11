//Are these two objects the same? yes
const student1 = {
    firstName: "Harry",
    lastName: "Potter"
};

const student2 = {
    firstName: "Harry",
    lastName: "Potter"
};

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

//const student2 = student1;

// Det er de samme
if (student1 == student2) {
    console.log("They are the same!");
} else {
    console.log("They are not ---");
}

//De er ikke det samme med to objekter

// Kun 1 ændre sig, da de peger på forskellige objekter
// student1.firstName = "Potty";
// console.log (student1);
// console.log (student2);



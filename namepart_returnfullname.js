function fullName(lastName,firstName,middleName) {
    let result = "";
    result = `${firstName} ${middleName?middleName : ""} ${lastName}`;
    return result;
}

const name = fullName("Haarh", "Annemette", "Mygind");
console.log(name);




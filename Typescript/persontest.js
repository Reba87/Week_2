"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var persona1 = new person_1.Person("Rafael", 30, "Calle Alcala 194");
persona1.printName();
console.log(persona1.yearOfBirth(2022));
persona1.setAdress("Calle Maria Molina 24, C.P: 28017, Madrid");
console.log(persona1.getAdress());

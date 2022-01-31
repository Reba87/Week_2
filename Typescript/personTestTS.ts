import {Person} from "./person"

let persona1 = new Person("Rafael", 30, "Calle Alcala 194")

persona1.printName()
console.log(persona1.yearOfBirth(2022))
persona1.setAdress("Calle Maria Molina 24, C.P: 28017, Madrid")
console.log(persona1.getAdress())
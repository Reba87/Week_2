let people = require (`./person`)


let persona1 = new people(65,1.70,"Mujer","Fiorella")
persona1.colorPelo = "Rubio";
persona1.colorOjos = "Azul";
persona1.colorPiel = "Blanco";
persona1.yearOfBirth = 1990;
persona1.hobbies = ["Bailar","Cocinar","Fotografia","Futbol","Escalar"];
console.log(persona1);
console.log(persona1.calcularImc())
persona1.printAll(persona1)
console.log(persona1.edad())
persona1.printHobbies()


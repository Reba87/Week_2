//Realizando pureba de mis clases

let people = require('./person')
let contacto = require('./contacts')



let persona1 = new people(80,1.90,"Hombre","Clemente");
persona1.hobbies = ["Futbol", "Video Juegos", "Boxeo"];
persona1.colorPiel = "Mulato";
persona1.colorOjos = "Marrones";
persona1.colorPelo = "Ninguno - Calvo";
persona1.yearOfBirth = 1985;

let persona2 = new people(65,1.50,"Mujer","Carla")
persona2.hobbies = ["Ciclismo", "Gimnasio", "Escalar", "Buceo"];
persona2.colorPiel = "Blanca";
persona2.colorOjos = "Verde";
persona2.colorPelo = "Pelirrojo";
persona2.yearOfBirth = 2000;

let persona3 = new people(100,1.85,"Hombre","Angelo");
persona3.hobbies = ["Padel", "Bolos", "Pasar", "Cocinar"];
persona3.colorPiel = "Blanco";
persona3.colorOjos = "Azules"
persona3.colorPelo = "Rubio"
persona3.yearOfBirth = 1990

let persona4 = new people(75,1.80,"Mujer","Bianca");
persona4.hobbies = ["Cocinar", "Animales", "Estudiar", "Video Juegos"];
persona4.colorPiel = "Negra";
persona4.colorOjos = "Marrones";
persona4.colorPelo = "Negro";
persona4.yearOfBirth = 1992;

let contacto1 = new contacto()
contacto1.contactosArr = [persona1,persona2,persona3,persona4]

contacto1.printContactos()
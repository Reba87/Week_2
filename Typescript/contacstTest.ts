import {Person} from"./person"
import {contacts} from"./contacPerson"



let contact = new contacts
let persona1 = new Person("Rafael",30,"Calle Maria Molina, Madrid");
let persona2 = new Person("Vilma",25,"Alcala, Madrid");
let persona3 = new Person("Gregorio",45, "Las Tablas, Madrid");
let persona4 = new Person("Camila",34,"San Esteban, Asturias");
contact.people = [persona1,persona2,persona3,persona4];


contact.printContacts() 
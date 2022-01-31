import {Book} from"./book"

// Main

let libro1 = new Book("Elon Musk: El empresario que anticipa el futuro",464,
"978-8499426631","Ashlee Vance","Ediciones Península");

libro1.setTitle("Elon Musk: El empresario que anticipa el futuro");
libro1.setnPages(464);
libro1.setisbn("978-8499426631");
libro1.seAuthor("Ashlee Vance");
libro1.setEditorial("Ediciones Península")

libro1.printAll()

"\n"
let libro2 = new Book("Nunca te pares: Autobiografía del fundador de Nike",
432,"978-8416029778","Phil Knight","CONECTA; 002 edición" );

libro2.setTitle("Nunca te pares: Autobiografía del fundador de Nike");
libro2.setnPages(432);
libro2.setisbn("978-8416029778");
libro2.seAuthor("Phil Knight");
libro2.setEditorial("CONECTA; 002 edición")

"\n"

libro2.printAll()

"\n"

let libro3 = new Book("Intoduccion a Javascript", 233, "2344433-BC23333","Josept Smith", "Now Editions")
libro3.seAuthor("Intoduccion a Javascript");
libro3.setnPages(233);
libro3.setisbn("2344433-BC23333");
libro3.seAuthor("Josept Smith");
libro3.setEditorial("Now Editions");

"\n"
libro3.printAll()
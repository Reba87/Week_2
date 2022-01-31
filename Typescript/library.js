"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var Library = /** @class */ (function () {
    //Declarando Constructor
    function Library(books, address, manager) {
        //Declarando atributos
        this.books = [];
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    // Declarando metodos
    Library.prototype.setAdress = function (address) {
        return this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        return this.manager = manager;
    };
    Library.prototype.getAdress = function (address) {
        return this.address;
    };
    Library.prototype.getManager = function (manager) {
        return this.manager;
    };
    Library.prototype.toString = function () {
        return this.books;
    };
    Library.prototype.showBooks = function () {
        console.log(this.toString());
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.books[author];
    };
    return Library;
}());
var libro2 = new book_1.Book("Nunca te pares: Autobiografía del fundador de Nike", 432, "978-8416029778", "Phil Knight", "CONECTA; 002 edición");
var libro1 = new book_1.Book("Elon Musk: El empresario que anticipa el futuro", 464, "978-8499426631", "Ashlee Vance", "Ediciones Península");
libro2.setTitle("Nunca te pares: Autobiografía del fundador de Nike");
libro2.setnPages(432);
libro2.setisbn("978-8416029778");
libro2.seAuthor("Phil Knight");
libro2.setEditorial("CONECTA; 002 edición");
var libreria = new Library([libro1, libro2], "Estados Unidos", "Walter Isaacson");
libreria.setAdress("Califoni, Estados Unidos");
libreria.setManager("Walter Isaacson");
console.log(libreria.findByAuthor("Phil Knight"));
//console.log(libreria.getNumberOfBooks())
//console.log(libreria.toString())

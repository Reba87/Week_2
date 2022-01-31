"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    // Bloque Constructor
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // Bloque Metodos
    Person.prototype.printName = function () {
        console.log("Name: " + this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        currentYear = currentYear;
        return currentYear - this.age;
    };
    Person.prototype.setAdress = function (address) {
        this.address = address;
    };
    Person.prototype.getAdress = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;

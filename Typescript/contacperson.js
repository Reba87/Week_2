"use strict";
exports.__esModule = true;
exports.contacts = void 0;
var contacts = /** @class */ (function () {
    function contacts() {
        // Declarando atributos.
        this.people = [];
        this.people;
    }
    contacts.prototype.printContacts = function () {
        console.log(this.people);
    };
    return contacts;
}());
exports.contacts = contacts;

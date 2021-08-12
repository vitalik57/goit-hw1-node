const getAll = require("./getAll");
const add = require("./add");
const del = require("./del");
const getbyid = require("./getbyid");
const update = require("./update");
module.exports = { getAll, add, del, getbyid, update };
// const fs = require("fs");
// const path = require("path");
// const contactsPath = fs.readFile("./db/contacts.json", (error, data) => {
//   console.log(error);
//   console.log(data);
// });
// /*
//  * Раскомментируй и запиши значение
//  * const contactsPath = ;
//  */

// // TODO: задокументировать каждую функцию
// function listContacts() {
//   // ...твой код
// }

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

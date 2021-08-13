
const functions = require("./contacts.js");
const argv = require("yargs").argv;

function invokeAction({ action, id, name, phone, email }) {
  switch (action) {
    case "list":
      functions.listContacts();
      break;
    case "get":
      functions.getContactById(id);
      break;
    case "add":
      functions.addContacts(name, email, phone);
      break;
    case "remove":
      functions.removeContact(id);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

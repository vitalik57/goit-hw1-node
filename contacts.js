

const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    }
    console.table(JSON.parse(data));
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    }
    const findContactBuId = JSON.parse(data).find(contact => contact.id === contactId);
    console.table(findContactBuId);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    }
    const deleteContact = JSON.parse(data).filter(contact => contact.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(deleteContact), err => {
      if (err) {
        console.log(err.message);
      }
    });
    console.table(deleteContact);
  });
}
function addContacts(name, email, phone) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    }
    const createContact = [...JSON.parse(data), { id: name, email, phone }];
    fs.writeFile(contactsPath, JSON.stringify(createContact), err => {
      if (err) {
        console.log(err.message);
      }
    });
    console.table(createContact);
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContacts
};

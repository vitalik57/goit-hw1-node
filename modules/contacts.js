const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "../db/contacts.json");
const listContacts = async () => {
  const list = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(list);
};

const getContactById = async contactId => {
  const list = await fs.readFile(contactsPath, "utf8");
  const findContactById = JSON.parse(list).find(contact => contact.id.toString() === contactId);

  return findContactById;
};

const removeContact = async contactId => {
  const list = await fs.readFile(contactsPath, "utf8");
  const deleteContact = JSON.parse(list).filter(contact => contact.id.toString() !== contactId);
  console.log(list.length, deleteContact.length);
  if (JSON.parse(list).length === deleteContact.length) {
    return `not found id ${contactId}`;
  }
  await fs.writeFile(contactsPath, JSON.stringify(deleteContact));
  return deleteContact;
};

const addContacts = async (name, email, phone) => {
  const list = await fs.readFile(contactsPath, "utf8");
  const createContact = [...JSON.parse(list), { id: name, email, phone, name }];
  await fs.writeFile(contactsPath, JSON.stringify(createContact));
  return createContact;
};

const ChangeContacts = async (body, id) => {
  const list = JSON.parse(await fs.readFile(contactsPath, "utf8"));
  const index = list.findIndex(ele => ele.id.toString() === id);
  if (index === -1) {
    return null;
  }
  list[index] = { ...list[index], ...body };
  await fs.writeFile(contactsPath, JSON.stringify(list));
  return list;
};
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContacts,
  ChangeContacts
};

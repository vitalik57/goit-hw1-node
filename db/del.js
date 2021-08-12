const fs = require("fs").promises;
const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const del = async id => {
  try {
    const contacts = await getAll();
    const idx = contacts.findIndex(item => item.id === id);

    if (idx === -1) {
      throw new Error(`Контакт с айди=${id} не найден`);
    }
    const newContact = contacts.filter(item => item.id !== id);
    await updateContacts(newContact);
    return contacts[idx];
  } catch (error) {}
};
module.exports = del;

const fs = require("fs").promises;
const getAll = require("../db/getAll");
const contactsPath = require("./productsPath");
const add = async data => {
  const newContact = { ...data };
  try {
    const contscts = await getAll();
    const newContacts = JSON.stringify([...contscts, newContact]);
    await fs.writeFile(contactsPath, newContacts);
    return newContacts;
  } catch (error) {
    throw error;
  }
};
module.exports = add;

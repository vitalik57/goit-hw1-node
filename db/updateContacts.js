const fs = require("fs").promises;
const contactsPath = require("./productsPath");
const updateContacts = async data => {
  try {
    const newContacts = JSON.stringify(data);
    await fs.writeFile(contactsPath, newContacts);
  } catch (error) {
    throw error;
  }
};

module.exports = updateContacts;

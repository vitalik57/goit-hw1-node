// const contacts = require("./contacts.json");
// console.log(contacts);
const fs = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "contacts.json");

const getAll = async () => {
  try {
    const data = await fs.readFile(filePath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    throw error;
  }
};
module.exports = getAll;

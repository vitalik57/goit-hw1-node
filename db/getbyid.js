const fs = require("fs").promises;
const getAll = require("./getAll");
const getbyid = async id => {
  try {
    const contacts = await getAll();
    const contact = contacts.find(item => item.id === id);
    if (!product) {
      throw new Error(`Товар по айди=${id} не найден`);
    }
    return contact;
  } catch (error) {
    throw error;
  }
};
module.exports = getbyid;

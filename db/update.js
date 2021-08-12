const fs = require("fs").promises;
const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const update = async (id, newProps) => {
  // try {
  //   const products = await getAll();
  //   const idx = products.findIndex(item => item.id === id);
  // if (idx === -1) {
  //   throw new Error(`Товар с id=${id} не найден`);
  // }
  //   products[idx] = { ...products[idx], ...newProps }; // {name, price, location, price: 6}
  //   await updateProducts(products);
  //   return products[idx];
  // } catch (error) {
  //   throw error;
  // }
  try {
    const contacts = await getAll();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1) {
      throw new Error(`Товар с id=${id} не найден`);
    }
    contacts[idx] = { ...contacts[idx], ...newProps };
    await updateContacts(contacts);
    // const newContacts = JSON.stringify([...contscts, newContact]);
    await fs.writeFile(contactsPath, newContacts);
    return contacts[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = update;

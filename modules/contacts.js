const { Contact } = require("../db/contactsModels");
const listContacts = async (req, res) => {
  const contacts = await Contact.find({});
  return res.json({ contacts });
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    return res.status(400).json({ message: `Not found contact with id ${id}` });
  }
  res.json({ contact, status: "success" });
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  await Contact.findByIdAndRemove(id);
  res.json({ status: "success" });
};

const addContacts = async (req, res) => {
  const { name, email, phone, favorite } = req.body;
  const contact = new Contact({ name, email, phone, favorite });
  await contact.save();
  res.json({ status: "success" });
};

const ChangeContacts = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  await Contact.findByIdAndUpdate(id, { $set: { name, email, phone } });
};
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContacts,
  ChangeContacts
};

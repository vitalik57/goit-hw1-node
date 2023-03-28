const router = require("express").Router();
const { listContacts, getContactById, removeContact, addContacts, ChangeContacts } = require("../modules/contacts");
const { validateBody, validateCreateBody } = require("../middlewares/validateBody");
const Joi = require("joi");

const addContactsChema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required()
});
const schemaUpdate = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string()
}).or("name", "email", "phone");

const putContactsChemaFavorire = Joi.object({
  favorite: Joi.boolean().required()
});
router.get("/", async (req, res) => {
  const data = await listContacts();
  res.send(data);
});
router.get("/:id", async (req, res) => {
  const data = await getContactById(req.params.id);
  return res.status(200).json(data);
});
router.post("/", validateCreateBody(addContactsChema), async (req, res) => {
  res.status(201).send(data);
});
router.delete("/:id", async (req, res) => {
  const data = await removeContact(req.params.id);
  if (!data) {
    return res.status(400).json({ message: "Not found" });
  }
  return res.status(200).json({ message: "contact delete" });
  // res.send(data);
});
router.put("/:id", validateBody(putContactsChemaFavorire), async (req, res) => {
  const data = await ChangeContacts(req.body, req.params.id);

  res.send(data);
});

module.exports = router;

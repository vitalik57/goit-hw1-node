const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"]
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  favorite: {
    type: Boolean,
    default: false
  }
});
const Contact = mongoose.model("Contact", postSchema);
module.exports = { Contact };

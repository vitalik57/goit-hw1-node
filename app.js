const express = require("express");
const morgan = require("morgan");
const mongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const contactsRouter = require("./routes/contacts");
require("dotenv").config();

const { PORT } = process.env;
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/contacts", contactsRouter);
app.use((req, res) => {
  res.status(404).json({ messege: "Not found" });
});
app.use((err, req, res, next) => {
  const { message = "Server wronge", status = 500 } = err;
  res.status(status).json({ message });
});

const start = async () => {
  const client = await mongoClient.connect(
    process.env.MONGO_URL,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );
  const db = client().db;
  const contacts = db.collection("contacts");
  console.log("Database connection successful");
  app.listen(PORT, () => {
    console.log("server is asign");
  });
};
start();

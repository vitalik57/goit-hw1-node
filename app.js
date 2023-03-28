const express = require("express");
const morgan = require("morgan");
const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const cors = require("cors");
const contactsRouter = require("./routes/contacts");
const { connectMongo } = require("./db/connections/connections");
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
  await connectMongo();

  app.listen(PORT, () => {
    console.log("server is asign");
  });
};
start();

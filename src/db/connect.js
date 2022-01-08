// imports
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const { MONGO_DB_URL_PRODUCTION } = process.env;

// db connection
function connect() {
  return mongoose.connect(MONGO_DB_URL_PRODUCTION);
}

module.exports = connect;

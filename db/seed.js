require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on("open", () => {
  console.log("Mongo is Connected");
});

const data = require("./data");
const Movie = require("../models/movie.js");

Movie.insertMany(data, (error, seededEntries) => {
  if (error) {
    console.log(error);
  } else {
    console.log(seededEntries);
  }
  process.exit();
});
const fs = require("fs");
const express = require("express");
const app = express();

// uuid for unique id
const { v4: uuidV4 } = require("uuid");

// read file and return notes as json
app.get("/notes", (req, res) => {
  let collection = JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"));
  res.json(collection);
});

app.post("/notes", (req, res) => {
  // get new note from request body
  const newNote = req.body;
  console.log(JSON.stringify(newNote));

  // get new id
  newNote.id = uuidV4();

  // read collection from the db.json file
  let collection = JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"));

  // push new note to db.json
  collection.push(newNote);

  // save new note in db.json
  fs.writeFileSync("./db/db.json", JSON.stringify(collection));
  console.log("Note successfully added to file!");

  // Send response
  res.json(collection);
});

module.exports = app;

const path = require("path");
const express = require("express");
const app = express();

// return the notes.html file from the server
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// return the index.html file (default) from the server
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

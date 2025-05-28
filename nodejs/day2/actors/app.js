const express = require("express");
const app = express();
const port = 5001;

const actors = require("./actor");

app.get("/", (req, res) => {
  res.send("Welcome to actors List");
});

app.get("/actors", (req, res) => {
  res.send(JSON.stringify(actors));
});

app.post("/actor", (req, res) => {
    console.log(req.body)
  res.send("POST Request Called");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

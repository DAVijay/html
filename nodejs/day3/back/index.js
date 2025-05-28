const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const actorRoutes = require('./routes/actor')

mongoose.connect('mongodb://127.0.0.1:27017/movieStars')
  .then(() => console.log("Db connected"))
  .catch( err => console.log(err))

app.use(express.json()) // middleware

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/api/:id", (req, res) => {
  const theId = req.params.id
  res.send(`welcome id : ${theId}`);
});

app.use('/actors',actorRoutes)

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

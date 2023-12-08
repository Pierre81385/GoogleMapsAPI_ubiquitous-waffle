const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  return console.log(
    `Express is listening at http://localhost:${process.env.PORT}`
  );
});

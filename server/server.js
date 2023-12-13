const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const DirectionsRouter = require("./routes/Directions_API");
const S3Router = require("./routes/S3Routes");
const RekognitionRouter = require("./routes/RekognitionRoutes");

app.use("/directions", DirectionsRouter);
app.use("/s3", S3Router);
app.use("/rekognition", RekognitionRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  return console.log(
    `Express is listening at http://localhost:${process.env.PORT}`
  );
});
